// app/(screens)/profile.tsx
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Header from "@/components/header";
import { User, Coffee, LogOut } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // Add logout logic here (e.g., clear auth state)
    router.replace("/"); // Redirect to homescreen
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Profile" />
      <ScrollView contentContainerStyle={styles.container}>
        {/* User Info Section */}
        <View style={styles.userSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: "https://via.placeholder.com/100" }} // Replace with user avatar
              style={styles.avatar}
            />
          </View>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john.doe@example.com</Text>
        </View>

        {/* Order History Section */}
        <View style={styles.orderSection}>
          <Text style={styles.title}>Recent Orders</Text>
          <View style={styles.orderItem}>
            <Coffee size={24} color="#FFA500" />
            <View style={styles.orderDetails}>
              <Text style={styles.orderName}>Latte</Text>
              <Text style={styles.orderDate}>Feb 25, 2025</Text>
            </View>
            <Text style={styles.orderPrice}>Tsh 1,200</Text>
          </View>
          <View style={styles.orderItem}>
            <Coffee size={24} color="#FFA500" />
            <View style={styles.orderDetails}>
              <Text style={styles.orderName}>Cappuccino</Text>
              <Text style={styles.orderDate}>Feb 24, 2025</Text>
            </View>
            <Text style={styles.orderPrice}>Tsh 1,500</Text>
          </View>
        </View>

        {/* Logout Button */}
        <View style={styles.logoutSection}>
          <Pressable style={styles.logoutButton} onPress={handleLogout}>
            <LogOut size={20} color="#fff" />
            <Text style={styles.logoutText}>Log Out</Text>
          </Pressable>
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
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexGrow: 1,
  },
  userSection: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 12,
    backgroundColor: "#f0f0f0",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: "#666",
  },
  orderSection: {
    marginVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
    marginBottom: 12,
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  orderDetails: {
    flex: 1,
    marginLeft: 12,
  },
  orderName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  orderDate: {
    fontSize: 14,
    color: "#757575",
    marginTop: 2,
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  logoutSection: {
    marginTop: 24,
    alignItems: "center",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFA500",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 8,
  },
});
