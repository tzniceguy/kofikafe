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
import { Rating } from "react-native-ratings";

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
          <View style={styles.ratingsContainer}>
            <Rating startingValue={productDetail.ratings} imageSize={20} />
          </View>
        </View>
      </View>
      <View style={styles.productDescription}>
        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            {productDetail.description}
          </Text>
        </View>

        <View style={styles.sizeSection}>
          <Text style={styles.sectionTitle}>Size</Text>
          <View style={styles.sizeButtons}>
            {["S", "M", "L"].map((size) => (
              <Pressable key={size} style={styles.sizeButton}>
                <Text style={styles.sizeButtonText}>{size}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.bottomSection}>
          <View>
            <Text style={styles.sectionTitle}>Price</Text>
            <Text style={styles.price}>Tsh: {productDetail.price}</Text>
          </View>
          <Pressable style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    padding: 20,
  },
  productCard: {
    margin: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
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
  errorText: {
    fontSize: 18,
    color: "red",
  },
  ratingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  productDescription: {
    marginTop: 20,
    gap: 20,
    paddingHorizontal: 20,
  },
  descriptionSection: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  descriptionText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  sizeSection: {
    gap: 12,
  },
  sizeButtons: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-around",
  },
  sizeButton: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeButtonText: {
    fontSize: 18,
    color: "#000",
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  buyButton: {
    backgroundColor: "#000",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
