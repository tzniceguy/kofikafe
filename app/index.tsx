import React from "react";
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import colors from "@/constants/colors";

export default function Index() {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("@/assets/images/home.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.heading}>
          Fall in love with Cofee with Blissfull Delight!
        </Text>
        <Text style={styles.description}>
          welcome to our cozy coffee corner, where everycup is delightful for
          you
        </Text>
        <Pressable style={styles.button} onPress={() => router.push("/(tabs)")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingBottom: 60,
    paddingHorizontal: 20,
  },
  heading: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  description: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    marginVertical: 10,
  },
  button: {
    backgroundColor: colors.primary,
    width: "100%",
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
