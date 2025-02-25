import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Header from "@/components/header";

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.container}>
        <Text>Cart</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
