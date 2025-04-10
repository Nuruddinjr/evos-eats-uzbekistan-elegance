
export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
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
  { id: 1, name: "Бургеры", icon: "🍔" },
  { id: 2, name: "Пицца", icon: "🍕" },
  { id: 3, name: "Лаваши", icon: "🌯" },
  { id: 4, name: "Напитки", icon: "🥤" },
  { id: 5, name: "Снеки", icon: "🍟" },
  { id: 6, name: "Десерты", icon: "🍰" }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Чизбургер",
    description: "Сочная говяжья котлета с сыром и соусом",
    price: 29000,
    image: "/placeholder.svg",
    category: "Бургеры",
    isFeatured: true
  },
  {
    id: 2,
    name: "Двойной Гамбургер",
    description: "Двойная порция мяса с овощами",
    price: 39000,
    image: "/placeholder.svg",
    category: "Бургеры",
    isFeatured: true
  },
  {
    id: 3,
    name: "Пепперони",
    description: "Классическая пицца с пепперони и моцареллой",
    price: 65000,
    image: "/placeholder.svg",
    category: "Пицца"
  },
  {
    id: 4,
    name: "Маргарита",
    description: "Томатный соус, моцарелла и базилик",
    price: 55000,
    image: "/placeholder.svg",
    category: "Пицца",
    isFeatured: true
  },
  {
    id: 5,
    name: "Лаваш с курицей",
    description: "Куриное филе с овощами в лаваше",
    price: 32000,
    image: "/placeholder.svg",
    category: "Лаваши"
  },
  {
    id: 6,
    name: "Кола 0.5л",
    description: "Газированный напиток",
    price: 11000,
    image: "/placeholder.svg",
    category: "Напитки"
  },
  {
    id: 7,
    name: "Картофель фри",
    description: "Хрустящий картофель",
    price: 15000,
    image: "/placeholder.svg",
    category: "Снеки",
    isFeatured: true
  },
  {
    id: 8,
    name: "Мороженое",
    description: "Ванильное мороженое с шоколадом",
    price: 18000,
    image: "/placeholder.svg",
    category: "Десерты"
  }
];

export const cartItems: Product[] = [products[0], products[6]];
