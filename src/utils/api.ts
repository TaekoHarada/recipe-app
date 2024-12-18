import axios from "axios";
import { Recipe } from "../types";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipesByCategory = async (category: string) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/filter.php?c=${category}`
    );
    const recipes = response.data.meals.map((meal: any) => ({
      idMeal: meal.idMeal,
      strMeal: meal.strMeal,
      strMealThumb: meal.strMealThumb,
      strIngredient1: [
        meal.strIngredient1,
        meal.strIngredient2,
        meal.strIngredient3,
        meal.strIngredient4,
        meal.strIngredient5,
        meal.strIngredient6,
        meal.strIngredient7,
        meal.strIngredient8,
        meal.strIngredient9,
        meal.strIngredient10,
        meal.strIngredient11,
        meal.strIngredient12,
        meal.strIngredient13,
        meal.strIngredient14,
        meal.strIngredient15,
        meal.strIngredient16,
        meal.strIngredient17,
        meal.strIngredient18,
        meal.strIngredient19,
        meal.strIngredient20,
      ],
      strMeasures: [
        meal.strMeasure1,
        meal.strMeasure2,
        meal.strMeasure3,
        meal.strMeasure4,
        meal.strMeasure5,
        meal.strMeasure6,
        meal.strMeasure7,
        meal.strMeasure8,
        meal.strMeasure9,
        meal.strMeasure10,
        meal.strMeasure11,
        meal.strMeasure12,
        meal.strMeasure13,
        meal.strMeasure14,
        meal.strMeasure15,
        meal.strMeasure16,
        meal.strMeasure17,
        meal.strMeasure18,
        meal.strMeasure19,
        meal.strMeasure20,
      ],
      strInstructions: meal.strInstructions,
    })) as Recipe[];

    return recipes;
  } catch (error) {
    console.error("Error fetching popular recipes:", error);
    throw error;
  }
};
