import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { Settings2 } from "lucide-react-native";
import ProductCatalogue from "@/components/product-catalogue";
import { defaultStyles } from "@/constants/styles";

const categories = [
  { id: 1, name: "Americano" },
  { id: 2, name: "Cappuccino" },
  { id: 3, name: "Espresso" },
  { id: 4, name: "Mocha" },
];

export default function SearchScreen() {
  return (
    <SafeAreaView
      style={[defaultStyles.container, { flex: 1, backgroundColor: "#313131" }]}
    >
      <View style={styles.upperContainer}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.location}>Dar Es Salaam, Tanzania</Text>
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="Search for coffee"
            placeholderTextColor="#757575"
          />
          <Pressable style={styles.settingsButton}>
            <Settings2 size={24} color="#000" />
          </Pressable>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <Pressable key={category.id} style={styles.categoryButton}>
              <Text style={styles.categoryText}>{category.name}</Text>
            </Pressable>
          ))}
        </View>
        <ProductCatalogue />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  upperContainer: {
    flex: 0.25, // Slightly smaller to balance layout
    backgroundColor: "#313131",
    width: "100%",
    padding: 20,
  },
  label: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 4,
  },
  location: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    elevation: 2, // Subtle shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 12, // Adjusted for balance
    borderRadius: 8,
    backgroundColor: "white",
  },
  settingsButton: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginLeft: 8,
  },
  lowerContainer: {
    backgroundColor: "#e3e3e3",
    flex: 0.75,
    width: "100%",
    paddingHorizontal: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginVertical: 16,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    marginVertical: 4,
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    textTransform: "capitalize", // Consistent casing
  },
});
