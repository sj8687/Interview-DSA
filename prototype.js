// prototypes are a fundamental mechanism that allows objects to inherit properties and methods from other objects.

// - prototype hum function ke liye define karte hain (shared methods store karne ke liye).

// - __proto__ har object ke andar hota hai, jo constructor ke prototype ko point karta hai.





// whenever we tring to convert obj into string out is [0bj,0bj]

// const obj = { city: "New York" };
// console.log(obj.toString());



// const p1 = {
//     fname: "John",
//     lname: "Doe",
//     getFullName: function() {
//         return this.fname + " " + this.lname;
//     } 
// }

// const p2 = Object.create(p1);

// console.log(p1);
// console.log(p2.lname  );





// In this example, obj2 does not have its own getName method. When we call obj2.getName(), JavaScript looks for the method in obj2 first. Not finding it there, it follows the __proto__ link to obj and finds the getName method there. It then calls that method with obj2 as the this context, allowing access to obj2's properties if needed.  

// const obj = {
//     name:"sj",
//     getName:function(){
//         return this.name;
//     }

// }

// const obj2 = {
//     roll:22,
//     name:"ab",
//     __proto__:obj,
// } 

// console.log(obj2.getName());   //ab





// Example of adding a custom method to Array prototype

// Array.prototype.customMethod = function() {
//     return this;
// }

// const cities = ["New York", "Los Angeles", "Chicago"];
// console.log(cities.customMethod());




// class Student {
//     constructor() {
//         this.name = "John";
//     }

//     getName() {
//         return "no";
//     }   
// }

// const stu1 = new Student();

// const s2 = {__proto__:Student.prototype};
// console.log(s2);

// console.log(stu1);





// we crete our own prototype

// Function.prototype.myBind = function (){
//     console.log("shreyash");
    
// }

// function demo(){}
// demo.myBind()  //if u do this in chorme it works




// this is an example of prototype chaining in JavaScript. In this example, we have two objects, str and obj2. The obj2 object has its __proto__ property set to str, which means that obj2 inherits properties from str.

// let str = {
//   name: "hello",
//   city: "bmt"
// };

// let obj2 = {
//   name: "sj"
// };

// obj2.__proto__ = str;

// console.log(obj2);
// console.log(obj2.city);




