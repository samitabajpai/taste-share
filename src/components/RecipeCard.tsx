import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  tags: string[];
  likes: number;
}

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <Card className="overflow-hidden hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:scale-[1.02] group cursor-pointer bg-card border-border/50">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3">
            <div className="bg-background/90 backdrop-blur-sm rounded-full p-2 flex items-center space-x-1 text-xs">
              <Heart className="h-3 w-3 text-muted-foreground" />
              <span className="text-muted-foreground">{recipe.likes}</span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <CardContent className="p-4 space-y-3">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
              {recipe.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
              {recipe.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{recipe.cookTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>{recipe.servings}</span>
              </div>
            </div>
            <Badge variant="secondary" className="text-xs">
              {recipe.difficulty}
            </Badge>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {recipe.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};