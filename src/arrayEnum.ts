const chaiFlavours: string[] = ["Masala", "Ginger", "Cardamom", "Saffron"];
console.log(chaiFlavours);
// In this example, we declare an array called chaiFlavours that can only contain strings. We initialize it with a list of chai flavors. The console.log statement prints the array to the console.
const chaiPrices: number[] = [2.99, 3.49, 3.99];
console.log(chaiPrices);
// In this example, we declare an array called chaiPrices that can only contain numbers. We initialize it with a list of prices for different chai flavors. The console.log statement prints the array to the console.
const isHot: boolean[] = [true, false, true];
console.log(isHot);
// In this example, we declare an array called isHot that can only contain boolean values. We initialize it with a list of boolean values indicating whether each chai flavor is served hot or not. The console.log statement prints the array to the console.

const rating: Array<number> = [4.5, 4.0, 5.0];
console.log(rating);
// In this example, we declare an array called rating using the generic Array type. It can only contain numbers. We initialize it with a list of ratings for different chai flavors. The console.log statement prints the array to the console.
//----------------------------------------------------------------------------
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};
// In this example, we define a type alias called Chai that describes the shape of a chai object. It has three properties: name (a string), price (a number), and isHot (a boolean). This type can be used to create objects that represent different chai flavors with their respective properties.
//----------------------------------------------------------------------------
const chaiMenu: Chai[] = [
  { name: "Masala", price: 2.99, isHot: true },
  { name: "Ginger", price: 3.49, isHot: true },
  { name: "Cardamom", price: 3.99, isHot: true },
];
console.log(chaiMenu);
// In this example, we declare an array called chaiMenu that can only contain objects of type Chai. We initialize it with a list of chai objects, each representing a different flavor with its name, price, and whether it is served hot. The console.log statement prints the array of chai objects to the console.
//----------------------------------------------------------------------------

const cities: readonly string[] = ["Delhi", "Mumbai", "Bangalore"];
console.log(cities);
// In this example, we declare a readonly array called cities that can only contain strings. We initialize it with a list of city names. The readonly modifier means that we cannot modify the array after it has been created (e.g., we cannot add or remove elements). The console.log statement prints the array to the console.

//----------------------------------------------------------------------------
const chaiFlavoursTuple: [string, number, boolean] = ["Masala", 2.99, true];
console.log(chaiFlavoursTuple);
// In this example, we declare a tuple called chaiFlavoursTuple that has a fixed length of three elements. The first element is a string representing the chai flavor, the second element is a number representing the price, and the third element is a boolean indicating whether it is served hot. We initialize the tuple with specific values for each element. The console.log statement prints the tuple to the console.
// -----named tuple----
type ChaiInfo = [name: string, price: number, isHot: boolean];
const chaiInfo: ChaiInfo = ["Ginger", 3.49, true];
console.log(chaiInfo);
// In this example, we define a named tuple type called ChaiInfo that describes the structure of a tuple with three elements: name (a string), price (a number), and isHot (a boolean). We then declare a variable chaiInfo of type ChaiInfo and initialize it with specific values for each element. The console.log statement prints the named tuple to the console.
//----------------------------------------------------------------------------
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(table);
// In this example, we declare a two-dimensional array called table that can only contain numbers. It is an array of arrays, where each inner array represents a row of the table. We initialize it with specific values for each row. The console.log statement prints the two-dimensional array to the console.

//---------------------------------enum in typescript-------------------------------
enum ChaiSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
console.log(ChaiSize.SMALL, ChaiSize.MEDIUM, ChaiSize.LARGE);
// In this example, we define an enum called ChaiSize that represents the different sizes of chai. Each member of the enum is assigned a string value corresponding to the size. The console.log statement prints the values of each enum member to the console. Enums provide a way to define a set of named constants, making it easier to work with related values in a more readable and maintainable way.

// Using enum in a function
function orderChai(size: ChaiSize): string {
  return `You ordered a ${size} chai.`;
}
console.log(orderChai(ChaiSize.MEDIUM));
// In this example, we define a function called orderChai that takes a parameter size of type ChaiSize (the enum we defined earlier). The function returns a string confirming the order of the chai with the specified size. The console.log statement calls the function with ChaiSize.MEDIUM as an argument and prints the resulting message to the console. This demonstrates how we can use enums to ensure that only valid values are passed to functions, improving type safety and code readability.

// Enum with numeric values
enum ChaiStrength {
  WEAK = 1,
  MEDIUM ,// By default, the next member will have a value of 2
  STRONG , // By default, the next member will have a value of 3
}
console.log(ChaiStrength.WEAK, ChaiStrength.MEDIUM, ChaiStrength.STRONG);
// In this example, we define an enum called ChaiStrength that represents the strength of chai. Each member of the enum is assigned a numeric value (1 for WEAK, 2 for MEDIUM, and 3 for STRONG). The console.log statement prints the numeric values of each enum member to the console. Enums with numeric values can be useful when you want to represent a set of related constants with specific numeric values, such as levels of strength or priority.

// Enum with mixed values
enum ChaiType {
  MASALA = "Masala",
  GINGER = "Ginger",
  CARDAMOM = "Cardamom",
  STRONG = 1,
  MEDIUM = 2,
  WEAK = 3,
}
console.log(ChaiType.MASALA, ChaiType.STRONG);
// In this example, we define an enum called ChaiType that contains both string and numeric values. The first three members represent different types of chai with string values, while the last three members represent strength levels with numeric values. The console.log statement demonstrates how we can access both types of enum members. Mixed enums can be useful when you want to group related constants that may have different types of values, but it's important to use them carefully to avoid confusion.

// Enum with computed values
enum ChaiFlavor {
  MASALA = "Masala",
  GINGER = "Ginger",
  CARDAMOM = "Cardamom",
  SPICY = "Spicy " + "Chai", // Computed value
}
console.log(ChaiFlavor.SPICY);
// In this example, we define an enum called ChaiFlavor that includes a computed value for the SPICY member. The value of SPICY is derived from concatenating the string "Spicy " with "Chai". The console.log statement prints the computed value of ChaiFlavor.SPICY to the console. Enums with computed values can be useful when you want to generate enum member values based on some logic or other constants, but it's important to ensure that the computed values are unique and meaningful within the context of the enum.

// Enum with constant members
enum ChaiStatus {
  AVAILABLE = "Available",
  OUT_OF_STOCK = "Out of Stock",
  DISCONTINUED = "Discontinued",
}
console.log(ChaiStatus.AVAILABLE, ChaiStatus.OUT_OF_STOCK, ChaiStatus.DISCONTINUED);
// In this example, we define an enum called ChaiStatus that represents the availability status of chai. Each member of the enum is assigned a constant string value. The console.log statement prints the values of each enum member to the console. Enums with constant members are useful for representing fixed sets of related constants, such as status codes or categories, and can help improve code readability and maintainability.

// Enum with methods (using a namespace to add functionality)
enum ChaiSizeWithMethod {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}
namespace ChaiSizeWithMethod {
  export function getPrice(size: ChaiSizeWithMethod): number {
    switch (size) {
      case ChaiSizeWithMethod.SMALL:
        return 2.99;
      case ChaiSizeWithMethod.MEDIUM:
        return 3.49;
      case ChaiSizeWithMethod.LARGE:
        return 3.99;
    }
  }
}
console.log(ChaiSizeWithMethod.getPrice(ChaiSizeWithMethod.MEDIUM));
// In this example, we define an enum called ChaiSizeWithMethod that represents the sizes of chai. We then use a namespace to add a method called getPrice that takes a size as an argument and returns the corresponding price for that size. The console.log statement demonstrates how to call the getPrice method with a specific enum member (ChaiSizeWithMethod.MEDIUM) and prints the resulting price to the console. This approach allows us to associate related functionality with the enum, making it more cohesive and easier to maintain.

// Enum with string values and a method to get a description
enum ChaiFlavorWithDescription {
  MASALA = "Masala",
  GINGER = "Ginger",
  CARDAMOM = "Cardamom",
}
namespace ChaiFlavorWithDescription {
  export function getDescription(flavor: ChaiFlavorWithDescription): string { 
    switch (flavor) {
      case ChaiFlavorWithDescription.MASALA:
        return "A spicy blend of tea and spices.";
      case ChaiFlavorWithDescription.GINGER:
        return "A zesty tea with ginger flavor.";
      case ChaiFlavorWithDescription.CARDAMOM:
        return "A fragrant tea with cardamom flavor.";
    } 
  }
}
console.log(ChaiFlavorWithDescription.getDescription(ChaiFlavorWithDescription.GINGER));
// In this example, we define an enum called ChaiFlavorWithDescription that represents different chai flavors. We then use a namespace to add a method called getDescription that takes a flavor as an argument and returns a description for that flavor. The console.log statement demonstrates how to call the getDescription method with a specific enum member (ChaiFlavorWithDescription.GINGER) and prints the resulting description to the console. This approach allows us to provide additional information about each enum member, enhancing the usability of the enum in our code.