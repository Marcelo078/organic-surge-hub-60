import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface CTAButtonProps {
  text: string;
  url: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const CTAButton = ({ text, url, variant = "primary", className = "" }: CTAButtonProps) => {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button 
      variant={variant === "primary" ? "cta" : "outline"} 
      size="lg"
      onClick={handleClick}
      className={`w-full sm:w-auto min-w-[200px] ${className}`}
    >
      {text}
      <ExternalLink className="w-4 h-4 ml-2" />
    </Button>
  );
};

export default CTAButton;