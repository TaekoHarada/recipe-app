import React, { useState } from "react";
import { View, Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";

export function CategoryDropdown() {
  const [selectedCategory, setSelectedCategory] = useState("Beef");

  return (
    <View
      className={`w-full ${
        Platform.OS === "ios" ? "h-48" : "h-12"
      } bg-white rounded-lg ${
        Platform.OS === "android" ? "border border-gray-300" : ""
      }`}
    >
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        className="text-lg"
      >
        <Picker.Item label="Beef" value="Beef" />
        <Picker.Item label="Breakfast" value="Breakfast" />
        <Picker.Item label="Chicken" value="Chicken" />
        <Picker.Item label="Vegetarian" value="Vegetarian" />
      </Picker>
    </View>
  );
}

export default CategoryDropdown;
