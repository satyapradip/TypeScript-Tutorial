function makeChai(type: string, cups: number): string {
  return `You ordered ${cups} cups of ${type} chai.`;
}
console.log(makeChai("Masala", 2));
// in this example the function makeChai takes two parameters: type (a string) and cups (a number). It returns a string that describes the order. The console.log statement calls the function with "Masala" as the type of chai and 2 as the number of cups, and it prints the resulting message to the console.
//----------------------------------------------------------------------------
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
console.log(calculateTotal(5.99, 3));
// In this example, the function calculateTotal takes two parameters: price (a number) and quantity (a number). It returns the total cost by multiplying the price by the quantity. The console.log statement calls the function with a price of 5.99 and a quantity of 3, and it prints the total cost to the console.
//----------------------------------------------------------------------------
function makeOrder(Order: string){
  if (!Order){
    return null;
  }
  return `Your order for ${Order} has been placed.`;
}
console.log(makeOrder("Green tea"));
console.log(makeOrder(""));
// In this example, the function makeOrder takes a single parameter Order (a string). It checks if the Order is empty or not. If it is empty, it returns null. Otherwise, it returns a message confirming that the order has been placed. The console.log statements demonstrate both cases: one with a valid order ("Green tea") and one with an empty string, which results in null.
//----------------------------------------------------------------------------
function logchai(): void {
  console.log("This function does not return anything.");
}
logchai();
// In this example, the function logchai has a return type of void, which means it does not return any value. It simply logs a message to the console. When we call logchai(), it executes the console.log statement and prints the message, but it does not return anything.
//----------------------------------------------------------------------------
function getTeaPrice(type: string): number | null {
  if (type === "Masala") {
    return 2.99;
  }
  return null;
}
console.log(getTeaPrice("Masala"));
console.log(getTeaPrice("Green tea"));
// In this example, the function getTeaPrice takes a single parameter type (a string). It checks if the type is "Masala" and returns the corresponding price (2.99). If the type is not "Masala", it returns null. The console.log statements demonstrate both cases: one with a valid tea type ("Masala") and one with an invalid tea type ("Green tea").
//----------------------------------------------------------------------------
// Function with optional parameter, which can be called with or without the parameter
function makeTea(type: string, cups?: number): string {
  if (cups) {
    return `You ordered ${cups} cups of ${type} tea.`;
  }
  return `You ordered one cup of ${type} tea.`;
}
console.log(makeTea("Green"));
console.log(makeTea("Black", 3));
// In this example, the function makeTea takes two parameters: type (a string) and cups (an optional number). If cups is provided, it returns a message indicating the number of cups ordered. Otherwise, it returns a message indicating one cup of the specified type. The console.log statements demonstrate both cases: one with a valid tea type and no specified number of cups, and one with a valid tea type and a specified number of cups.

//----------------------------------------------------------------------------
function createChai(order: {
  type: string;
  cups: number;
  size: "small" | "medium" | "large";
}): string {
  return `You ordered ${order.cups} cups of ${order.size} ${order.type} chai.`;
}