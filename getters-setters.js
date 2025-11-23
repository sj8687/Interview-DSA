//Getter → access like a property, compute or return value.
//Setter → assign like a property, validate or transform value before storing.

const person = {
  firstName: "Rahul",
  lastName: "Sharma",

  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  // setter
  set fullNameeee(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); // Rahul Sharma (getter)
person.fullNameeee = "Aman Verma"; // setter (if setter is not then not set a value)
console.log(person.firstName); // Aman
console.log(person.lastName);  // Verma







// only setters

// const user = {
//   _age: 0,

//   get age() {
//     return this._age;
//   },

//   set age(value) {
//     if (value < 0) {
//       console.log("Age cannot be negative");
//     } else {
//       this._age = value;
//     }
//   }
// };

// user.age = 25;
// console.log(user.age); // 25
// user.age = -5; 
// console.log(user.age); // still 25
