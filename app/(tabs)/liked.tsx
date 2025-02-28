import { defaultStyles } from "@/constants/styles";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function Page() {
  return (
    <SafeAreaView>
      <View style={[defaultStyles.container]}>
        <Text>Liked</Text>
      </View>
    </SafeAreaView>
  );
}
