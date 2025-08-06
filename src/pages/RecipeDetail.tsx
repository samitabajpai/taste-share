import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { sampleRecipes } from "@/data/recipes";
import { useParams, Link } from "react-router-dom";
import { Clock, Users, Heart, ArrowLeft, Share2, Bookmark, ChefHat } from "lucide-react";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = sampleRecipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Recipe not found</h1>
          <Button asChild>
            <Link to="/recipes">Back to Recipes</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Button variant="ghost" className="mb-6" asChild>
            <Link to="/recipes">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Recipes
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recipe Image */}
            <div className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <Heart className="h-4 w-4 mr-2" />
                  Save Recipe
                </Button>
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Recipe Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {recipe.title}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {recipe.description}
                </p>
                
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                  <ChefHat className="h-4 w-4" />
                  <span>By {recipe.author}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {recipe.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Recipe Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <div className="text-sm font-medium">Prep Time</div>
                    <div className="text-xs text-muted-foreground">{recipe.prepTime}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="h-5 w-5 mx-auto mb-2 text-recipe-warm" />
                    <div className="text-sm font-medium">Cook Time</div>
                    <div className="text-xs text-muted-foreground">{recipe.cookTime}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-5 w-5 mx-auto mb-2 text-accent" />
                    <div className="text-sm font-medium">Servings</div>
                    <div className="text-xs text-muted-foreground">{recipe.servings}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Badge variant="outline" className="mx-auto">
                      {recipe.difficulty}
                    </Badge>
                    <div className="text-xs text-muted-foreground mt-1">Difficulty</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Ingredients and Instructions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Ingredients */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Ingredients</h2>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Instructions */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Instructions</h2>
                  <ol className="space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex space-x-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-relaxed pt-1">{instruction}</p>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeDetail;