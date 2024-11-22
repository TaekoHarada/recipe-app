import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Recipe } from "@/types";

import { useState, useEffect } from "react";

export default function RecipeDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { bottom, left, right, top } = useSafeAreaInsets();
  console.log("bottom", bottom, "left", left, "right", right, "top", top);

  // const recipe = recipes.find((recipe) => recipe.idMeal === id);
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals && data.meals.length > 0) {
          setRecipe({
            idMeal: data.meals[0].idMeal,
            strMeal: data.meals[0].strMeal,
            strIngredient1: data.meals[0].strIngredient1,
            strInstructions: data.meals[0].strInstructions,
          });
        } else {
          setRecipe(null); // In case the API returns no meals
        }
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  if (!recipe) {
    return <Text>Recipe not found</Text>;
  }

  return (
    <SafeAreaProvider className="bg-orange-200 flex-1">
      <View className="bg-orange-300 mt-20 mb-20">
        <AntDesign
          onPress={() => router.back()}
          name="close"
          size={24}
          className="absolute right-10"
        />

        <Text className="mt-10">
          Recipe Details: {id} : {recipe?.strMeal}
        </Text>
      </View>
    </SafeAreaProvider>
  );
}
