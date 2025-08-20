import formidable from "formidable";
import fs from "fs";
import AWS from "aws-sdk";

export const config = {
  api: { bodyParser: false },
};

const s3 = new AWS.S3({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const transcribeService = new AWS.TranscribeService({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const form = formidable({ multiples: false });
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "File parsing error" });

    const file = files.file;
    const fileStream = fs.createReadStream(file.filepath);
    const s3Key = `audio/${Date.now()}-${file.originalFilename}`;

    try {
      // Upload audio to S3
      await s3.upload({
        Bucket: process.env.AWS_S3_BUCKET,
        Key: s3Key,
        Body: fileStream,
      }).promise();

      // Start transcription
      const jobName = `job-${Date.now()}`;
      await transcribeService.startTranscriptionJob({
        TranscriptionJobName: jobName,
        LanguageCode: "en-US",
        Media: { MediaFileUri: `s3://${process.env.AWS_S3_BUCKET}/${s3Key}` },
        OutputBucketName: process.env.AWS_S3_BUCKET,
      }).promise();

      res.status(200).json({ transcript: "Transcription started, refresh later", jobName });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
}
