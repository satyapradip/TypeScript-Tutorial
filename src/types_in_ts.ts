let drink = "water";
// Type Inference : TypeScript can automatically infer the type of a variable based on its initial value. In this case, since `drink` is initialized with a string value, TypeScript infers that `drink` is of type `string`.
let cups = Math.random() > 0.5 ? 10 : 5; 

// type annotation : we can explicitly specify the type of a variable using type annotations. This is useful when TypeScript cannot infer the type correctly or when we want to be more explicit about the intended type.
let juice: string = "orange juice";  // Here we explicitly annotate the type of `juice` as `string`.
juice = "apple juice";  // This is valid because `juice` is of type `string`.

// TypeScript also supports union types, which allow a variable to hold values of multiple types. For example:
let beverage: string | number = "coffee";  // `beverage` can be either a string or a number.
beverage = 42;  // This is also valid because `beverage` can be a number as well.