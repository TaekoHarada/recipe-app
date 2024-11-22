import { View, TextInput, Pressable, Text } from "react-native";

export function SearchBox() {
  return (
    <View className="flex flex-row items-center justify-between p-5 border">
      <TextInput placeholder="Search for recipes" className="flex-1" />
      <Pressable className="p-2 bg-blue-500 rounded">
        <Text className="text-white">Search</Text>
      </Pressable>
    </View>
  );
}
