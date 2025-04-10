
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPercentage?: number;
  image: string;
  category: string;
  isFeatured?: boolean;
};

export type Category = {
  id: number;
  name: string;
  icon: string;
};

export const categories: Category[] = [
  { id: 1, name: "Burgerlar", icon: "🍔" },
  { id: 2, name: "Pitsa", icon: "🍕" },
  { id: 3, name: "Lavashlar", icon: "🌯" },
  { id: 4, name: "Ichimliklar", icon: "🥤" },
  { id: 5, name: "Sneklar", icon: "🍟" },
  { id: 6, name: "Shirinliklar", icon: "🍰" }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Chizburger",
    description: "Mazali mol go'shti kotleti pishloq va sous bilan",
    price: 29000,
    discountPercentage: 15,
    image: "/placeholder.svg",
    category: "Burgerlar",
    isFeatured: true
  },
  {
    id: 2,
    name: "Ikkitalik Gamburger",
    description: "Ikki porsiya go'sht sabzavotlar bilan",
    price: 39000,
    image: "/placeholder.svg",
    category: "Burgerlar",
    isFeatured: true
  },
  {
    id: 3,
    name: "Pepperoni",
    description: "Klassik pepperoni pitsasi motsarella bilan",
    price: 65000,
    discountPercentage: 10,
    image: "/placeholder.svg",
    category: "Pitsa"
  },
  {
    id: 4,
    name: "Margarita",
    description: "Pomidor sousi, motsarella va rayhon",
    price: 55000,
    image: "/placeholder.svg",
    category: "Pitsa",
    isFeatured: true
  },
  {
    id: 5,
    name: "Tovuqli lavash",
    description: "Tovuq filesi sabzavotlar bilan lavashda",
    price: 32000,
    discountPercentage: 20,
    image: "/placeholder.svg",
    category: "Lavashlar"
  },
  {
    id: 6,
    name: "Kola 0.5l",
    description: "Gazlangan ichimlik",
    price: 11000,
    image: "/placeholder.svg",
    category: "Ichimliklar"
  },
  {
    id: 7,
    name: "Kartoshka fri",
    description: "Xrustall kartoshka",
    price: 15000,
    discountPercentage: 5,
    image: "/placeholder.svg",
    category: "Sneklar",
    isFeatured: true
  },
  {
    id: 8,
    name: "Muzqaymoq",
    description: "Vanilli muzqaymoq shokolad bilan",
    price: 18000,
    image: "/placeholder.svg",
    category: "Shirinliklar"
  }
];

export const cartItems: Product[] = [products[0], products[6]];
