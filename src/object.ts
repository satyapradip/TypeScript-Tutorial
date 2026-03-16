
// TypeScript Objects: beginner to advanced examples

// 1) Basic object with inferred type
const chai = {
  name: "Masala chai",
  price: 10,
  isHot: true,
};

console.log("Basic object:", chai.name, chai.price, chai.isHot);

// 2) Explicit object type annotation
const greenTea: { name: string; price: number; isHot: boolean } = {
  name: "Green tea",
  price: 12,
  isHot: true,
};

// 3) Type alias for reusable object shapes
type Tea = {
  name: string;
  price: number;
  isHot: boolean;
  caffeineLevel?: "low" | "medium" | "high"; // optional property
};

const gingerTea: Tea = {
  name: "Ginger tea",
  price: 15,
  isHot: true,
  caffeineLevel: "low",
};

// 4) Interface (same idea as type for object contracts)
interface User {
  id: number;
  name: string;
  readonly createdAt: Date; // cannot be reassigned
}

const userOne: User = {
  id: 1,
  name: "Satya",
  createdAt: new Date(),
};

// userOne.createdAt = new Date(); // Error: readonly property

// 5) Nested objects
type Order = {
  orderId: string;
  customer: {
    name: string;
    city: string;
  };
  item: Tea;
};

const orderOne: Order = {
  orderId: "ORD-101",
  customer: {
    name: "Rahul",
    city: "Delhi",
  },
  item: gingerTea,
};

// 6) Function using object type
function applyDiscount(tea: Tea, discountPercent: number): Tea {
  return {
    ...tea,
    price: tea.price - (tea.price * discountPercent) / 100,
  };
}

const discountedTea = applyDiscount(gingerTea, 10);
console.log("Discounted tea:", discountedTea);

// 7) Utility types: Partial, Pick, Omit
type TeaUpdateInput = Partial<Tea>; // all properties optional
const updatePriceOnly: TeaUpdateInput = { price: 20 };

type TeaPreview = Pick<Tea, "name" | "price">;
const teaCard: TeaPreview = { name: "Lemon tea", price: 18 };

type TeaWithoutHeat = Omit<Tea, "isHot">;
const packagedTea: TeaWithoutHeat = {
  name: "Iced tea",
  price: 22,
  caffeineLevel: "medium",
};

// 8) Record for dictionary-like objects
type TeaStock = Record<string, number>;
const stock: TeaStock = {
  masala: 20,
  ginger: 15,
  green: 10,
};

// 9) Union object types with safe narrowing
type ApiResponse =
  | { status: "success"; data: Tea[] }
  | { status: "error"; message: string };

const response: ApiResponse =
  Math.random() > 0.5
    ? { status: "success", data: [chai, greenTea, gingerTea] }
    : { status: "error", message: "Server unavailable" };

if (response.status === "success") {
  console.log("Tea count:", response.data.length);
} else {
  console.log("Error:", response.message);
}

// 10) Generic object helper
function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find((item) => item.id === id);
}

const users: User[] = [
  { id: 1, name: "Satya", createdAt: new Date() },
  { id: 2, name: "Aman", createdAt: new Date() },
];

console.log("Find user by id:", getById(users, 2));
console.log("Order example:", orderOne);
console.log("Update input:", updatePriceOnly);
console.log("Tea card:", teaCard);
console.log("Packaged tea:", packagedTea);
console.log("Stock:", stock);
