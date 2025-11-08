// reverse tree (rember the tree like structure and back tracking)

// function fibo(n){
//     if(n == 0 || n == 1) return n;

//     return fibo(n-1) + fibo(n-2);       (5,4)(4,3)
// }

// let n = 6;
// console.log(fibo(n));



// GCD in normal loop way
// let a=32 , b=20;

// for(let i = 20; i>=1; i--){
//     if(a % i == 0 && b % i == 0){
//          console.log("GCD =", i);
//          break;
//     }
// }


// GCD in simple way greatest common divisor  ( Euclidean Algorithm.)

// let a=32 , b=20;

// while(a != b){
//     if(a>b) a = a-b;
//     else b = b-a
// }
// console.log(a);



// with recursion
// function gcd(a,b){
//     if(a==b) return a;
//     if(a>b) return gcd(a-b , b) 
//     return gcd(b , b-a); 
// }

// let a=32 , b=20;
// console.log(gcd(a,b));


// function gcd(a,b){
//     if(b==0) return a;
//     return gcd(b , a%b);   32 , (32 % 20) = 12 (32 % 12)
// }

// console.log(gcd(32,20));


// factors of No. (sorted array)

// let n = 100;
// for(let i = 1; i <=Math.floor(Math.sqrt(n)); i++){  n = 10
//     if(n % i == 0){
//         process.stdout.write(i + " ")
//     }
// }

// for(let i = Math.floor(Math.sqrt(n)); i>=1; i--){
//     if(n % i == 0){
//         if(n /i !=i){
//             process.stdout.write(n / i + " ")
//         }
//     }
// }



// find a prime number between 1 to 100 like ex if input is 100

// let n = 10;
// let arr = new Array(n+1).fill(true);

// for(let i=2; i<=Math.floor(Math.sqrt(n)); i++){    //sqrt(10)
//     if (arr[i]) { //only run when value is true
//         for(let j = i*i; j<=n; j+=i){   //2*2=4  n=100  2+4=6
//             arr[j] = false;   
//         }
//     } 
// }

// for(let i=2; i<arr.length;i++){
//     if (arr[i]) process.stdout.write(i+" ")
// }

//2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 



//power(n)(based on recursion)

// var mypow = function(x,n) {
//     if(n==0) return 1.0;
//     let ans = temp(x,n);
//     return (n<0) ? 1/ans : ans;
// };

// var temp = function(x,n){
//     if(n === 0) return 1;
//     let ans = temp(x,parseInt(n/2));
//     if(n%2==0)return ans * ans;
//     return ans * ans * x;
// }

// console.log(mypow(2.00000,10))