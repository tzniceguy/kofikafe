import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { ArrowLeft, Heart } from "lucide-react-native";
import { useRouter } from "expo-router";
export default function Header() {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => router.back()}>
        <ArrowLeft size={24} color="#000" />
      </Pressable>
      <Text style={styles.headerText}>Product Detail</Text>
      <Pressable>
        <Heart size={24} color="#000" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
