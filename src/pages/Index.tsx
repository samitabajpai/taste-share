import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { RecipeCard } from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { sampleRecipes } from "@/data/recipes";
import { TrendingUp, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Featured Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Recipes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the most loved recipes from our community of food enthusiasts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sampleRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="recipe" size="lg" asChild>
              <Link to="/recipes">
                View All Recipes
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">1,200+</h3>
              <p className="text-muted-foreground">Recipes Shared</p>
            </div>
            <div className="space-y-3">
              <div className="bg-recipe-warm/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8 text-recipe-warm" />
              </div>
              <h3 className="text-2xl font-bold">45 min</h3>
              <p className="text-muted-foreground">Average Cook Time</p>
            </div>
            <div className="space-y-3">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">25,000+</h3>
              <p className="text-muted-foreground">Recipe Saves</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Share Your Culinary Creations?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of home cooks sharing their favorite recipes and discovering new ones every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/add-recipe">
                Share Your Recipe
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/recipes">
                Browse Recipes
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;