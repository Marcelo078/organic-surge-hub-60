import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  trending?: boolean;
  slug: string;
}

const ArticleCard = ({ title, excerpt, category, readTime, publishDate, trending = false, slug }: ArticleCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${slug}`);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={handleClick}>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline">
            {category}
          </Badge>
          {trending && (
            <div className="flex items-center text-cta">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span className="text-xs font-medium">Trending</span>
            </div>
          )}
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-smooth line-clamp-2">
          {title}
        </CardTitle>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {publishDate}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;