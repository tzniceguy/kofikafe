import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  category: string;
};

export default function ProductCard({
  image,
  name,
  price,
  category,
}: ProductCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{name}</Text>
        <Text style={styles.productPrice}>{category}</Text>
        <Text style={styles.productPrice}>Tsh: {price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 8,
  },
  imageContainer: {
    width: "100%",
    height: "65%",
    backgroundColor: "gray",
    borderRadius: 10,
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  productInfo: {
    padding: 8,
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
  },
});
