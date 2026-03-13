// Union and any in TypeScript
// This file is written like a short lesson for a beginner.

// --------------------------------------------------
// 1. UNION TYPE
// --------------------------------------------------
// A union type means: a value can be one of multiple allowed types.
// We use the | symbol to create a union.

let subscriberId: number | string = "1M";
subscriberId = 1000000;

// This is also a union type, but here we use string literals.
// It means only these exact values are allowed.
let apiRequestStatus: "pending" | "success" | "error" = "pending";
apiRequestStatus = "success";

// apiRequestStatus = "loading";
// The line above would give an error because "loading" is not in the allowed union.

// A function can also accept a union type.
// Here, the id can be either a number or a string.
function printUserId(id: number | string): void {
	console.log("Original ID:", id);

	// Type narrowing:
	// Before using a value, TypeScript often needs us to check its real type.
	if (typeof id === "string") {
		console.log("String ID in uppercase:", id.toUpperCase());
	} else {
		console.log("Number ID with fixed format:", id.toFixed(0));
	}
}

printUserId("abc123");
printUserId(456789);

// Another useful example:
// A value coming from a form or URL may sometimes be a string,
// while a value from a database may be a number.
function addTax(price: number | string): number {
	if (typeof price === "string") {
		const convertedPrice = Number(price);
		return convertedPrice + convertedPrice * 0.18;
	}

	return price + price * 0.18;
}

console.log("Price with tax from string:", addTax("100"));
console.log("Price with tax from number:", addTax(250));

// Key idea:
// Union type gives flexibility, but still keeps rules.
// TypeScript will only allow the operations that are safe for every possible type,
// unless you first narrow the type.

// --------------------------------------------------
// 2. ANY TYPE
// --------------------------------------------------
// any means: TypeScript will stop checking the type of this value.
// It can become anything, and almost any operation will be allowed.
// This is powerful, but also dangerous.

let randomValue: any = "Hello TypeScript";
console.log(randomValue.toUpperCase());

randomValue = 25;
console.log(randomValue + 10);

randomValue = { topic: "TypeScript", duration: 30 };
console.log(randomValue.topic);

// This would compile if we wrote it, because the variable is any.
// But it may crash at runtime depending on the current value.
// randomValue.toUpperCase();

// Example of why any can hide mistakes:
function logLength(value: any): void {
	console.log("Length is:", value.length);
}

logLength("chai");
logLength([1, 2, 3, 4]);
logLength(500);
// For 500, TypeScript does not complain because value is any.
// At runtime, length will be undefined. This shows the risk of any.

// --------------------------------------------------
// 3. UNION VS ANY
// --------------------------------------------------
// Union type:
// - allows only a limited set of types
// - keeps TypeScript safety
// - usually the better choice
//
// any type:
// - disables most type checking
// - can hide bugs
// - should be used rarely

let safeValue: string | number = "chai";
// safeValue.toUpperCase();
// The line above gives an error because safeValue might also be a number.
// First we must check the type.

if (typeof safeValue === "string") {
	console.log(safeValue.toUpperCase());
}

let unsafeValue: any = "chai";
console.log(unsafeValue.toUpperCase());

unsafeValue = 123;
// TypeScript still allows this kind of unsafe code with any.
// console.log(unsafeValue.toUpperCase());

// --------------------------------------------------
// 4. SIMPLE RULE TO REMEMBER
// --------------------------------------------------
// Use union when you know the possible types.
// Use any only when you truly do not know the type and cannot describe it yet.
// In real projects, developers often prefer unknown instead of any,
// because unknown is safer.

console.log("Lesson complete: union is safer, any is more risky.");