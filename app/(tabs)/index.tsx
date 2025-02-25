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

const categories = [
  { id: 1, name: "americano" },
  { id: 2, name: "cappuccino" },
  { id: 3, name: "espresso" },
  { id: 4, name: "mocha" },
  { id: 5, name: "macchiato" },
];
export default function () {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={{ marginVertical: 4, fontSize: 14 }}>Location</Text>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 16 }}>
          Dar Es Salaam, Tanzania
        </Text>
        <View style={styles.search}>
          <TextInput style={styles.input} placeholder="Search for coffee" />
          <Pressable style={styles.settingsButton}>
            <Settings2 size={24} color="#000" />
          </Pressable>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <Text key={category.id}>{category.name}</Text>
          ))}
        </View>
        <ProductCatalogue />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  upperContainer: {
    flex: 0.3,
    backgroundColor: "gray",
    width: "100%",
    padding: 20,
  },
  search: {
    borderRadius: 10,
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  input: {
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
    flex: 1,
  },
  settingsButton: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  lowerContainer: {
    flex: 0.7,
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    fontSize: 12,
  },
});
