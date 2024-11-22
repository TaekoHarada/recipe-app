import { View, Text, StatusBar, FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Recipe } from "@/types";
import { useState, useEffect } from "react";
import { RecipeListItem } from "@/components/RecipeListItem";
import { fetchPopularRecipes } from "@/utils/api";

export default function HomeScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetchPopularRecipes().then((data) => setRecipes(data));
  }, []);

  return (
    <SafeAreaProvider className="bg-orange-200 flex-1">
      <FlatList
        data={recipes}
        contentContainerStyle={{ gap: 10 }}
        className="bg-green-100"
        renderItem={({ item }) => <RecipeListItem recipe={item} />}
      />
    </SafeAreaProvider>
  );
}
