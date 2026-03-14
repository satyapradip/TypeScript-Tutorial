type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
}

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}
// In this example, we define a type alias ChaiOrder that describes the shape of an object representing a chai order. The makeChai and serveChai functions both take a parameter of type ChaiOrder, which means they expect an object with the properties type (a string), sugar (a number), and strong (a boolean). This allows us to ensure that any object passed to these functions adheres to the expected structure, providing type safety and better code readability.

interface Tearecipe {
  teaType: string;
  milk: boolean;
  sugar: number;
}

class MaslaChai implements Tearecipe {
  teaType = "Masala Chai";
  milk = true;
  sugar = 2;
}

interface cupSize {
  size: "small" | "medium" | "large";
}

class Chai implements cupSize {
  size: "small" | "medium" | "large" = "medium";
}
// In this example, we define an interface Tearecipe that describes the structure of a tea recipe object. The MaslaChai class implements the Tearecipe interface, which means it must have the properties defined in the interface (teaType, milk, and sugar). We also define another interface cupSize that specifies a size property with specific string literal types. The Chai class implements the cupSize interface, ensuring that it has a size property that can only be "small", "medium", or "large". This demonstrates how interfaces can be used to enforce a certain structure on classes in TypeScript.

// type response = {ok: true} | {ok: false};

// class ApiResponse implements response {
//   ok: true | false;
//   constructor(ok: true | false) {
//     this.ok = ok;
//   } 
// }
// In this example, we define a type alias response that can be either an object with ok set to true or an object with ok set to false. The ApiResponse class implements the response type, which means it must have an ok property that can be either true or false. The constructor of the ApiResponse class allows us to create instances of ApiResponse with a specific value for the ok property. This demonstrates how we can use union types in combination with classes to create flexible and type-safe structures in TypeScript.

type Teatype = "Masala" | "Adrak" | "Elaichi"; // literal type union

function orderTea(t: Teatype) {
  console.log("You ordered a " + t + " chai.");
}

type BaseChai = {teaLeaves: string; milk: boolean; sugar: number};
type MasalaChai = BaseChai & {spices: string[]};
type AdrakChai = BaseChai & {gingerStrength: number};
const cup: MasalaChai = {
  teaLeaves: "Assam",
  milk: true,
  sugar: 2,
  spices: ["cardamom", "cinnamon", "ginger"]
};
// In this example, we define a type alias Teatype that can only be one of three string literals: "Masala", "Adrak", or "Elaichi". The orderTea function takes a parameter of type Teatype and logs a message indicating the type of chai ordered. We also define a base type BaseChai that includes common properties for all chai types. Then we create two specific types, MasalaChai and AdrakChai, that extend BaseChai with additional properties specific to each type of chai. Finally, we create an instance of MasalaChai with the required properties. This demonstrates how we can use union types and intersection types to create complex and flexible type structures in TypeScript.

type User = {
  username: string;
  bio: string;
}

const user1: User = {
  username: "chaiLover",
  bio: "I love chai and TypeScript!"
};
// In this example, we define a type alias User that describes the structure of a user object with two properties: username (a string) and bio (a string). We then create a constant user1 of type User and assign it an object that adheres to the structure defined by the User type. This allows us to ensure that user1 has the expected properties and types, providing type safety in our code.

type confifig = {
  readonly appName: string;
  version: number;
}
const config: confifig = {
  appName: "ChaiApp",
  version: 1.0
};
// In this example, we define a type alias confifig that describes the structure of a configuration object with two properties: appName (a string) and version (a number). The appName property is marked as readonly, which means it cannot be modified after it has been initialized. We then create a constant config of type confifig and assign it an object that adheres to the structure defined by the confifig type. This allows us to ensure that config has the expected properties and types, and also enforces immutability for the appName property.