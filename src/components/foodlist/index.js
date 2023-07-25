import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export function FoodList({ data }) {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate("Detail", { data: data });
  }
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={style.container}
      onPress={handleNavigate}
    >
      <Image
        source={{ uri: data.cover }}
        style={{ width: "100%", height: 200, borderRadius: 14 }}
      />
      <View style={{ position: "absolute", bottom: 14, left: 14, zIndex: 99 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
          {data.name}
        </Text>
        <Text style={{ color: "#fff" }}>
          {data.total_ingredients} ingredientes | {data.time}
        </Text>
      </View>

      <LinearGradient
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "55%",
          borderRadius: 14,
          zIndex: 1,
          backgroundColor: "transparent",
        }}
        colors={["transparent", "rgba(0,0,0, 0.70)", "rgba(0,0,0, 0.70)"]}
      />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
});
