import { useState, useRef } from "react";

export default function DentalTranscriber() {
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleRecord = async () => {
    if (!recording) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => audioChunksRef.current.push(e.data);
      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        const formData = new FormData();
        formData.append("file", audioBlob, "consultation.wav");

        const res = await fetch("/api/transcribe", { method: "POST", body: formData });
        const data = await res.json();
        setTranscript(data.transcript);

        if (audioRef.current) {
          audioRef.current.src = URL.createObjectURL(audioBlob);
        }
      };

      mediaRecorder.start();
      setRecording(true);
    } else {
      mediaRecorderRef.current?.stop();
      setRecording(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg mt-4">
      <button onClick={handleRecord} className="px-4 py-2 bg-blue-600 text-white rounded">
        {recording ? "Stop Recording" : "Record Consultation"}
      </button>
      <audio ref={audioRef} controls className="mt-2 w-full"></audio>
      {transcript && (
        <div className="mt-2 p-2 bg-gray-100 rounded">
          <strong>Transcript:</strong>
          <p>{transcript}</p>
        </div>
      )}
    </div>
  );
}
