function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("Hello"); // string[]
wrapInArray(42); // number[]
wrapInArray({ name: "Satya", age: 30 }); // { name: string; age: number }[]
// In this example, we define a generic function wrapInArray that takes a parameter of type T and returns an array of type T. The type T is a placeholder that can represent any type. When we call the function with different types of arguments (a string, a number, and an object), TypeScript infers the appropriate type for T based on the argument provided. This allows us to create flexible and reusable functions that can work with various data types while maintaining type safety.

function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}
pair("Satya", 30); // [string, number]
pair(true, { name: "Chai" }); // [boolean, { name: string }]
// In this example, we define a generic function pair that takes two parameters of types A and B and returns a tuple containing both values. The type parameters A and B allow us to specify the types of the first and second elements of the tuple when we call the function. When we call pair with different types of arguments, TypeScript infers the appropriate types for A and B based on the arguments provided. This demonstrates how generics can be used to create functions that can work with multiple types while ensuring type safety.

interface Box<T> {
  content: T;
}

const stringBox: Box<string> = { content: "Hello" };
const numberBox: Box<number> = { content: 42 };
// In this example, we define a generic interface Box that has a type parameter T. The content property of the Box interface is of type T, which means it can hold any type of value. When we create instances of Box, we specify the type for T (string and number in this case), and TypeScript ensures that the content property is of the correct type based on our specification. This allows us to create flexible data structures that can work with various types while maintaining type safety.

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{name: string}> = {
  status: 200,
  data: { name: "Satya" },
};
// In this example, we define a generic interface ApiPromise that has a type parameter T. The data property of the ApiPromise interface is of type T, which allows us to specify the shape of the data when we create an instance of ApiPromise. In this case, we specify that T is an object with a name property of type string. This allows us to create a structured response object that can hold different types of data while ensuring type safety.

