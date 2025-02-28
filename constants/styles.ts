import { StyleSheet } from "react-native";
import colors from "./colors";

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  button: {
    padding: 16,
    backgroundColor: colors.primary,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    gap: 6,
  },
});
