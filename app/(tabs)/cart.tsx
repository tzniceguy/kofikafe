import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import Header from "@/components/header";
import { Edit, NotepadText, Wallet } from "lucide-react-native";
import { defaultStyles } from "@/constants/styles";
import { useRouter } from "expo-router";

export default function Page() {
  const [selected, setSelected] = useState("deliver");
  const [showMap, setShowMap] = useState(false);
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Order" />
      <ScrollView style={[defaultStyles.container]}>
        <View style={styles.method}>
          <TouchableOpacity
            style={[
              styles.methodOption,
              selected === "deliver" && styles.selectedOption,
            ]}
            onPress={() => setSelected("deliver")}
          >
            <Text
              style={[
                styles.methodText,
                selected === "deliver" && styles.selectedText,
              ]}
            >
              Deliver
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.methodOption,
              selected === "pickup" && styles.selectedOption,
            ]}
            onPress={() => setSelected("pickup")}
          >
            <Text
              style={[
                styles.methodText,
                selected === "pickup" && styles.selectedText,
              ]}
            >
              Pickup
            </Text>
          </TouchableOpacity>
        </View>

        {selected === "deliver" && (
          <View style={styles.delivery}>
            <Text style={styles.title}>Delivery Address</Text>
            <View>
              <Text style={styles.addressText}>
                1234, 5th Avenue, New York, NY 10029
              </Text>
              <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.button}
                  onPress={() => router.push("/(modals)/map")}
                >
                  <Edit size={16} color="#000" />
                  <Text style={styles.buttonText}>Edit Address</Text>
                </Pressable>
                <Pressable
                  style={styles.button}
                  onPress={() => router.push("/(modals)/add-note")}
                >
                  <NotepadText size={16} color="#000" />
                  <Text style={styles.buttonText}>Add Note</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}

        {/* Cart items section */}
        <View style={styles.cartSection}>
          <Text style={styles.title}>Order Items</Text>
          <View style={styles.cartItemContainer}>
            <View style={styles.cartItem}>
              <View style={styles.productInfo}>
                <View style={styles.imageContainer}>
                  <Text>Image</Text>
                </View>
                <View style={styles.productDetails}>
                  <Text style={styles.productName}>Product Name</Text>
                  <Text style={styles.productDescription}>Product</Text>
                </View>
              </View>
              <View style={styles.quantityContainer}>
                <Text style={styles.quantityText}>Quantity</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Payment Summary Section */}
        <View style={styles.paymentSummary}>
          <View style={styles.paymentSummaryHeader}>
            <Text style={styles.title}>Payment Summary</Text>
          </View>
          <View style={styles.paymentDetails}>
            <Text style={styles.paymentDetailText}>Subtotal: Tsh. 1000</Text>
            {selected === "deliver" && (
              <Text style={styles.paymentDetailText}>
                Delivery Fee: Tsh. 500
              </Text>
            )}
          </View>
        </View>

        <View style={styles.paymentSection}>
          <Text style={styles.title}>Payment Method</Text>
          <View style={styles.paymentMethod}>
            <Wallet color="#FFA500" size={24} />
            <View style={styles.walletTextContainer}>
              <Text style={styles.paymentMethodText}>Cash/Wallet</Text>
              <Text style={styles.paymentAmountText}>
                Tsh. {selected === "deliver" ? "1500" : "1000"}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Pressable style={defaultStyles.button}>
              <Text style={styles.orderButtonText}>Place Order</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  method: {
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
  },
  methodOption: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },
  methodText: {
    fontWeight: "500",
  },
  selectedOption: {
    backgroundColor: "#FFA500",
  },
  selectedText: {
    color: "white",
    fontWeight: "500",
  },
  delivery: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginVertical: 16,
    paddingBottom: 16,
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 8,
  },
  addressText: {
    fontSize: 15,
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    marginTop: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  button: {
    flexDirection: "row",
    gap: 6,
    padding: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    minWidth: 100,
  },
  buttonText: {
    color: "#000",
    fontWeight: "500",
    fontSize: 14,
  },
  cartSection: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginVertical: 16,
    paddingBottom: 16,
  },
  cartItemContainer: {
    marginVertical: 8,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  productInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 4,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: "#757575",
  },
  quantityContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  quantityText: {
    fontWeight: "500",
  },
  paymentSection: {
    paddingBottom: 16,
  },
  paymentSummary: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 16,
    marginBottom: 16,
  },
  paymentSummaryHeader: {
    marginBottom: 8,
  },
  paymentDetails: {
    gap: 8,
  },
  paymentDetailText: {
    fontSize: 15,
    color: "#333",
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    padding: 12,
    borderRadius: 8,
  },
  walletTextContainer: {
    marginLeft: 12,
  },
  paymentMethodText: {
    fontWeight: "500",
    fontSize: 15,
  },
  paymentAmountText: {
    fontSize: 14,
    color: "#000",
    marginTop: 4,
  },
  orderButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
