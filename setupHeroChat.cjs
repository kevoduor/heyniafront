// setupHeroChat.cjs
const fs = require('fs');
const path = require('path');

const heroPath = path.join(process.cwd(), 'src/components/HeroChat.tsx');
const apiPath = path.join(process.cwd(), 'src/pages/api/ask-ai.ts');

// Ensure folders exist
fs.mkdirSync(path.dirname(heroPath), { recursive: true });
fs.mkdirSync(path.dirname(apiPath), { recursive: true });

// HeroChat component
const heroCode = `'use client'

import { useState } from 'react'

export default function HeroChat() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const res = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      const data = await res.json();
      setAnswer(data.answer || 'No answer found.');
    } catch (err) {
      console.error(err);
      setAnswer('Error fetching answer.');
    }

    setLoading(false);
  };

  return (
    <div className="hero-chat p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-lg flex flex-col max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Ask about patient schedules, billing, inventory..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 rounded-md mb-2 w-full bg-white/20 border border-white/30 text-white"
      />
      <button
        onClick={handleAsk}
        disabled={loading}
        className="p-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
      >
        {loading ? 'Searching...' : 'Ask'}
      </button>
      {answer && <div className="mt-2 p-2 bg-white/20 rounded-md text-white">{answer}</div>}
    </div>
  );
}
`;

// API route
const apiCode = `import type { NextApiRequest, NextApiResponse } from 'next';
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
        'Authorization': \`Bearer \${process.env.KLUSTER_API_KEY}\`,
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
`;

// Write files
fs.writeFileSync(heroPath, heroCode, 'utf8');
fs.writeFileSync(apiPath, apiCode, 'utf8');

console.log('HeroChat component and API route created successfully!');
