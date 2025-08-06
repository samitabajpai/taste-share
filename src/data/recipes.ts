import cookiesImage from "@/assets/recipe-cookies.jpg";
import pastaImage from "@/assets/recipe-pasta.jpg";
import saladImage from "@/assets/recipe-salad.jpg";

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  tags: string[];
  likes: number;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  calories?: number;
  author: string;
}

export const sampleRecipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Chocolate Chip Cookies",
    description: "Soft, chewy, and loaded with chocolate chips. The perfect comfort food that brings back childhood memories.",
    image: cookiesImage,
    cookTime: "12 min",
    prepTime: "15 min",
    servings: 24,
    difficulty: "Easy",
    tags: ["Dessert", "Baking", "Quick", "Family-friendly"],
    likes: 342,
    calories: 180,
    author: "Sarah Baker",
    ingredients: [
      "2¼ cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup butter, softened",
      "¾ cup granulated sugar",
      "¾ cup brown sugar",
      "2 large eggs",
      "2 tsp vanilla extract",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Preheat oven to 375°F (190°C).",
      "In a bowl, whisk together flour, baking soda, and salt.",
      "Cream butter and both sugars until light and fluffy.",
      "Beat in eggs and vanilla extract.",
      "Gradually mix in flour mixture until just combined.",
      "Fold in chocolate chips.",
      "Drop rounded tablespoons of dough onto ungreased baking sheets.",
      "Bake for 9-11 minutes or until golden brown.",
      "Cool on baking sheet for 2 minutes before transferring to wire rack."
    ]
  },
  {
    id: "2",
    title: "Fresh Herb Pasta Primavera",
    description: "A vibrant pasta dish bursting with fresh vegetables and aromatic herbs. Light, healthy, and incredibly flavorful.",
    image: pastaImage,
    cookTime: "20 min",
    prepTime: "15 min",
    servings: 4,
    difficulty: "Medium",
    tags: ["Vegetarian", "Pasta", "Healthy", "Italian"],
    likes: 189,
    calories: 420,
    author: "Marco Italiano",
    ingredients: [
      "12 oz penne pasta",
      "2 tbsp olive oil",
      "1 bell pepper, sliced",
      "1 zucchini, sliced",
      "1 cup cherry tomatoes",
      "3 cloves garlic, minced",
      "¼ cup fresh basil",
      "2 tbsp fresh parsley",
      "½ cup parmesan cheese",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook pasta according to package directions until al dente.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Add bell pepper and zucchini, cook for 3-4 minutes.",
      "Add cherry tomatoes and garlic, cook for 2 minutes.",
      "Drain pasta and add to skillet with vegetables.",
      "Toss with fresh herbs and parmesan cheese.",
      "Season with salt and pepper.",
      "Serve immediately with extra parmesan if desired."
    ]
  },
  {
    id: "3",
    title: "Mediterranean Garden Salad",
    description: "A refreshing salad packed with crisp vegetables, olives, and feta cheese. Perfect for a light lunch or dinner side.",
    image: saladImage,
    cookTime: "0 min",
    prepTime: "10 min",
    servings: 4,
    difficulty: "Easy",
    tags: ["Salad", "Vegetarian", "Healthy", "Mediterranean", "No-cook"],
    likes: 156,
    calories: 220,
    author: "Elena Mediterranean",
    ingredients: [
      "4 cups mixed greens",
      "1 cucumber, diced",
      "2 tomatoes, chopped",
      "½ red onion, thinly sliced",
      "½ cup kalamata olives",
      "4 oz feta cheese, crumbled",
      "3 tbsp olive oil",
      "2 tbsp red wine vinegar",
      "1 tsp dried oregano",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Wash and dry all vegetables thoroughly.",
      "In a large bowl, combine mixed greens, cucumber, tomatoes, and red onion.",
      "Add kalamata olives and feta cheese.",
      "In a small bowl, whisk together olive oil, red wine vinegar, and oregano.",
      "Season dressing with salt and pepper.",
      "Pour dressing over salad and toss gently to combine.",
      "Serve immediately for best texture and flavor."
    ]
  }
];