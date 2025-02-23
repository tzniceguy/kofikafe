import { ImageSourcePropType } from "react-native";

type Product = {
  id: number;
  name: string;
  image: ImageSourcePropType;
  price: number;
  category: string;
};
export const products: Product[] = [
  {
    id: 1,
    name: "cappuccino",
    image: require("../assets/images/property1.png"),
    price: 1000,
    category: "Coffee",
  },
  {
    id: 2,
    name: "latte",
    image: require("../assets/images/property3.png"),
    price: 1000,
    category: "Coffee",
  },
  {
    id: 3,
    name: "espresso",
    image: require("../assets/images/property5.png"),
    price: 1000,
    category: "Coffee",
  },
  {
    id: 4,
    name: "mocha",
    image: require("../assets/images/property2.png"),
    price: 1000,
    category: "Coffee",
  },
  {
    id: 5,
    name: "macchiato",
    image: require("../assets/images/property4.png"),
    price: 1000,
    category: "Coffee",
  },
  {
    id: 6,
    name: "americano",
    image: require("../assets/images/property1.png"),
    price: 1000,
    category: "Coffee",
  },
  {
    id: 7,
    name: "caramel macchiato",
    image: require("../assets/images/property1.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 8,
    name: "caramel latte",
    image: require("../assets/images/property5.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 9,
    name: "caramel cappuccino",
    image: require("../assets/images/property3.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 10,
    name: "caramel espresso",
    image: require("../assets/images/property2.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 11,
    name: "caramel mocha",
    image: require("../assets/images/property4.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 12,
    name: "caramel macchiato",
    image: require("../assets/images/property1.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 13,
    name: "caramel americano",
    image: require("../assets/images/property1.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 14,
    name: "caffè mocha",
    image: require("../assets/images/property3.png"),
    price: 1000,
    category: "Caffè Specialties",
  },
  {
    id: 15,
    name: "caffè latte",
    image: require("../assets/images/property5.png"),
    price: 1000,
    category: "Caffè Specialties",
  },
  {
    id: 16,
    name: "caffè cappuccino",
    image: require("../assets/images/property2.png"),
    price: 1000,
    category: "Caffè Specialties",
  },
  {
    id: 17,
    name: "caffè espresso",
    image: require("../assets/images/property4.png"),
    price: 1000,
    category: "Caffè Specialties",
  },
  {
    id: 18,
    name: "caffè mocha",
    image: require("../assets/images/property2.png"),
    price: 1000,
    category: "Caffè Specialties",
  },
  {
    id: 19,
    name: "caffè macchiato",
    image: require("../assets/images/property1.png"),
    price: 1000,
    category: "Caffè Specialties",
  },
  {
    id: 20,
    name: "caffè americano",
    image: require("../assets/images/property3.png"),
    price: 1000,
    category: "Coffee",
  },
];
