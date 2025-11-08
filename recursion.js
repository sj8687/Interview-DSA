// function call itself

// function openDoll(dollNumber) {
//   if (dollNumber === 1) {
//     console.log("Smallest doll found! 🎯");
//     return;
//   }
  
//   console.log(`Opening doll number ${dollNumber}`);

//   openDoll(dollNumber - 1); 
//   console.log(dollNumber - 1);

//   console.log(dollNumber);
  
  

// }

// openDoll(5);





// function sum(n){
//     if (n === 1) return 1

//     return n + sum (n-1)
// }

// console.log(sum(5))

// sum(5)
// n + sum (n-1) => 5 + sum(4) =  5 + 10 = 15
// n + sum (n-1) => 4 + sum(3) =  4 + 6 = 10
// n + sum (n-1) => 3 + sum(2) =  3 + 3 = 6
// n + sum (n-1) => 2 + sum(1) =  1 + 2 = 3

// this is in stack so the last in first out like this




// do a factorial using recursion

// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n-1);
// }

// console.log(factorial(5)); //120 



// fibonacci series using recursion

// let n = 10;
// let first = 0 , second = 1;

// process.stdout.write(first + " " + second + " ");

// for(let i=1; i<=n-2;i++){
//     let third = first + second;  //0 + 1
//     first = second;
//     second = third;
//     process.stdout.write(third + " ");
// }

// 0 1 1 2 3 5 8 13 21 34 



// function fibo(n,first,second){
//     if(n == 0) return
//     let third = first + second
//     process.stdout.write(third+" ");
//     fibo(n-1,second,third)   //7,1,1
    
// }

// let n = 10;
// process.stdout.write(0 + " " + 1 + " ");
// fibo(n-2 , 0 , 1)   //8,0,1




