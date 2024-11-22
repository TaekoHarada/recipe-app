import { Recipe } from "@/types";

export const recipes: Recipe[] = [
  {
    id: "1",
    name: "Spaghetti Bolognese",
    ingredients: [
      "spaghetti",
      "ground beef",
      "onion",
      "garlic",
      "tomato sauce",
      "olive oil",
      "salt",
      "pepper",
    ],
    steps: [
      "Boil water and cook spaghetti according to package instructions.",
      "Heat olive oil in a pan, sauté onion and garlic until soft.",
      "Add ground beef to the pan and cook until browned.",
      "Pour in tomato sauce, season with salt and pepper, and simmer for 15 minutes.",
      "Serve the sauce over the cooked spaghetti.",
    ],
  },
  {
    id: "2",
    name: "Chicken Curry",
    ingredients: [
      "chicken breast",
      "onion",
      "garlic",
      "ginger",
      "curry powder",
      "coconut milk",
      "salt",
      "oil",
    ],
    steps: [
      "Cut chicken into bite-sized pieces.",
      "Heat oil in a pan, sauté onion, garlic, and ginger until fragrant.",
      "Add chicken and cook until no longer pink.",
      "Stir in curry powder and mix well.",
      "Pour in coconut milk, season with salt, and simmer until the chicken is cooked through.",
    ],
  },
  {
    id: "3",
    name: "Pancakes",
    ingredients: ["flour", "milk", "egg", "sugar", "baking powder", "butter"],
    steps: [
      "In a bowl, mix flour, sugar, and baking powder.",
      "Add milk and egg, and whisk until smooth.",
      "Heat a non-stick pan and melt a little butter.",
      "Pour batter into the pan to form a pancake, cook until bubbles form on the surface, then flip and cook the other side.",
      "Serve warm with your favorite toppings.",
    ],
  },
];
