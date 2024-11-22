import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
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

  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals && data.meals.length > 0) {
          const meal = data.meals[0];
          const ingredients = [];
          const measures = [];
          for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            // Add to the list only if the ingredient is non-empty
            if (ingredient && ingredient.trim() !== "") {
              ingredients.push(ingredient);
              measures.push(measure);
            }
          }
          setRecipe({
            idMeal: meal.idMeal,
            strMeal: meal.strMeal,
            strMealThumb: meal.strMealThumb,
            strIngredients: ingredients,
            strMeasures: measures,
            strInstructions: meal.strInstructions,
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
    <SafeAreaProvider className="bg-white flex-1">
      <View className="relative flex-1">
        {/* Icon Positioned Absolutely */}
        <AntDesign
          onPress={() => router.back()}
          name="close"
          size={24}
          color="darkgray"
          className="absolute top-20 right-5 z-10 bg-white p-2 rounded-full items-center justify-center border border-gray-300"
        />

        {/* Scrollable Content */}
        <ScrollView className="my-16">
          {/* Background Image */}
          <Image
            source={{ uri: recipe?.strMealThumb }}
            className="w-full h-96"
            resizeMode="cover"
            accessibilityLabel={`${recipe.strMeal} image`}
          />

          <Text className="text-4xl py-5 px-5 color-white bg-orange-600">
            {recipe?.strMeal}
          </Text>
          <View className="px-5">
            {/* Text Content */}
            <Text className="text-3xl pt-10 pb-3 color-orange-700">
              Ingredients
            </Text>
            {/* Render Ingredients List */}
            {recipe.strIngredients.map((ingredient, index) => (
              <View key={index}>
                <View className="pt-3 mx-3 flex-row justify-between">
                  <Text className="text-xl">{ingredient} :</Text>
                  <Text className="text-lg text-right">
                    {recipe.strMeasures[index]}
                  </Text>
                </View>
                <View className="h-[1px] bg-gray-400" />
              </View>
            ))}

            <Text className="text-3xl pt-20 pb-5 color-orange-700">
              Instructions
            </Text>
            <Text className="mx-3 mb-10 text-xl">
              {recipe?.strInstructions}
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
}
