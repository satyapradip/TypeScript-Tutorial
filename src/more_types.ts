// Type assertion in TypeScript allows you to tell the compiler about the type of a variable when you have more information about it than the compiler does. It is a way to override the inferred type and specify a different type for a variable.

// In the example above, we have a variable `response` of type `any`, which means it can hold any value. We know that `response` is actually a string, so we use a type assertion to tell the compiler that `response` should be treated as a string. This allows us to access string properties and methods, such as `length`, without TypeScript throwing an error..
let response: any = "44";

let numericLength: number = (response as string).length;
console.log("Length of the response string is:", numericLength);
// Forseful type assertion can be useful when you are working with data from external sources (like APIs) where the type is not known at compile time, but you have a good understanding of what the type should be. However, it should be used with caution, as incorrect assertions can lead to runtime errors if the actual type does not match the asserted type. Always ensure that you have a clear understanding of the data you are working with when using type assertions.

type Book = {
  title: string;  
}

let bookstring = `{"title": "The Great Gatsby"}`;
let book: Book = JSON.parse(bookstring) as Book;
console.log("Book title is:", book.title);
// In this example, we have a JSON string representing a book. We parse the JSON string into an object and then use a type assertion to tell TypeScript that the resulting object should be treated as a `Book` type. This allows us to access the `title` property without any type errors. Again, it's important to ensure that the structure of the JSON matches the expected type to avoid runtime errors.

const inputElement = document.getElementById("myInput") as HTMLInputElement;
inputElement.value = "Hello, TypeScript!";
// In this example, we are selecting an HTML input element by its ID and using a type assertion to tell TypeScript that the element is an `HTMLInputElement`. This allows us to access the `value` property of the input element without any type errors. Type assertions are particularly useful in DOM manipulation when you know the specific type of an element but TypeScript cannot infer it on its own.

let value: any
value = "chai";
value = 42;
value = 2.5;


let NewValue: undefined;

value = "chai";
value = 42;
value = 2.5;

if (typeof value === "string") { 
  value = value.toUpperCase();
  console.log("Value is a string: " + value);
}
// In this example, we have a variable `value` of type `any`, which can hold any type of value. We assign different types of values to it (a string, a number, and a floating-point number). Then we use a type guard (typeof value === "string") to check if `value` is a string before calling the `toUpperCase()` method on it. This is an example of type narrowing, where we refine our understanding of the variable's type based on a condition.

try {
  
} catch (error) {
  if (error instanceof Error) {
    console.error("An error occurred:", error.message);
  } else {
    console.error("An unknown error occurred.", error);
  }
}
// In this example, we have a try-catch block where we catch any errors that may occur. Inside the catch block, we use a type guard (error instanceof Error) to check if the caught error is an instance of the built-in Error class. If it is, we can safely access the `message` property of the error object. If it's not an instance of Error, we handle it as an unknown error. This is another example of type narrowing, allowing us to write safer and more precise error handling code in TypeScript.

const data: unknown = "This is some data";

const strData: string = data as string;
console.log("Data as string:", strData);
// In this example, we have a variable `data` of type `unknown`, which means we don't know its type at compile time. We use a type assertion to tell TypeScript that `data` should be treated as a string. This allows us to assign it to a variable of type `string` and use it as such. However, since `data` is of type `unknown`, we should be cautious when using it, as it may not actually be a string at runtime, which could lead to errors if we try to use string methods on it without proper checks.

type Role = "admin" | "editor" | "viewer";

function assignRole(role: Role) {
  if (role === "admin") {
    console.log("Assigned admin role with full permissions.");
    return;
  }
  if (role === "editor") {
    console.log("Assigned editor role with edit permissions.");
    return;
  }
  role;
}
// In this example, we have a type `Role` that can only be one of three string literals: "admin", "editor", or "viewer". The `assignRole` function takes a parameter of type `Role` and uses conditional statements to check the value of `role`. Based on the value, it logs a message indicating the assigned role and its permissions. This is an example of using union types to restrict the possible values of a variable and ensure type safety in our code.

function neverReturns(): never {
  while (true) {
    // This function will run indefinitely and never return a value.
  }
}
// In this example, we have a function `neverReturns` that has a return type of `never`. This indicates that the function will never return a value, either because it runs indefinitely (like in this case) or because it always throws an error. The `never` type is useful for functions that are meant to never complete normally, and it helps TypeScript understand the control flow of the program.