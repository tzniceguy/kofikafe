import { ImageSourcePropType } from "react-native";

type Product = {
  id: number;
  description: string;
  ratings: number;
  name: string;
  image: ImageSourcePropType;
  price: number;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "cappuccino",
    description:
      "Classic Italian coffee drink with espresso and steamed milk foam",
    ratings: 4.5,
    image: require("../assets/images/property1.png"),
    price: 1000,
    category: "Coffee",
  },
  {
    id: 2,
    name: "latte",
    description: "Espresso with steamed milk and light layer of foam",
    ratings: 4.3,
    image: require("../assets/images/property3.png"),
    price: 1000,
    category: "Coffee",
  },
  {
    id: 3,
    name: "espresso",
    description: "Concentrated form of coffee served in small shots",
    ratings: 4.4,
    image: require("../assets/images/property5.png"),
    price: 1000,
    category: "Coffee",
  },
  {
    id: 4,
    name: "mocha",
    description: "Espresso with steamed milk and chocolate",
    ratings: 4.6,
    image: require("../assets/images/property2.png"),
    price: 1000,
    category: "Coffee",
  },
  {
    id: 5,
    name: "macchiato",
    description: "Espresso with a small amount of steamed milk",
    ratings: 4.2,
    image: require("../assets/images/property4.png"),
    price: 1000,
    category: "Coffee",
  },
  {
    id: 6,
    name: "americano",
    description: "Espresso diluted with hot water",
    ratings: 4.1,
    image: require("../assets/images/property1.png"),
    price: 1000,
    category: "Coffee",
  },
  {
    id: 7,
    name: "caramel macchiato",
    description:
      "Vanilla-flavored drink marked with espresso and caramel sauce",
    ratings: 4.7,
    image: require("../assets/images/property1.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 8,
    name: "caramel latte",
    description: "Espresso with steamed milk and caramel syrup",
    ratings: 4.5,
    image: require("../assets/images/property5.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 9,
    name: "caramel cappuccino",
    description: "Traditional cappuccino with added caramel flavor",
    ratings: 4.4,
    image: require("../assets/images/property3.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 10,
    name: "caramel espresso",
    description: "Shot of espresso with caramel syrup",
    ratings: 4.3,
    image: require("../assets/images/property2.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 11,
    name: "caramel mocha",
    description: "Mocha with added caramel syrup",
    ratings: 4.6,
    image: require("../assets/images/property4.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 12,
    name: "caramel macchiato",
    description: "Steamed milk and vanilla with caramel drizzle",
    ratings: 4.7,
    image: require("../assets/images/property1.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 13,
    name: "caramel americano",
    description: "Americano with caramel syrup",
    ratings: 4.2,
    image: require("../assets/images/property1.png"),
    price: 1000,
    category: "Caramel Beverages",
  },
  {
    id: 14,
    name: "caffè mocha",
    description: "Espresso with steamed milk and chocolate",
    ratings: 4.5,
    image: require("../assets/images/property3.png"),
    price: 1000,
    category: "Caffè Specialties",
  },
  {
    id: 15,
    name: "caffè latte",
    description: "Italian coffee drink with espresso and steamed milk",
    ratings: 4.4,
    image: require("../assets/images/property5.png"),
    price: 1000,
    category: "Caffè Specialties",
  },
  {
    id: 16,
    name: "caffè cappuccino",
    description: "Equal parts espresso, steamed milk and milk foam",
    ratings: 4.6,
    image: require("../assets/images/property2.png"),
    price: 1000,
    category: "Caffè Specialties",
  },
  {
    id: 17,
    name: "caffè espresso",
    description: "Pure Italian style espresso",
    ratings: 4.3,
    image: require("../assets/images/property4.png"),
    price: 1000,
    category: "Caffè Specialties",
  },
  {
    id: 18,
    name: "caffè mocha",
    description: "Italian style mocha with rich chocolate",
    ratings: 4.5,
    image: require("../assets/images/property2.png"),
    price: 1000,
    category: "Caffè Specialties",
  },
  {
    id: 19,
    name: "caffè macchiato",
    description: "Traditional Italian macchiato",
    ratings: 4.2,
    image: require("../assets/images/property1.png"),
    price: 1000,
    category: "Caffè Specialties",
  },
  {
    id: 20,
    name: "caffè americano",
    description: "Italian style americano",
    ratings: 4.1,
    image: require("../assets/images/property3.png"),
    price: 1000,
    category: "Coffee",
  },
];
