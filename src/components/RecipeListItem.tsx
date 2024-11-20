import { Recipe } from "@/types";
import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

export function RecipeListItem({ recipe }: { recipe: Recipe }) {
  return (
    <View className="p-5 border">
      <Ionicons name="checkmark-circle" size={32} color="green" />
      <Text key={recipe.id}>{recipe.name}</Text>
      <Text className="text-gray-400">{recipe.steps}</Text>
    </View>
  );
}
