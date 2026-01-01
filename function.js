
function Add(){
    const [a] = arguments;
    console.log("Add function called",a);
}

Add(2)


// we cant use arrow function with arguments object
const Addd = () => {
     const [b] = arguments;  
     console.log(`sum is ${b}`);
     

}

Addd(2)



// also we cant use this like in arrow function
function Person(name, age){
    this.name = name;
    this.age = age;
}

const obj = new Person("John", 30);
console.log(obj.name);



// ex

const objj = {
    name:"spi",
    age:20,
    sayhello:function(){
        console.log(`hello ${this.name}`);
    }

    //  sayhello: () =>{     //arrow function point (this to windows not dom)
    //     console.log(`hello ${this.name}`);
    // }
}

objj.sayhello();



// if we want to use this top of arrow fun we write noraml fun

const objjj = {
    name:"sanket",
    age:20,
    sayhello: function(){    //works because noraml fun point to dom
        const greet = () => {
            console.log(`hello ${this.name}`);
        }
        greet();
    }
}   

objjj.sayhello();