import { Button } from "@/components/ui/button";
import { Search, ChefHat } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-food.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
            <ChefHat className="h-12 w-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Discover & Share
          <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Amazing Recipes
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join our community of food lovers. Share your favorite recipes and discover new culinary adventures.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="hero" size="hero" asChild>
            <Link to="/recipes">
              <Search className="mr-2 h-5 w-5" />
              Explore Recipes
            </Link>
          </Button>
          <Button variant="outline" size="hero" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
            <Link to="/add-recipe">
              Share Your Recipe
            </Link>
          </Button>
        </div>
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search for recipes..."
              className="w-full h-12 pl-12 pr-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};