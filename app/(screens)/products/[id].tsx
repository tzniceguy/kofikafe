import { products } from "@/lib/products";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, Heart } from "lucide-react-native";
import Header from "@/components/header";

export default function ProductDetail() {
  const router = useRouter();
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
      <Header />
      <View style={styles.productCard}>
        <Image
          source={productDetail.image}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.productInfo}>
          <Text style={styles.name}>{productDetail.name}</Text>
          <Text style={styles.category}>{productDetail.category}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  productCard: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  image: {
    width: "100%",
    height: "50%",
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "gray",
    justifyContent: "flex-start",
  },
  productInfo: {},
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
