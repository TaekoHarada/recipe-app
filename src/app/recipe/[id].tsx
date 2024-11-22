import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text } from "react-native";
import { recipes } from "@/data";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function RecipeDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { bottom, left, right, top } = useSafeAreaInsets();
  console.log("bottom", bottom, "left", left, "right", right, "top", top);

  const recipe = recipes.find((recipe) => recipe.id === id);

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
          Recipe Details:{top}: {id} : {recipe?.ingredients}
        </Text>
      </View>
    </SafeAreaProvider>
  );
}
