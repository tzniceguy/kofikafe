import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import Header from "@/components/header";
import { Edit, NotepadText, Wallet } from "lucide-react-native";
import MapComponent from "@/components/map-component";

export default function Page() {
  const [selected, setSelected] = useState("deliver");
  const [showMap, setShowMap] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Order" />
      <View style={styles.container}>
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
                  onPress={() => setShowMap(true)}
                >
                  <Edit size={16} color="#000" />
                  <Text style={styles.buttonText}>Edit Address</Text>
                </Pressable>
                <Pressable style={styles.button}>
                  <NotepadText size={16} color="#000" />
                  <Text style={styles.buttonText}>Add Note</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
        {showMap && (
          <View style={mapOverlayStyles.overlay}>
            <View style={mapOverlayStyles.mapContainer}>
              <MapComponent />
              <Pressable
                style={mapOverlayStyles.closeButton}
                onPress={() => setShowMap(false)}
              >
                <Text>Close</Text>
              </Pressable>
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
                  <Text>Image</Text> {/* Replace with actual Image component */}
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
          <View style={styles.bottomSection}>
            <Wallet color="#FFA500" size={24} />
            <View style={styles.walletTextContainer}>
              <Text style={styles.paymentMethodText}>Cash/Wallet</Text>
              <Text style={styles.paymentAmountText}>
                Tsh. {selected === "deliver" ? "1500" : "1000"}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.orderButtonContainer}>
          <Pressable style={styles.orderButton}>
            <Text style={styles.orderButtonText}>Place Order</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
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
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 16,
  },
  paymentSummary: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 16,
    paddingBottom: 16,
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
  bottomSection: {
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
    color: "#666",
    marginTop: 4,
  },
  orderButtonContainer: {
    marginTop: 24,
    paddingBottom: 20,
  },
  orderButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "#FFA500",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  orderButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});

const mapOverlayStyles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  mapContainer: {
    width: "90%",
    height: "70%",
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 20,
    zIndex: 1001,
  },
});
