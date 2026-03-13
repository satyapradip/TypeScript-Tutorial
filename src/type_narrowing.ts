// --------------------------------------------------
// 1. TYPE NARROWING
// --------------------------------------------------
// Type narrowing is the process of refining the type of a variable based on certain conditions or checks. This allows TypeScript to provide better type safety and autocompletion within specific blocks of code.


function getrChai(kind: string | number) {
  if (typeof kind === "string") {
    return "You got a string chai: " + kind;
  }
  return "You got a number chai: " + kind;
}

console.log(getrChai("Masala"));
console.log(getrChai(123));
// In this example, the function getrChai takes a parameter kind that can be either a string or a number. Inside the function, we use a type guard (typeof kind === "string") to check if kind is a string. If it is, we can safely call string methods on it. If it's not a string, we know it must be a number, and we can handle it accordingly. This is how type narrowing works in TypeScript, allowing us to write safer and more precise code.

function serveChai(msg?: string) {
  if (msg) {
    console.log("Serving chai with message: " + msg);
  } else {
    console.log("Serving plain chai");
  }
}

serveChai("Welcome to the chai shop!");
serveChai();
// In this example, the serveChai function takes an optional parameter msg. Inside the function, we check if msg is truthy (i.e., it has a value). If it does, we serve chai with the message. If not, we serve plain chai. This is another example of type narrowing, where we refine our understanding of the variable's type based on a condition.

function orderchai(size: "small" | "medium" | "large" | number) {
  if (typeof size === "number") {
    console.log("You ordered a chai of size: " + size);
  } else {
    console.log("You ordered a " + size + " chai");
  }
}

orderchai("medium");
orderchai(16);
// In this example, the orderchai function takes a parameter size that can be either a specific string literal ("small", "medium", "large") or a number. We use a type guard to check if size is a number, and handle it accordingly. This demonstrates how we can use type narrowing to manage different types in our code effectively.

// --------------------------------------------------
class KulladChai {
  serve() {
    return "Serving chai in a kullad!";
  }
}

class GlassChai {
  serve() {
    return "Serving chai in a glass!";
  }
}

function serveChaiInContainer(chai: KulladChai | GlassChai) {
  if (chai instanceof KulladChai) {
    return chai.serve();
  }
}
// In this example, we have two classes, KulladChai and GlassChai, each with a serve method. The serveChaiInContainer function takes a parameter chai that can be an instance of either class. We use the instanceof operator to check if chai is an instance of KulladChai, and if it is, we call its serve method. This is another example of type narrowing using class instances.

type chaiorder = {
  type: string;
  sugar: number;
}

function processChaiOrder(obj:any):obj is chaiorder {
  return (
    typeof obj == "object" && obj != null && typeof obj.type === "string" && typeof obj.sugar === "number"
  )
}
function serveOrder(item : chaiorder | string){
  if (processChaiOrder(item)) {
    return `Serving a ${item.type} chai with ${item.sugar} spoons of sugar!`;
  }
}
// In this example, we define a type chaiorder that represents an order for chai with specific properties. The processChaiOrder function is a type guard that checks if an object conforms to the chaiorder structure. The serveOrder function takes an item that can be either a chaiorder or a string, and uses the type guard to determine how to handle it. This demonstrates how we can create custom type guards for more complex types in TypeScript.

type masalaChai = {
  type: "masala";
  spiceLevel: number;
}
type adrakChai = {
  type: "adrak";
  gingerStrength: number;
}
type chai = masalaChai | adrakChai;
function serveSpecificChai(order: chai) {
  if (order.type === "masala") {
    return `Serving a masala chai with spice level ${order.spiceLevel}!`;
  } else {
    return `Serving an adrak chai with ginger strength ${order.gingerStrength}!`;
  }
}
// In this example, we define two specific types of chai orders: masalaChai and adrakChai. The serveSpecificChai function takes an order that can be either type, and uses a discriminated union (checking the type property) to determine which kind of chai to serve. This is a common pattern in TypeScript for handling multiple related types in a clean and type-safe way.

// Type Guard Example:

function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) && arr.every(item => typeof item === "string");
}
// In this example, we define a type guard function isStringArray that checks if a given value is an array of strings. It first checks if the value is an array using Array.isArray, and then uses the every method to ensure that every item in the array is a string. This allows us to safely narrow down the type of arr to string[] when we use this function in our code. unknown is a special type in TypeScript that represents any value, but unlike any, it requires us to perform some type checking before we can use it in a specific way. This makes it safer than any, while still allowing for flexibility when we don't know the exact type of a value.