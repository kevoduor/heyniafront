import { useState, useEffect } from "react";
import { Search, Send, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AISearchBar = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [response, setResponse] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("kluster_api_key");
    if (saved) setApiKey(saved);
  }, []);
const handleSearch = async () => {
    if (!query.trim()) return;
    if (!apiKey) {
      setErrorMsg("Please add your Kluster API key to search.");
      return;
    }
    
    setIsSearching(true);
    setErrorMsg("");
    setResponse("");
    
    try {
      const res = await fetch('https://api.kluster.ai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful AI assistant for HeyNia, a dental practice management software. Answer questions about dental software features, pricing, automation, patient management, marketing, and clinic operations. Be concise and helpful.'
            },
            {
              role: 'user',
              content: query
            }
          ],
          max_tokens: 300,
          temperature: 0.7
        }),
      });
      
      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText || `HTTP ${res.status}`);
      }
      
      const data = await res.json();
      
      if (data.choices && data.choices[0]) {
        setResponse(data.choices[0].message.content);
      } else {
        setResponse("I couldn't find a direct answer. Try rephrasing your question or ask about features, pricing, or automation.");
      }
    } catch (error) {
      console.error('Kluster API Error:', error);
      setErrorMsg("We couldn't reach Kluster. Please check your API key and try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className="relative">
        <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden min-h-[60px]">
          <div className="flex-1 flex items-center px-4 sm:px-6 py-3 sm:py-4">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white/60 mr-2 sm:mr-3 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about HeyNia features, pricing, or clinic help..."
              className="flex-1 bg-transparent text-white placeholder-white/60 focus:outline-none text-sm sm:text-lg min-w-0"
            />
          </div>
          <Button
            onClick={() => setShowKey((s) => !s)}
            variant="heroSecondary"
            size="icon"
            className="m-2 rounded-full flex-shrink-0"
            aria-label="Set Kluster API key"
          >
            <KeyRound className="w-4 h-4" />
          </Button>
          <Button
            onClick={handleSearch}
            disabled={!query.trim() || isSearching}
            variant="pink"
            size="lg"
            className="m-2 rounded-full flex-shrink-0"
          >
            {isSearching ? (
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </Button>
        </div>
      </div>

      {showKey && (
        <div className="mt-2 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2">
          <KeyRound className="w-4 h-4 text-white/70" />
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter Kluster API key"
            className="flex-1 bg-transparent text-white placeholder-white/60 focus:outline-none text-sm"
          />
          <Button
            variant="heroSecondary"
            size="sm"
            onClick={() => {
              localStorage.setItem("kluster_api_key", apiKey);
              setShowKey(false);
            }}
          >
            Save
          </Button>
        </div>
      )}

      {errorMsg && <p className="mt-2 text-destructive text-sm">{errorMsg}</p>}

      {/* Response */}
      {response && (
        <div className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-brand-pink rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold">AI</span>
            </div>
            <div className="flex-1">
              <p className="text-white leading-relaxed">{response}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="heroSecondary" size="sm" onClick={() => setQuery("Tell me about pricing plans")}>
                  Pricing Plans
                </Button>
                <Button variant="heroSecondary" size="sm" onClick={() => setQuery("How does appointment automation work?")}>
                  Automation Features
                </Button>
                <Button variant="heroSecondary" size="sm" onClick={() => setQuery("Is HeyNia HIPAA compliant?")}>
                  Security & Compliance
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick suggestions when no response */}
      {!response && (
        <div className="mt-6 text-center">
          <p className="text-white/60 mb-4 text-sm sm:text-base">Try asking about:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button 
              variant="heroSecondary" 
              size="sm" 
              onClick={() => setQuery("How can HeyNia help reduce no-shows?")}
              className="text-xs sm:text-sm"
            >
              Reducing No-Shows
            </Button>
            <Button 
              variant="heroSecondary" 
              size="sm" 
              onClick={() => setQuery("What marketing features does HeyNia offer?")}
              className="text-xs sm:text-sm"
            >
              Marketing Features
            </Button>
            <Button 
              variant="heroSecondary" 
              size="sm" 
              onClick={() => setQuery("How much does HeyNia cost?")}
              className="text-xs sm:text-sm"
            >
              Pricing
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AISearchBar;