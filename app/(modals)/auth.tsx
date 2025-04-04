import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { defaultStyles } from "@/constants/styles";
import { useState } from "react";
import { handlelogin } from "@/services/auth";
import { useAuth } from "@/lib/authContext";

const AuthModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    if (!email || !password) {
      Alert.alert("Please enter email and password");
      return;
    }
    // TODO: Implement login logic
    try {
      await handlelogin(email, password);
    } catch (error) {
      console.error("error during login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/home.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.form}>
        <View style={styles.inputElement}>
          <Text>Email</Text>
          <TextInput
            style={styles.inputArea}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputElement}>
          <Text>Password</Text>
          <TextInput
            style={styles.inputArea}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View>
          <TouchableOpacity style={defaultStyles.button} onPress={onLogin}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    height: "40%",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  form: {
    flex: 1,
    gap: 10,
    padding: 20,
  },
  inputElement: {
    gap: 5,
  },
  inputArea: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
});

export default AuthModal;
