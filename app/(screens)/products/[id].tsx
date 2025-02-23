import { products } from "@/lib/products";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { SafeAreaView, Text, StyleSheet, Image, View } from "react-native";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const productDetail = products.find((product) => product.name === id);

  if (!productDetail) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Product not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: productDetail.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.info}>
        <Text style={styles.name}>{productDetail.name}</Text>
        <Text style={styles.category}>{productDetail.category}</Text>
        <Text style={styles.price}>
          Tsh {productDetail.price.toLocaleString()}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 10,
    marginBottom: 20,
  },
  info: {
    width: "100%",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});
