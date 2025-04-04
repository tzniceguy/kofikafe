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
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import Header from "@/components/header";
import { defaultStyles } from "@/constants/styles";
import colors from "@/constants/colors";
import useCart from "@/lib/cartContext";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const productDetail = products.find((product) => product.name === id);
  const [selectedSize, setSelectedSize] = React.useState("M");

  const { addItem } = useCart();

  const addToCart = () => {
    if (!productDetail) {
      Alert.alert("Product not found");
      return;
    }

    const cartItem = {
      id,
      size: selectedSize,
      name: productDetail.name,
      price: productDetail.price,
    };

    addItem(cartItem);

    Alert.alert(
      "Success", // title
      `${productDetail.name} is added to cart successfully`, // message
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    );
  };

  if (!productDetail) {
    return (
      <SafeAreaView style={{ backgroundColor: "#fff" }}>
        <View style={defaultStyles.container}>
          <Text style={styles.errorText}>Product not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <Header title="Product Detail" showFavoriteIcon />
      <View style={defaultStyles.container}>
        <View style={styles.productCard}>
          <View style={styles.imageContainer}>
            <Image
              source={productDetail.image}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.productInfo}>
            <Text style={styles.name}>{productDetail.name}</Text>
            <Text style={styles.category}>{productDetail.category}</Text>
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
                <Pressable
                  key={size}
                  style={[
                    styles.sizeButton,
                    selectedSize === size && styles.selectedSizeButton,
                  ]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text
                    style={[
                      styles.sizeButtonText,
                      selectedSize === size && styles.selectedSizeButtonText,
                    ]}
                  >
                    {size}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
          <View style={styles.buySection}>
            <View>
              <Text style={styles.sectionTitle}>Price</Text>
              <Text style={styles.price}>Tsh: {productDetail.price}</Text>
            </View>
            <Pressable
              style={[defaultStyles.button, { width: "60%" }]}
              onPress={addToCart}
            >
              <Text style={styles.buyButtonText}>add to cart</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productCard: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 20,
  },
  imageContainer: {
    marginBottom: 10,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
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
  productDescription: {
    marginTop: 20,
    paddingVertical: 20,
    gap: 20,
  },
  descriptionSection: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 16,
    color: "#000",
  },
  descriptionText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  sizeSection: {
    gap: 12,
    paddingRight: 20,
  },
  sizeButtons: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-around",
  },
  sizeButton: {
    width: "33%",
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
  selectedSizeButton: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  selectedSizeButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
  buySection: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    alignItems: "center",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },

  buyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
