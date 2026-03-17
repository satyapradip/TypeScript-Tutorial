// Object-Oriented Programming in TypeScript

// 1) Class definition with properties and methods
class Tea {
  name: string;
  price: number;
  isHot: boolean;
  constructor(name: string, price: number, isHot: boolean) {
    this.name = name;
    this.price = price;
    this.isHot = isHot;
  }
  describe(): string {
    return `${this.name} costs $${this.price} and is ${this.isHot ? "hot" : "cold"}.`;
  }
}

const masalaChai = new Tea("Masala chai", 10, true);
console.log(masalaChai.describe());
// In this example, we define a class called Tea with properties name, price, and isHot. The constructor initializes these properties when a new instance of the class is created. The describe method returns a string describing the tea. We create an instance of the Tea class called masalaChai and call the describe method to print the description to the console.

// 2) Inheritance: creating a subclass that extends the base class
class IcedTea extends Tea {
  flavor: string;
  constructor(name: string, price: number, flavor: string) {
    super(name, price, false); // Call the parent class constructor
    this.flavor = flavor;
  }
}
const lemonIcedTea = new IcedTea("Lemon iced tea", 8, "lemon");
console.log(lemonIcedTea.describe(), `Flavor: ${lemonIcedTea.flavor}`);
// In this example, we define a subclass called IcedTea that extends the Tea class. The IcedTea class has an additional property called flavor. The constructor of IcedTea calls the constructor of the parent class (Tea) using super() to initialize the inherited properties. We create an instance of the IcedTea class called lemonIcedTea and call the describe method from the parent class, as well as access the flavor property.


// 3) Encapsulation: using private properties and public methods
class Coffee {
  public Owner: string = "Satya";
  private type: string;
  private price: number;
  protected shopName: string = "Chai or TypeScript";
  constructor(type: string, price: number) {
    this.type = type;
    this.price = price;
  }
}

const espresso = new Coffee("Espresso", 3);
console.log(espresso.Owner); // Output: Satya
// console.log(espresso.type); // Error: type is private
// console.log(espresso.price); // Error: price is private
// console.log(espresso.shopName); // Error: shopName is protected
// In this example, we define a class called Coffee with private properties type and price. These properties cannot be accessed directly from outside the class. If we try to access them, we will get an error. This demonstrates encapsulation, which is the concept of hiding the internal state of an object and only exposing a public interface for interacting with it.

// 4) Polymorphism: using a common interface for different classes
interface Beverage {
  describe(): string;
}
class Smoothie implements Beverage {
  flavor: string;
  constructor(flavor: string) {
    this.flavor = flavor;
  } 
  describe(): string {
    return `This is a ${this.flavor} smoothie.`;
  }
}
const strawberrySmoothie = new Smoothie("strawberry");
console.log(strawberrySmoothie.describe());
// In this example, we define an interface called Beverage with a method describe. The Smoothie class implements the Beverage interface and provides its own implementation of the describe method. This allows us to use a common interface for different classes, demonstrating polymorphism. We create an instance of the Smoothie class and call the describe method to print the description to the console.


// 5) Abstraction: defining abstract classes and methods
abstract class Dessert {
  abstract getCalories(): number;
}
class Cake extends Dessert {
  flavor: string
  constructor(flavor: string) {
    super();
    this.flavor = flavor;
  }
  getCalories(): number {
    return 300; // Just a placeholder value
  }
}
const chocolateCake = new Cake("Chocolate");
console.log(`The ${chocolateCake.flavor} cake has ${chocolateCake.getCalories()} calories.`);
// In this example, we define an abstract class called Dessert with an abstract method getCalories. The Cake class extends the Dessert class and provides an implementation for the getCalories method. This demonstrates abstraction, which is the concept of defining a common interface for a group of related classes while hiding the implementation details. We create an instance of the Cake class and call the getCalories method to print the calorie information to the console.

//----------------------------------------------------------------------------
// getter and setter example
class MilkTea {
  private _sugarLevel: number;
  constructor(sugarLevel: number) {
    this._sugarLevel = sugarLevel;
  }
  get sugarLevel(): number {
    return this._sugarLevel;
  }
  set sugarLevel(level: number) {
    if (level < 0 || level > 100) {
      throw new Error("Sugar level must be between 0 and 100.");
    }
    this._sugarLevel = level;
  }
}
const myMilkTea = new MilkTea(50);
console.log(myMilkTea.sugarLevel);
myMilkTea.sugarLevel = 30;
console.log(myMilkTea.sugarLevel);
// In this example, we define a class called MilkTea with a private property _sugarLevel. We use a getter to allow read access to the sugar level and a setter to allow controlled write access. The setter includes validation to ensure that the sugar level is between 0 and 100. We create an instance of the MilkTea class, read the initial sugar level, update it using the setter, and read it again to confirm the change.

// static properties and methods example
class TeaShop {
  static shopName: string = "Chai or TypeScript";
  static getShopInfo(): string {
    return `Welcome to ${TeaShop.shopName}! We serve the best tea in town.`;
  }
}
console.log(TeaShop.getShopInfo());
// In this example, we define a class called TeaShop with a static property shopName and a static method getShopInfo. Static members belong to the class itself rather than to instances of the class. We can access the static method directly on the class without creating an instance. The console.log statement calls the getShopInfo method to print the shop information to the console.
