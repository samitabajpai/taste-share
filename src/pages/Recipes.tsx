import { Navigation } from "@/components/Navigation";
import { RecipeCard } from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { sampleRecipes } from "@/data/recipes";
import { Filter, SortAsc } from "lucide-react";
import { useState } from "react";

const Recipes = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const allTags = Array.from(new Set(sampleRecipes.flatMap(recipe => recipe.tags)));
  
  const filteredRecipes = selectedTag 
    ? sampleRecipes.filter(recipe => recipe.tags.includes(selectedTag))
    : sampleRecipes;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              All Recipes
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover amazing recipes from our community
            </p>
          </div>
          
          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center space-x-2 text-sm font-medium">
                <Filter className="h-4 w-4" />
                <span>Filter by:</span>
              </div>
              <Badge
                variant={selectedTag === null ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedTag(null)}
              >
                All
              </Badge>
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
              </p>
              <Button variant="outline" size="sm">
                <SortAsc className="h-4 w-4 mr-2" />
                Sort by Popular
              </Button>
            </div>
          </div>
          
          {/* Recipe Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          
          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No recipes found for the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Recipes;