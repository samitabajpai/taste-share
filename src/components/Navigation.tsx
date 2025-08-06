import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChefHat, Search, Plus, Heart } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <ChefHat className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block text-xl">
              RecipeShare
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search recipes..."
                className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 pl-9 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/favorites">
                <Heart className="h-4 w-4 mr-1" />
                Favorites
              </Link>
            </Button>
            <Button variant="recipe" size="sm" asChild>
              <Link to="/add-recipe">
                <Plus className="h-4 w-4 mr-1" />
                Add Recipe
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </nav>
  );
};