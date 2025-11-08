// A shallow copy occurs when you copy the reference of an object to a new variable. In this process, only the top-level properties are copied, while nested objects or arrays still reference the original memory location. This means that if you change the nested properties in one object, those changes will reflect in the other because they share the same memory reference.

// only nested reference are copy like non-primitive data


let employee = {
    eid: "E102",
    ename: "Jack",
    salary: 50000,
     eaddress:{
        add:"New York",
     } 
};


let newEmployee = { ...employee };    

newEmployee.eaddress.add = "Bmt";

console.log("Employee=> ", employee);        
console.log("New Employee=> ", newEmployee);