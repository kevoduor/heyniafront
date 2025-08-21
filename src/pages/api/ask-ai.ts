import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { query } = req.body;
  if (!query) return res.status(400).json({ error: 'No query provided' });

  try {
    const response = await fetch('https://api.kluster.ai/v1/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.KLUSTER_API_KEY}`,
      },
      body: JSON.stringify({ prompt: query }),
    });

    const data = await response.json();
    res.status(200).json({ answer: data.answer || 'No answer found' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ answer: 'Error fetching answer' });
  }
}
