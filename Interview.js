// function findMissingNumbers(arr) {
//   const missing = [];

//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   for (let i = min; i <= max; i++) {
//     if (!arr.includes(i)) {
//       missing.push(i)
//     }
//   }

//   return missing;
// }

// console.log(findMissingNumbers([1, 2, 3, 9])); // [4, 5, 6, 7, 8]

 


// function isBalanced(s) {
//   let count = 0;

//   for (let char of s) {
//     if (char === '(') {
//       count++;
//     } else if (char === ')') {
//       count--;
//     }

//     if (count < 0) return false;
//   }

//   return count === 0;
// }

// console.log(isBalanced("()()")); // true
// console.log(isBalanced("(())")); // true
// console.log(isBalanced("(()"));  // false
// console.log(isBalanced("()()")); // true
// console.log(isBalanced("())(")); // false




// convert a first letter in capital 

// const convert = (str) =>{
//     const strr = str.split(" ");

//     const res = strr.map((curEle)=>
//         curEle.charAt(0).toUpperCase()+curEle.slice(1)
//     )

//     const final = res.join(" ")
//     console.log(final);
// }

// convert("hiii bhai")



// check no is palindrome or not and convert it into string

// const isPalindrome = function(x){
//     return x < 0 ? false : x === +x.toString().split("").reverse().join("");
//     //that plus sign converts the string back to a number
// }
// console.log(isPalindrome(121));



// fibonacci series using iteration

// const fibo = function(n){
//     const arr = [0,1];

//     for(let i = 2; i<= n; i++){
//         arr.push(arr[i-1] + arr[i - 2]);
//     }

//     console.log(arr);

// }

// fibo(10)



// anagram or not

// const isAnagram = function(str1, str2) {
//     str1 = str1.split("").sort().join("");
//     str2 = str2.split("").sort().join("");

//     console.log(str1,str2);

//     return str1 === str2;
// }

// console.log(isAnagram("listen", "silent"))


// anagram in fast way
// const isAnagram = function(str1,str2){
//     if(str1.length !== str2.length) return false;

//     let obj1 = {};
//     let obj2 = {};

//     for(let i = 0; i < str1.length; i++){
//         obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
//         obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
//     }

//     for (const key in obj1 ){
//         if (obj1[key] !== obj2[key]) return false
//     }

//     return true
// }

// console.log(isAnagram("listen", "silent")); 



// print a num array whose sum is 10

// const arr = [1,9,4,6,4,6,11];
// const ans = [];

// for(let i = 0; i<arr.length-1; i++){
//     for(let j = i+1; j<arr.length; j++){
//         if(arr[i] + arr[j] === 10){
//             ans.push(arr[i]);
//             ans.push(arr[j]);
//         }
//     }
// }

// console.log(ans);




//alternative of strings

// const str1 = "shreyash";
// const str2 = "jadhav";

// let max = Math.max(str1.length,str2.length)
// let res = "";

// for (let i = 0; i <= max; i++) {
//     if(i < str1.length) res += str1[i]
//     if(i < str2.length) res += str2[i]

// }

// console.log(res);  //sjhardehyaavsh

// const findbigword = (str) => {
//     if(str.trim().length === 0){
//         return false
//     }

//      let words = str.split(" ");
//      let wwords = words.sort((a,b) => b.length- a.length)
//      return wwords[0]

//   //  return words.reduce((accum,curEle) => (curEle.length > accum.length ? curEle : accum),"")

// }

// console.log(findbigword("hii there bro"));



// find how many times that letter in that pharse

// const countChar = (str,char)=>{

//     const strr = str.toLowerCase();
//     const charr = char.toLowerCase();

//     totalcount = strr.split("").reduce((accum,curEle) => {
//         if(curEle == charr){
//             accum++
//         }
//         return accum;

//     },0)  
//     return totalcount  
// }

// console.log(countChar("hello sj","I"));



// check whether a trangle is equilaternal , isoscles , scalene

// const checkTrangle = (a,b,c) => {
//     if(a == b && b == c) return "equilaternal";
//     if(a == b || b == c || a == c) return "isoscles";
//     return "scalene";
// };

// console.log(checkTrangle(4,4,4));


// calculate the avg
// const calculate = (arr) => {
//     let total = arr.reduce((accum,curEle) => accum + curEle,0)

//     return total / arr.length;
// }


// console.log(calculate([5,10,2,8]));



// check the array is equal or not and its value

// const checkIt = (arr1,arr2) =>{
//     if(arr1.length !== arr2.length){
//         return false
//     }

//     return arr1.every((curEle,indx) => curEle == arr2[indx])
// }

// console.log(checkIt([1,2,3],[1,2,3]));




// calculate the whole number 

// const checkNo = (num) => {
//     let arr = Array.from(String(num),Number)
//     console.log(typeof(arr));
//     return arr.reduce((accum,curEle) => accum +=curEle,0)

// }

// console.log(checkNo(1234));


// remove duplicate element no.

// const remove = (arr) => {
//     let res = [...new Set(arr)]

//     return res 
// }

// console.log(remove([8,8,87,6,5,4,3]))



// check how many times a,es,i,o,u

// const checkvow = (str) =>{
//     let vowels =['a','e','i','o','u'];

//     let arr = str.split("");

//     let count = 0;
//     for(let char of arr){
//         if(vowels.includes(char.toLowerCase())){
//             count++
//         }

//     }
//     return count
// }


// console.log(checkvow("hii there"));



// power of two

// const isPowerOfTwo = (num) => {
//     let op = false;
//     for(let i = 1; i < num; i++){
//         if(2**i === num){
//             op = true
//         }
//     }

//     return op;
// }


// console.log(isPowerOfTwo(8));



// calculate the sum of square

// const sumSquare = (arr) => {
//     return arr.reduce((accum,curEle) => (accum =  + curEle * curEle),0)

// }                                 

// console.log(sumSquare([1,2,3]));


// or

// const sumSquare = (arr) => {
//     let sum = 0;

//     for(let ele of arr){
//         sum = sum + ele * ele
//     }
//     return sum
// }                                

// console.log(sumSquare([1,2,3]));



// find the maximum amt

// const find = (arr) => {
//   let  arrr =  arr.sort((a,b) => {
//        if ( b > a) {
//         return -1
//        } 
//    })
//    return arrr[0]
// }

// console.log(find([1,2,3,4,-1]));


// convert word it into camelCase

// const toCamelCase = (str) => {
//     str = str.trim().split(" ");

//     str = str.map((curEle , index) => {
//         if(index == 0){
//             return curEle.toLowerCase();
//         } else {
//             return curEle.charAt(0).toUpperCase() + curEle.slice(1).toLowerCase();
//         }
//     })

//     return str.join("")

// }

// console.log(toCamelCase("hello ji"));



// chech letter is capital or small

// const isUpperCase = (char) => {
//     if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
//         return true;
//     }
//     return false
// }

// console.log(isUpperCase("t"));


// check given word is exist in that string or not

// const startWith = (str, substr) => {
//     // return str.toLowerCase().startsWith(substr.toLowerCase());

//     return str.slice(0, substr.length) === substr;
// }

// console.log(startWith("hello" , "hello"));



// find mean and average

// const calculateMean = (arr) => {
//     if(arr.length == 0){
//         return 0;
//     }

//     let sum = arr.reduce((accum,curEle)=> accum + curEle,0)
//     return sum / arr.length

// }

// console.log(calculateMean([1,2,3,4,5]));  //3



// find the median

// const findMean = (arr) => {
//   arr.sort((a,b) => a - b);

//     let length = arr.length;
//     let mid = Math.floor(length / 2);

//     if (length % 2 == 0) {
//         return (arr[mid] + arr[mid - 1]) / 2;
//     } else {
//         return arr[mid]
//     }

// }


// console.log(findMean([5,4,6,3,2,1]));



// how many times that no will present in the array

// const numbers = [1,22,22,2,3,4,5,6];
// let counts = {};

// for(let element of numbers){
//     counts[element] = (counts[element] || 0) + 1
// }

// console.log(counts);


// find the mode of the array

// const findMode = (arr) => {
//     let counts = {};
//     let maxNum = 0;
//     let mode;

//     for(let element of arr){
//         counts[element] = (counts[element] || 0) + 1;
//         if(counts[element] > maxNum){
//             maxNum = counts[element];
//             mode = element;
//         }
//     }

//     console.log(counts);
//     return mode;

// }

// console.log(findMode([1,2,3,4,5,5,5,6,6,6,6]));  //6



// factorial by recursion

// const factorial = (num) => {
//     if(num == 1){
//         return 1;
//     } else {
//         return num * factorial(num - 1);
//     }
// }

// console.log(factorial(5));



// find nth fibonacci number

// const fibonaaci = (num) => {
//     if(num <= 1) {
//         return num;
//     }
//     else {
//         return fibonaaci(num - 1) + fibonaaci(num - 2);
//     }
// }

// console.log(fibonaaci(7));


// repeat a string n times

// const repeatString = (str, num) => {
//     return num > 0 ? str.repeat(num) : str;
// }

// console.log(repeatString("hi ",3));


// truncate a string

// const truncateString = (str, num) => {
//     if(num <= 0){
//         return str;
//     }
//      else if(str.length > num){
//         return str.slice(0,num).concat("...");
//     }
// }


// console.log(truncateString("hello there i am shreyash", 10));



// an array contain consecutive numbrers

// const numberRange = (a,b,arr=[]) => {
//     while(a <= b){
//         arr.push(a);
//         a++;
//     }
//     return arr;
// }

// console.log(numberRange(4,10));
// or
// const numbers = (a,b) => {
//     let arr = [];


//     for(let i=a; i<=b; i++){
//         arr.push(i);
//     }
//     return arr;

// }

// console.log(numbers(4,10));


// now using recursion

// const numberRange = (a,b,arr=[]) => {
//     if(a <= b ){
//         arr.push(a);

//         return numberRange(a+1,b,arr)
//     }
//     return arr;
// }

// console.log(numberRange(4,10));


// password validator

// const validatePassword = (password) => {
//     let hsaLowerCase = false;
//     let hasUpperCase = false;
//     let hasNumber = false;

//     for(let char of password){
//         if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <=90){
//             hasUpperCase = true;
//         } else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <=122){
//             hsaLowerCase = true;
//         } else if(!isNaN(Number(char))){
//             hasNumber = true;
//         }
//     }

//     if (!hasNumber || !hasUpperCase || !hsaLowerCase || password.length < 8) {
//         return false
//     }

//     return true
// }


// console.log(validatePassword("Hello123"));




// generate a clor code 

// const randomColor = () => {
//    return `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`
// }

// console.log(randomColor());


// guess the outpt

// let abc = 100;
// if(function xyz(){}) {
//     // abc = abc + typeof(xyz) //100undefined
//      abc = abc - typeof(xyz) //NaN
// }

// console.log(abc);


// let obj = {
//     xyz:`pabitra`,
//     pqr:function  (){
//         console.log(this.xyz);

//     }
// }

// const c = obj.pqr;
// c() //undefind beacue refrence

// obj.pqr()  //pbitra



// let arr = ["shreyash","s"]

// let ans = arr.includes("S" , -2);

// console.log(ans);




// remove duplicate elememt

// const removeDuplicate = (arr) => {
//     return [...new Set(arr)]
// }

// console.log(removeDuplicate([1,6,2,1,2,3,4,5,5,5,6,6,6]));



// check obj is empty or nottt

// const isEmpty = (obj) => {
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             return " yeah tohh hai"
//         }
//     }

//     return "bkl empty hai"

// }

// or
// const isEmpty = (obj) => Object.keys(obj).length === 0;

// console.log(isEmpty({name:"sj"}));
// console.log(isEmpty({}));



// convert obj into array then to obj again

// const obj = {
//     name:"shreyash",
//     age:24,
//     city:"pune"
// }

// const entries = Object.entries(obj)
// let res = Object.fromEntries(entries);

// console.log(res);



// find the substring or not 

// const isSubstring = (str, substr) => {
//     return str.toLowerCase().includes(substr.toLowerCase());
// }

// console.log(isSubstring("hello there","f"));
// or
// const arr = ["shreyash","rey"];

// function abc(arr) {
//     let arr1 = arr[0].split("");
//     let arr2 = arr[1].split("");

//     let flag = false;

//     for(let arr of arr2){
//         if(arr1.includes(arr)){
//             flag = true
//         } else{
//             flag = false
//         }
//     }

//     return flag
// }


// console.log(abc(arr))

// or
// function findMissingNumbers(str,word) {
//    if(str.indexOf(word ) == -1){
//     console.log("not found");

//    } else {
//     console.log("found :" + str.indexOf(word));

//    }

// }

// console.log(findMissingNumbers("hii there","hiii"));



// find the diffrence between two dates

// const calculateDays = (d1, d2) => {
//     const date1 = new Date(d1);
//     const date2 = new Date(d2);

//     const diff = Math.abs(date1-date2)
//     return diff / (24 * 60 * 60 * 1000);    
// }


// console.log(calculateDays("2023-10-01", "2023-10-15"));


// find the age of person

// const calculateAge = (dob) => {
//     let today = new Date();
//     let birthDate = new Date(dob);

//     let age = today.getFullYear() - birthDate.getFullYear();
//     let month = today.getMonth() - birthDate.getMonth();

//     if(month < 0 || (month == 0 && today.getDate() < birthDate.getDate())){
//         age--;
//     }

//     return age
// }


// console.log(calculateAge("2000-08-15"));


// function finddupicate(arr) {
//     let res = [];

//     for(let i =0; i<arr.length; i++){
//         for(let j=i+1; j <arr.length; j++){
//             if(arr[i] == arr[j]){
//                 res.push(arr[i])
//             }
//         }
//     }

//     return res
// }

// console.log(finddupicate([1,2,3,4,5,6,7,1,2]))   //[1,2]

// or
// let arr = [1,2,3,4,7,5,6,7,1,2];

// let res = arr.sort((a,b) => a-b).filter((curEle,indx,arr) => curEle == arr[indx + 1])   

// console.log(res);


// we have to find how many times that strinf occurs

// function findOccurence(str, word) {
//     let count = 0;

//     for(let i = 0; i < str.length; i++) {
//         let temp = "";
//         for(let j=i; j<str.length; j++) {
//             temp += str.charAt(j);
//             if(temp === word) {
//                 count++;
//             }
//         }
//     }
//     return count;

// }

// console.log(findOccurence("hello there hello hi hello", "h"));  //5


// const generateChart = (arr) => {
//     const newArr = arr.map((curEle,index) => {
//         let star = "";
//         let count = 0;

//         while (count < curEle) {
//             star += "*";
//             count++
//         }

//         return `${index + 1}:${star}`
//     })
//     return newArr.join("\n");

// }

// or
// const generateChart = (arr) => {
//     return arr.map((curEle,index) => {
//         return `${index + 1} : ${" *".repeat(curEle)}`
//     }).join("\n")
// }

// console.log(generateChart([5,3,9,2]));
// 1:*****
// 2:***
// 3:*********
// 4:**






// const obj1 = {};
// const obj2 = {
//     name: "sj"
// }
// const obj3 = {
//     city: "bmt"
// }

// obj1[obj2] = {
//     name:"shreyash"
// }

// obj1[obj3] = {
//     name:"j"
// }

// console.log(obj1[obj2]);





// 2 in currying and normal

// function sum(a,b){
//     if(a && b )return a + b;
//     return function(b){
//         return a + b;
//     }
// }
// console.log(sum(2,2));

// console.log(sum(4)(4));




// infinite currying
// function add(a) {
//     return function (b){
//     if (!b) {
//         return a
//     }

//     return add(a+b)
//     }

// }

// console.log(add(1)(2)(3)(4)());





// compare two strings are anagram(equal) or not

// let arr = ["sj", "js"]


// function check(a,b) {
//    return a.split("").sort().join("") == b.split("").sort().join("")    

// }


// console.log(check(arr[0],arr[1]));

// or

// let arr = ["sj", "jhh"]

// let arr1 = arr[0]
// let arr2 = arr[1]

//     if(arr1.includes(arr2)){
//         console.log("yes");
//     }

//     else{
//         console.log("no");
//     }



// seprate each digit by length

// let arr = [1, 10, 100, 2, 20, 200];

// let arr1 = [];
// let arr2 = [];
// let arr3 = [];

// for (let num of arr) {
//   let len = num.toString().length; 

//   if (len === 1) arr1.push(num);
//   else if (len === 2) arr2.push(num);
//   else if (len === 3) arr3.push(num);
// }

// console.log("arr1 =", arr1);
// console.log("arr2 =", arr2);
// console.log("arr3 =", arr3);



// seprate the string and number in array

// let arr = [1, "sj", 3, "js", 5];

// let numArr = [];
// let strArr = [];

// for(let ele of arr){
//     if(typeof(ele) === "number"){
//         numArr.push(ele)
//     } else if(typeof(ele) === "string"){
//         strArr.push(ele)
//     }
// }

// console.log("numArr =", numArr);
// console.log("strArr =", strArr);        


// or

// let red = arr.reduce((accum, curEle) => {
//     if (typeof (curEle) === "number") {
//         accum.numbers.push(curEle)
//     }
//     else if (typeof (curEle) === "string") {
//         accum.strings.push(curEle);
//     }

//     return accum;

// }, { numbers: [], strings: [] })

// console.log(red.strings,red.numbers);





// return id info who is greater than two

// let arr = [{id:1,name:"sj"},{id:2,name:"aj"},{id:3,name:"am"}]
// let arr1 = arr.filter((curele) => curele.id > 2);

// console.log(arr1);


// or

// let arr = [
//   {id:1, name:"sj"},
//   {id:2, name:"aj"},
//   {id:3, name:"am"}
// ];

// let arr1 = []
// arr.forEach((curele) => {
//   if (curele.id > 2) arr1.push(curele);
// });
// console.log(arr1);





