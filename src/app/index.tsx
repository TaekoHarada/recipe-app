import { View, Text, StatusBar, FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Recipe } from "@/types";
import { useState, useEffect } from "react";
import { RecipeListItem } from "@/components/RecipeListItem";
import { fetchRecipesByCategory } from "@/utils/api";

import CategoryDropdown from "@/components/CategoryDropdown";

export default function HomeScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetchRecipesByCategory("seafood").then((data) => setRecipes(data));
  }, []);

  return (
    <SafeAreaProvider className="bg-orange-200 flex-1">
      <CategoryDropdown />
      <FlatList
        data={recipes}
        contentContainerStyle={{ gap: 10 }}
        className="bg-white"
        renderItem={({ item }) => <RecipeListItem recipe={item} />}
      />
    </SafeAreaProvider>
  );
}
