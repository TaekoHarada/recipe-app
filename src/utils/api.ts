import axios from "axios";
import { Recipe } from "../types";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchPopularRecipes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/random.php`);
    console.log("Popular recipes:", response.data);
    const recipes = response.data.meals.map((meal: any) => ({
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strIngredient1: meal.strIngredient1,
      strInstructions: meal.strInstructions,
    })) as Recipe[];

    console.log("Popular recipes:", recipes);
    return recipes;
  } catch (error) {
    console.error("Error fetching popular recipes:", error);
    throw error;
  }
};
