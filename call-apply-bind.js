// All three are used to:
//  - Change the value of this inside a function
//  - Borrow methods from other objects

// The difference is in how you pass arguments and when the function runs.

// call:Pass arguments individually

function greet(age) {
  console.log(`Hello, I am ${this.name} and I am ${age}`);
}

const person = { name: "Alice" };

greet.call(person, 25);




// apply:pass argument in array like getting more arguments

// function greet(age, city) {
//   console.log(`I am ${this.name}, age ${age}, from ${city}`);
// }

// const person = { name: "Bob" };

// greet.apply(person, [30, "Delhi"]);




// bind:Does NOT call the function immediately , Creates and returns a new function with this permanently set

// function greet() {
//   console.log(`Hello, I am ${this.name}`);
// }

// const person = { name: "Charlie" };

// const newFunc = greet.bind(person);
// newFunc();   // Now it runs

