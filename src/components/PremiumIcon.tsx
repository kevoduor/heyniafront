import { BarChart3, Bot, ShieldCheck, Clock, Sparkles } from "lucide-react";
import React from "react";

type Props = { name: string; className?: string };

const PremiumIcon: React.FC<Props> = ({ name, className }) => {
  const map: Record<string, JSX.Element> = {
    "unified-data": <BarChart3 className={className} />,
    "reliable-answers": <Bot className={className} />,
    "clinic-intelligence": <ShieldCheck className={className} />,
    clarity: <Clock className={className} />,
    "visualize-data": <BarChart3 className={className} />,
    "best-ai": <Bot className={className} />,
  };

  return map[name] ?? <Sparkles className={className} />;
};

export default PremiumIcon;
