import { View, Text, StatusBar, FlatList } from "react-native";
import { recipes } from "@/data";
import { RecipeListItem } from "@/components/RecipeListItem";

export default function HomeScreen() {
  return (
    <FlatList
      data={recipes}
      contentContainerStyle={{ gap: 10 }}
      className="bg-green-100"
      renderItem={({ item }) => <RecipeListItem recipe={item} />}
    />
  );
}
