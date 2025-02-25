import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { ArrowLeft, Heart } from "lucide-react-native";
import { useRouter } from "expo-router";

interface HeaderProps {
  title: string;
  showFavoriteIcon?: boolean;
  onFavoritePress?: () => void;
}
export default function Header({
  title,
  showFavoriteIcon = false,
  onFavoritePress,
}: HeaderProps) {
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <ArrowLeft size={24} color="#000" />
      </Pressable>

      {title && <Text style={styles.headerText}>{title}</Text>}

      <View style={styles.rightIcon}>
        {showFavoriteIcon ? (
          <Pressable onPress={onFavoritePress}>
            <Heart size={24} color="#000" />
          </Pressable>
        ) : (
          // Empty View to maintain the space-between layout even when no right icon
          <View style={styles.placeholder} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  backButton: {
    width: 40,
  },
  rightIcon: {
    width: 40,
    alignItems: "flex-end",
  },
  placeholder: {
    width: 24,
    height: 24,
  },
});
