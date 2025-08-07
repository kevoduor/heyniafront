import { useState } from "react";
import { Search, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const AISearchBar = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [response, setResponse] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    // Simulate AI response - in real implementation, this would call your AI API
    setTimeout(() => {
      setResponse(`Based on your question about "${query}", HeyNia can help you streamline your dental practice operations. Our AI-powered platform offers comprehensive solutions for appointment management, patient communication, and marketing automation. Would you like to learn more about specific features like automated reminders, WhatsApp integration, or our analytics dashboard?`);
      setIsSearching(false);
    }, 2000);
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
        <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden">
          <div className="flex-1 flex items-center px-6 py-4">
            <Search className="w-5 h-5 text-white/60 mr-3" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about HeyNia features, pricing, or how it can help your clinic..."
              className="flex-1 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg"
            />
          </div>
          <Button
            onClick={handleSearch}
            disabled={!query.trim() || isSearching}
            variant="pink"
            size="lg"
            className="m-2 rounded-full"
          >
            {isSearching ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

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
          <p className="text-white/60 mb-4">Try asking about:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Button 
              variant="heroSecondary" 
              size="sm" 
              onClick={() => setQuery("How can HeyNia help reduce no-shows?")}
            >
              Reducing No-Shows
            </Button>
            <Button 
              variant="heroSecondary" 
              size="sm" 
              onClick={() => setQuery("What marketing features does HeyNia offer?")}
            >
              Marketing Features
            </Button>
            <Button 
              variant="heroSecondary" 
              size="sm" 
              onClick={() => setQuery("How much does HeyNia cost?")}
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