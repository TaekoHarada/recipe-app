import { View, Text, StatusBar, FlatList } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { recipes } from "@/data";
import { RecipeListItem } from "@/components/RecipeListItem";

export default function HomeScreen() {
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
