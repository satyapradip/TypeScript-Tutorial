// Interface and Generics in TypeScript
// This file is organized as short, runnable examples for tutorial-style learning.

// -----------------------------------------------------------------------------
// 1) Basic interface + optional property
// Interfaces describe the shape of an object.
interface TeaItem {
  name: string;
  price: number;
  milk?: boolean;
}

const gingerTea: TeaItem = {
  name: "Ginger tea",
  price: 12,
  milk: false,
};

const greenTea: TeaItem = {
  name: "Green tea",
  price: 12,
};

console.log("1)", gingerTea);
console.log("1)", greenTea);

// -----------------------------------------------------------------------------
// 2) readonly property
interface User {
  id: number;
  name: string;
  readonly createdAt: Date;
}

const userOne: User = {
  id: 1,
  name: "Satya",
  createdAt: new Date(),
};

console.log("2)", userOne);

// -----------------------------------------------------------------------------
// 3) Interface used as a function parameter type
interface Order {
  type: string;
  cups: number;
  size: "small" | "medium" | "large";
}

function createChai(order: Order): string {
  return `You ordered ${order.cups} cups of ${order.size} ${order.type} chai.`;
}

const orderOne: Order = {
  type: "Masala",
  cups: 2,
  size: "medium",
};

console.log("3)", createChai(orderOne));

// -----------------------------------------------------------------------------
// 4) Interface with method signature
interface DiscountCalculator {
  calculate(price: number, discount: number): number;
}

const apply50: DiscountCalculator = {
  calculate: (price, discount) => price * (1 - discount / 100),
};

console.log("4)", apply50.calculate(100, 50));

// -----------------------------------------------------------------------------
// 5) Interface extension
interface A {
  a: string;
}

interface B {
  b: number;
}

interface C extends A, B {
  c: boolean;
}

const objC: C = { a: "Hello", b: 42, c: true };
console.log("5)", objC);

// -----------------------------------------------------------------------------
// 6) Index signature
interface StringMap {
  [key: string]: string;
}

const translations: StringMap = {
  hello: "Hola",
  goodbye: "Adios",
};

console.log("6)", translations);

// -----------------------------------------------------------------------------
// 7) Callable interface
interface Greeter {
  (name: string): string;
}

const greet: Greeter = (name) => `Hello, ${name}!`;
console.log("7)", greet("Satya"));

// -----------------------------------------------------------------------------
// 8) Interface implemented by a class
interface Beverage {
  name: string;
  price: number;
  describe(): string;
}

class TeaDrink implements Beverage {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  describe(): string {
    return `${this.name} costs $${this.price}.`;
  }
}

const cardamom = new TeaDrink("Cardamom tea", 15);
console.log("8)", cardamom.describe());

// -----------------------------------------------------------------------------
// 9) Generic interface
interface Box<T> {
  value: T;
}

const teaNameBox: Box<string> = { value: "Masala" };
const teaPriceBox: Box<number> = { value: 19.99 };

console.log("9)", teaNameBox, teaPriceBox);

// -----------------------------------------------------------------------------
// 10) Generic API-style response interface
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

const teaResponse: ApiResponse<TeaItem[]> = {
  data: [gingerTea, greenTea],
  success: true,
  message: "Tea menu loaded",
};

console.log("10)", teaResponse);

