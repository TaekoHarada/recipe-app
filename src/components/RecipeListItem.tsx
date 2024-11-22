import { Recipe } from "@/types";
import { View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";

export function RecipeListItem({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`../recipe/${recipe.idMeal}`} asChild>
      <Pressable className="p-5 border">
        <Ionicons name="checkmark-circle" size={32} color="green" />
        <Text key={recipe.idMeal}>
          {recipe.idMeal}: {recipe.strMeal}
        </Text>
        <Text className="text-gray-400">{recipe.strInstructions}</Text>
      </Pressable>
    </Link>
  );
}
