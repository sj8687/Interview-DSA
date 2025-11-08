// one to hundred tables
// for(let i=1; i <= 10 ; i++){
//     console.log(`${i}`);
//     for(let j = 1; j <= 10; j++){
//         console.log(i * j);   
//     }
// }



 

// for loop reverse
// for(let i = 200; i > 99; i--){
//     console.log(i);
    
// }






// infinite loops
// for(var i=1; i < 10;){
//     console.log(i);
    
// }

// for(;;){
//     console.log("hello");
    
// }





// sum of natural no.

// var n = Number(prompt("give me postive no"));

// if(isNaN(n)){
//     alert("invalid input");   
// }
// else{
//     if (n > 0) {
//     let sum = 0;

//     for(let i = 1; i <= n; i++){
//         sum += i;
//     }
//     console.log(sum);
    
//     }
//     else{
//     alert("should be +ve");
    
// }

// }




// factorial 

// let fact = Number(prompt("enter a number"))
// let sum = 1;

// for (let i = 1; i <= fact; i++) {
//     sum = sum * i
//     // console.log(sum);
    
// }

//  console.log(sum);




// how many numbers should divide a even No.

// var n = Number(prompt("give me postive no"));


// if(isNaN(n)){
//     alert("invalid input");
    
// }

// else{
//     if (n > 0) {
//        for(var i = 1; i <= n; i++){
//         if(n%i == 0){
//             console.log(i);
            
//         }
//        }
//     }
//     else{
//     alert("should be +ve");
    
// }

// }


// optimize way
// for(var i = 1; i <= Math.floor(n/2); i++){
//     if(n%i == 0){
//         console.log(i);
        
//     }
//     console.log(n);
    
// }




// check no is prime or not
// var n = Number(prompt("give me prime no"));


// if(isNaN(n)){
//     alert("invalid input");
    
// }

// else{
//     if (n > 0) {
//      let prime = true;
//        for(var i = 2; i<=Math.floor(n/2); i++){
//             if(n % i == 0){
//                 prime = false
//                 break;
//             }
//        }
//        console.log(prime);
       
//     }
//     else{
//     alert("should be +ve");
    
// }


// }

// optimized way
// function isprime(n){
//     if(n<=1)return false
//     if(n==2)return true
//     if(n%2==0) return false

//     for(let i=3; i<=Math.floor(Math.sqrt(n)); i+=2){
//         if(n%i==0)return false
//     }
//     return true
// }

// console.log(isprime(12));





// while loop

// var i = 1;
// while(i <= 23){
//     console.log(i);
//     i++
// }


// var ans = prompt("de dooo");

// while (ans !== "exit") {
//     ans = prompt("dedo")
// }
//keep moving forward jb tak exit nahi type karoge 



// sum of No.

// const sum = (n) => {
//     let no = 0;

//     while(n > 0){
//         rem = n % 10;  //1234 % 10 = 4, 123 % 10 =3 .... => 
//         no +=rem;         //4+3+2+1 = 10
//         n = Math.floor(n / 10);     //1234 / 10 = 123, 
//     }
//     console.log(no);
    
// }

// sum(1234);




// reverse a No.

// function rev(n){
//     var reve = 0;
//     while( n > 0){
//         var rem = n % 10;
//         reve = reve * 10 + rem;   
//         n = Math.floor(n/10) 
//     }
//     console.log(reve);
    
// }


// console.log(rev(1234)) //4321



// strong No. (Digits ke factorials ka sum number ke equal hona chahiye 1 + 24 + 120 = 145 )


// function strong(n){
//     var sum = 0;
//     var copy = n;

//     while(n > 0){
//         var rem = n % 10;
//         var fact = 1;

//         for(var i = 1; i <= rem; i++){
//             fact *= i;
//         }
//         sum += fact;
//         n = Math.floor(n/10)
//     }

//     if (copy == sum) {
//         console.log("strong");
        
//     }
//     else{
//         console.log("weak");
        
//     }
// }


// strong(145)





// do-while (ek bar toh chlta hi hai without checking the condition)

// var i = 11;
// do{
//     console.log("hii");
//     i++
// } while(i<=10)




// star pattern    
// let prompt = require("prompt-sync")();
// let n = Number(prompt("enter a number"))

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n; j++){
//             process.stdout.write("*");

//     }
//     console.log(); 
    
// }







//print trangle pattern

// let prompt = require("prompt-sync")();
// let n = Number(prompt("enter a number"))

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//        process.stdout.write("*");  
//     }
//     console.log();
    
// }
  



// print 1,2 no pattern
// let prompt = require("prompt-sync")();
// let n = Number(prompt("enter a number"))

// for(let i = 1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write(j+" ");  

//     }
//     console.log();
    
// }
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 



// print ABCD in patter

// let prompt = require("prompt-sync")();
// let n = Number(prompt("enter a number"))

// for(let i=1; i<=n; i++){
//     let assii = 65;
//     for(let j=1; j<=i; j++){
//         process.stdout.write(String.fromCharCode(assii)+" ")
//         assii++
        
//     }
//     console.log();
    
// }

// A 
// A B 
// A B C 
// A B C D 
// A B C D E 




// print ulta trangle pattern

//  let prompt = require("prompt-sync")();
//  let n = Number(prompt("enter a number"));

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=n-i+1; j++){
//         process.stdout.write("* ");
//     }
//     console.log();
    
//  }


// * * * * * 
// * * * * 
// * * * 
// * * 
// * 




// mirror pattern

//   let prompt = require("prompt-sync")();
//    let n = Number(prompt("enter a number"));

//    for(let i=1; i<=n; i++){
//       for(let j=1; j<=n-i; j++){
//         process.stdout.write("  ");
//       }

//       for(let j=1; j<=i; j++){
//         process.stdout.write("* ");
//       }
//       console.log();
      
//    }


//         * 
//       * * 
//     * * *
//   * * * *
// * * * * *





// for(let i = 1; i<=5; i++){
//     let pattern = " ";
//     for(let j=1; j<=5-i; j++){
//         pattern += " "
//     }

//     for(let j=1; j<=i; j++){
//         pattern += "* "
//     }
//     console.log(pattern);
 
// }


//        * 
//       * * 
//      * * * 
//     * * * *
//    * * * * *
//   * * * * * *
  





 
