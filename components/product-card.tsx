import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

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
  const router = useRouter();
  return (
    <Pressable
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "../products/[id]",
          params: { id: name },
        })
      }
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{name}</Text>
        <Text style={styles.productPrice}>{category}</Text>
        <Text style={styles.productPrice}>Tsh: {price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    height: 220,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 2,
    marginVertical: 8,
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    backgroundColor: "gray",
    borderTopLeftRadius: 10, // Match card radius
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  productInfo: {
    padding: 8,
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  productPrice: {
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
  },
});
