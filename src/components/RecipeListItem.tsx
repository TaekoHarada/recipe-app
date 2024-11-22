import { Recipe } from "@/types";
import { View, Text, Pressable, Image } from "react-native";
import { Link } from "expo-router";

export function RecipeListItem({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`../recipe/${recipe.idMeal}`} asChild>
      <Pressable className="p-5 items-center justify-center">
        <View className="relative w-[360px] h-[200px]">
          <Image
            source={{ uri: recipe.strMealThumb }}
            className="w-full h-full rounded-md"
            resizeMode="cover"
            accessibilityLabel={`${recipe.strMeal} image`}
          />
          <View className="absolute bottom-0 left-0 right-0 bg-orange-600/80 p-2 rounded-b-md">
            <Text className="text-white text-2xl text-center">
              {recipe.strMeal}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
