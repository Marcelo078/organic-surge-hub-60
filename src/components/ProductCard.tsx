import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  category: string;
  rating?: number;
  affiliate_url: string;
  featured?: boolean;
}

const ProductCard = ({ title, description, category, rating = 5, affiliate_url, featured = false }: ProductCardProps) => {
  const handleClick = () => {
    window.open(affiliate_url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${featured ? 'ring-2 ring-cta shadow-cta' : ''}`}>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant={featured ? "default" : "secondary"}>
            {category}
          </Badge>
          {featured && (
            <Badge variant="destructive" className="bg-cta hover:bg-cta-hover">
              Destaque
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-smooth">
          {title}
        </CardTitle>
        <div className="flex items-center space-x-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm text-muted-foreground ml-2">{rating}.0</span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4 text-sm leading-relaxed">
          {description}
        </CardDescription>
        <Button 
          variant="cta" 
          className="w-full"
          onClick={handleClick}
        >
          Aproveitar Oferta
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;