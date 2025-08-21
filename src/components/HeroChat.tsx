'use client'

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
