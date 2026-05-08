# TypeScript: Beginner to Advanced 🚀

A comprehensive guide to learning TypeScript from the ground up to advanced patterns used in production codebases.

---

## 📋 Table of Contents

- [What is TypeScript?](#what-is-typescript)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [🟢 Beginner](#-beginner)
  - [Basic Types](#basic-types)
  - [Type Inference](#type-inference)
  - [Functions](#functions)
  - [Arrays & Tuples](#arrays--tuples)
  - [Enums](#enums)
  - [Objects & Interfaces](#objects--interfaces)
- [🟡 Intermediate](#-intermediate)
  - [Type Aliases](#type-aliases)
  - [Union & Intersection Types](#union--intersection-types)
  - [Generics](#generics)
  - [Classes](#classes)
  - [Type Assertions](#type-assertions)
  - [Utility Types](#utility-types)
- [🔴 Advanced](#-advanced)
  - [Conditional Types](#conditional-types)
  - [Mapped Types](#mapped-types)
  - [Template Literal Types](#template-literal-types)
  - [Decorators](#decorators)
  - [Declaration Files](#declaration-files)
  - [Module Augmentation](#module-augmentation)
  - [Advanced Generics & Infer](#advanced-generics--infer)
- [tsconfig.json Reference](#tsconfigjson-reference)
- [Common Pitfalls](#common-pitfalls)
- [Resources](#resources)

---

## What is TypeScript?

TypeScript is a **statically typed superset of JavaScript** developed by Microsoft. It compiles down to plain JavaScript and runs anywhere JavaScript runs — browsers, Node.js, Deno, and more.

**Why use TypeScript?**
- Catch bugs at compile time, not runtime
- Better IDE autocompletion and refactoring support
- Self-documenting code through types
- Scales well in large codebases and teams

---

## Prerequisites

- Basic knowledge of JavaScript (variables, functions, objects, arrays)
- Node.js (v16 or later) installed
- A code editor (VS Code recommended — has built-in TypeScript support)

---

## Installation & Setup

```bash
# Install TypeScript globally
npm install -g typescript

# Check version
tsc --version

# Initialize a new project
mkdir my-ts-project && cd my-ts-project
npm init -y
npm install --save-dev typescript

# Create tsconfig.json
npx tsc --init

# Compile a TypeScript file
tsc index.ts

# Watch mode (recompile on save)
tsc --watch
```

For a modern dev setup with ts-node (run TS without compiling):
```bash
npm install --save-dev ts-node
npx ts-node index.ts
```

---

## 🟢 Beginner

### Basic Types

TypeScript adds type annotations using the `: type` syntax.

```typescript
// Primitive types
let name: string = "Strivion";
let age: number = 21;
let isActive: boolean = true;

// null and undefined
let nothing: null = null;
let missing: undefined = undefined;

// any (avoid when possible!)
let dynamic: any = "could be anything";

// unknown (safer alternative to any)
let userInput: unknown = "hello";

// never (function that never returns)
function throwError(message: string): never {
  throw new Error(message);
}

// void (function that returns nothing)
function logMessage(msg: string): void {
  console.log(msg);
}
```

---

### Type Inference

TypeScript can infer types automatically — you don't always need annotations.

```typescript
let city = "Kolkata";     // inferred as string
let count = 42;            // inferred as number
let isDone = false;        // inferred as boolean

// TypeScript warns if you reassign with wrong type
city = 100; // ❌ Error: Type 'number' is not assignable to type 'string'
```

---

### Functions

```typescript
// Parameter and return type annotations
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameters (use ?)
function greet(name: string, greeting?: string): string {
  return `${greeting ?? "Hello"}, ${name}!`;
}

// Default parameters
function createUser(name: string, role: string = "user") {
  return { name, role };
}

// Arrow functions
const multiply = (x: number, y: number): number => x * y;

// Rest parameters
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}
```

---

### Arrays & Tuples

```typescript
// Arrays (two syntax styles)
let fruits: string[] = ["mango", "banana", "guava"];
let scores: Array<number> = [95, 87, 100];

// Readonly arrays
const ids: readonly number[] = [1, 2, 3];

// Tuples — fixed-length, fixed-type arrays
let person: [string, number] = ["Alice", 25];
let rgb: [number, number, number] = [255, 128, 0];

// Named tuples (TypeScript 4.0+)
let coordinate: [x: number, y: number] = [10, 20];
```

---

### Enums

```typescript
// Numeric enum (default, auto-increments from 0)
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right,   // 3
}

let move: Direction = Direction.Up;

// String enum (preferred — more readable in logs)
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

let userStatus: Status = Status.Active;

// Const enum (inlined at compile time for performance)
const enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
```

---

### Objects & Interfaces

```typescript
// Inline object type
let user: { name: string; age: number } = { name: "Raj", age: 22 };

// Interface — reusable, extendable structure
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;        // optional
  readonly role: string; // cannot be changed after creation
}

const newUser: User = {
  id: 1,
  name: "Priya",
  email: "priya@example.com",
  role: "admin",
};

// Extending interfaces
interface Admin extends User {
  permissions: string[];
}
```

---

## 🟡 Intermediate

### Type Aliases

```typescript
// type alias for primitives
type ID = string | number;

// type alias for objects
type Point = {
  x: number;
  y: number;
};

// type alias for functions
type Callback = (error: Error | null, result?: string) => void;

// Difference: type vs interface
// - interface: extendable with `extends`, can be merged (declaration merging)
// - type: can represent unions, primitives, tuples — more flexible
```

---

### Union & Intersection Types

```typescript
// Union: value can be one of multiple types
type StringOrNumber = string | number;

function format(value: StringOrNumber): string {
  return typeof value === "string" ? value.toUpperCase() : value.toFixed(2);
}

// Discriminated unions (great for state management)
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":    return Math.PI * shape.radius ** 2;
    case "rectangle": return shape.width * shape.height;
  }
}

// Intersection: combines multiple types
type WithTimestamp = { createdAt: Date; updatedAt: Date };
type Product = { name: string; price: number } & WithTimestamp;
```

---

### Generics

Generics allow you to write reusable, type-safe code.

```typescript
// Generic function
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello"); // T = string
identity<number>(42);      // T = number

// Generic with constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Generic interface
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type UserResponse = ApiResponse<User>;

// Generic class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
  peek(): T | undefined { return this.items[this.items.length - 1]; }
  isEmpty(): boolean { return this.items.length === 0; }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
```

---

### Classes

```typescript
class Animal {
  // Access modifiers: public (default), private, protected
  public name: string;
  private age: number;
  protected species: string;

  // Shorthand constructor parameters
  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  // Getter / Setter
  get info(): string {
    return `${this.name} (${this.species})`;
  }

  speak(): string {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Canis lupus familiaris");
  }

  speak(): string {
    return `${this.name} barks!`;  // Method override
  }
}

// Abstract class
abstract class Shape {
  abstract area(): number;

  describe(): string {
    return `This shape has an area of ${this.area()}`;
  }
}

// Implementing interfaces
interface Serializable {
  serialize(): string;
}

class Circle extends Shape implements Serializable {
  constructor(public radius: number) { super(); }

  area(): number { return Math.PI * this.radius ** 2; }
  serialize(): string { return JSON.stringify({ radius: this.radius }); }
}
```

---

### Type Assertions

```typescript
// as syntax (preferred)
const input = document.getElementById("username") as HTMLInputElement;
input.value = "hello";

// Angle bracket syntax (not usable in JSX)
const len = (<string>"hello world").length;

// Non-null assertion operator (!)
const element = document.querySelector(".btn")!; // tells TS it's not null
```

---

### Utility Types

TypeScript ships with built-in generic utility types.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Partial — all properties optional
type PartialUser = Partial<User>;

// Required — all properties required
type RequiredUser = Required<PartialUser>;

// Readonly — prevents mutation
type ReadonlyUser = Readonly<User>;

// Pick — select specific properties
type PublicUser = Pick<User, "id" | "name" | "email">;

// Omit — exclude specific properties
type SafeUser = Omit<User, "password">;

// Record — create a mapped object type
type UserRoles = Record<string, "admin" | "user" | "guest">;

// Exclude / Extract (for union types)
type Primitive = string | number | boolean | null;
type NonNull = Exclude<Primitive, null>;   // string | number | boolean
type OnlyStrNum = Extract<Primitive, string | number>; // string | number

// ReturnType — extract return type of a function
function fetchUser() { return { id: 1, name: "Alice" }; }
type FetchResult = ReturnType<typeof fetchUser>; // { id: number; name: string }

// Parameters — extract parameter types
type AddParams = Parameters<typeof add>; // [a: number, b: number]
```

---

## 🔴 Advanced

### Conditional Types

```typescript
// T extends U ? TrueType : FalseType
type IsString<T> = T extends string ? true : false;

type A = IsString<string>;  // true
type B = IsString<number>;  // false

// Practical: unwrap a Promise type
type Awaited<T> = T extends Promise<infer U> ? U : T;

type Result = Awaited<Promise<string>>; // string

// Distributive conditional types
type ToArray<T> = T extends any ? T[] : never;
type StringOrNumberArray = ToArray<string | number>; // string[] | number[]
```

---

### Mapped Types

Transform every property in a type programmatically.

```typescript
// Make all properties mutable (remove readonly)
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

// Make all properties nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Deep readonly (recursive)
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

// Rename keys with remapping (TypeScript 4.1+)
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<{ name: string; age: number }>;
// { getName: () => string; getAge: () => number }
```

---

### Template Literal Types

```typescript
type EventName = "click" | "focus" | "blur";
type Handler = `on${Capitalize<EventName>}`; // "onClick" | "onFocus" | "onBlur"

type Route = "/users" | "/posts" | "/comments";
type ApiRoute = `api${Route}`; // "api/users" | "api/posts" | "api/comments"

// Combining template literals with mapped types
type EventHandlers<T extends string> = {
  [K in T as `on${Capitalize<K>}`]?: () => void;
};

type ButtonEvents = EventHandlers<"click" | "hover" | "focus">;
// { onClick?: () => void; onHover?: () => void; onFocus?: () => void }
```

---

### Decorators

Decorators are a stage-3 proposal (enable with `"experimentalDecorators": true` in tsconfig).

```typescript
// Class decorator
function Singleton<T extends { new (...args: any[]): {} }>(constructor: T) {
  let instance: T;
  return class extends constructor {
    constructor(...args: any[]) {
      if (instance) return instance;
      super(...args);
      instance = this as unknown as T;
    }
  };
}

@Singleton
class Database {
  connect() { console.log("Connected"); }
}

// Method decorator
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with`, args);
    return original.apply(this, args);
  };
  return descriptor;
}

class UserService {
  @Log
  getUser(id: number) { return { id, name: "Alice" }; }
}
```

---

### Declaration Files

`.d.ts` files describe the shape of JavaScript modules for TypeScript.

```typescript
// mylib.d.ts
declare module "mylib" {
  export function greet(name: string): string;
  export const version: string;

  export interface Options {
    timeout?: number;
    retries?: number;
  }
}

// Global augmentation
declare global {
  interface Window {
    analytics: {
      track(event: string, data?: object): void;
    };
  }
}
```

---

### Module Augmentation

Extend existing types from libraries you don't own.

```typescript
// Extend Express's Request type
import "express";

declare module "express" {
  interface Request {
    user?: {
      id: string;
      role: "admin" | "user";
    };
  }
}

// Now in your route handlers:
app.get("/profile", (req, res) => {
  console.log(req.user?.id); // ✅ TypeScript knows about this
});
```

---

### Advanced Generics & Infer

```typescript
// infer: extract a type from within a conditional type
type UnpackPromise<T> = T extends Promise<infer U> ? U : T;
type UnpackArray<T> = T extends (infer U)[] ? U : T;
type FirstArg<T> = T extends (first: infer F, ...rest: any[]) => any ? F : never;

// Builder pattern with generics
class QueryBuilder<T extends object> {
  private filters: Partial<T> = {};

  where<K extends keyof T>(key: K, value: T[K]): this {
    this.filters[key] = value;
    return this;
  }

  build(): Partial<T> {
    return this.filters;
  }
}

// Fluent typing with variadic tuple types (TS 4.0+)
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
type Result = Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]
```

---

## tsconfig.json Reference

```json
{
  "compilerOptions": {
    "target": "ES2020",           // Output JS version
    "module": "commonjs",         // Module system
    "lib": ["ES2020", "DOM"],     // Type libraries included
    "outDir": "./dist",           // Output directory
    "rootDir": "./src",           // Source directory
    "strict": true,               // Enable all strict checks ✅ recommended
    "noImplicitAny": true,        // Error on implicit any
    "strictNullChecks": true,     // null/undefined are not assignable by default
    "esModuleInterop": true,      // Better CJS/ESM interop
    "skipLibCheck": true,         // Skip type checking of .d.ts files
    "forceConsistentCasingInFileNames": true,
    "declaration": true,          // Generate .d.ts files
    "sourceMap": true,            // Generate source maps for debugging
    "paths": {                    // Path aliases
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

## Common Pitfalls

| Pitfall | Problem | Solution |
|--------|---------|----------|
| Overusing `any` | Defeats the purpose of TypeScript | Use `unknown` + type guards |
| Type assertions abuse | `as` can hide real bugs | Prefer type narrowing |
| Not using `strict` mode | Misses many useful checks | Always enable `"strict": true` |
| Ignoring `undefined` in `strictNullChecks` | Runtime crashes | Use optional chaining (`?.`) and nullish coalescing (`??`) |
| Interface vs Type confusion | Inconsistent code | Prefer `interface` for objects, `type` for unions/aliases |
| Not typing third-party libs | Missing types | Install `@types/<package>` from DefinitelyTyped |

---

## Resources

- 📖 [Official TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- 🎯 [TypeScript Playground](https://www.typescriptlang.org/play) — try TS in the browser
- 🏋️ [Type Challenges](https://github.com/type-challenges/type-challenges) — practice advanced types
- 📦 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) — community type definitions
- 🔍 [ts-reset](https://github.com/total-typescript/ts-reset) — sensible TypeScript defaults
- 🎓 [Total TypeScript](https://www.totaltypescript.com/) — in-depth paid & free courses by Matt Pocock

---

## License

MIT — free to use, share, and adapt.
