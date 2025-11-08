//string is not immutable means we can't change the string like we chage array ex. str[0] = "s" but we change itt like this str + s  and fetch it like s[2]

//print a to z with unicode
// for (let i = 90; i <= 120; i++) {
//   console.log(String.fromCharCode(i), i, '\\u' + i.toString(16).padStart(4, '0'));
// }

// fetch the str using loop

// let str = "kunal nandakishore";
// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);        
// }

// let strr = "kunal nandakishore";
// for(let i = strr.length-1; i >0; i--){
//     console.log(strr.charAt(i));        
// }



// give the biggest string

// const large = (str) => {
//     if(str.trim().length === 0){
//         return false
//     }

//     const words = str.split(" ");

//     return words.reduce((curEle,accum)=> curEle.length > accum.length ? curEle : accum)
// }

// console.log(large("kunal nandakishoe"));



// another way

// const large = (str) => {
//     if(str.trim().lenght === 0 ){
//         return false
//     }

//     const words = str.split(" ");

//     const word = words.sort((a,b) => b.lenght - a.lenght )

//     console.log(word);
//     return word[0]
    
// }

// console.log(large("hiiiiiiiiii threeee"));




// convert 1st letter into capital and ignore another 280 letters

// const capital = (str) => {
//     if(str.length > 280 || str.trim().length === 0){
//         return false;
//     }

//     const word = str.split(" ");
//     console.log(word);
    
//     const words = word.map((curEle)=> curEle.charAt(0).toUpperCase() + curEle.slice(1)) 

//     const wordss = `#${words.join(" ")}`;
//     console.log(wordss);
//     return str
    
// }


// console.log(capital("hiiiiiiii therrrrrr gggggggggirllll"));




// how many times letter is use in that word

// const count = (word , char) => {
//     const words = word.toLowerCase();
//     const chars = char.toLowerCase();

//     const total = words.split("").reduce((accum,curEle)=>{
//         if(curEle == chars){
//             accum++
//         }
//         return accum
//     },0)

//     return total
// }

// console.log(count("ssssssssssssssssssssssHHHHHHHADIHIURU","u"));




// which trangle is isoscales and equilaterial , scalene

// const check = (a,b,c) => {
//     if(a == b && b == c) return "equilaterial"
//     if(a == b && b == c || a == c) return "isoscales"

//         return "scalene"
// }

// console.log(check(3,3,5));
// console.log(check(3,4,3));
// console.log(check(5,8,6));




// fnd the string is palindrome or not  and ignore a numerical values 

// const string = (str) => {
//     const word = str.toLowerCase();
//     let rev = word.split("").reverse().join("");

//    return rev == str ? true : false;
    
// }

// console.log(string("nitin"));

// or

// let str = "nitin";
// let rev = "";

// for(let i=str.length-1; i>=0; i--){
//     rev += str.charAt(i).toLowerCase();
// }
// if(rev == str){
//     console.log("palindrome");
// }else{
//     console.log("not palindrome");
// }

// or

// let str = "mkc";
// let palindrome = true;

// let i = 0; j = str.length - 1;

// while (i < j) {
//     if(str[i] !== str[j]) {
//         palindrome = false;
//         break;
//     }
//     i++;
//     j--;
// }
// if(palindrome) {
//     console.log("palindrome");
// }else console.log("not palindrome");




// anagram 
// function ana(str1,str2) {
//     const sort1 = str1.split("").sort().join("")
//     const sort2 = str2.split("").sort().join("")

//     return sort1 === sort2;
// }

// console.log(ana("listen","slient"));



// function word(arr){
//     const word = ["a","e","i","o","u"];
   
    
//     let count = 0;
//     for (const words of arr) {
//         if(word.includes(words.toLowerCase())){
//             count++
//         }

//     }
//     return count
    
// }


// console.log(word("Hiii there"));



// reverse a string without using reverse method

// let s = "shreysahil";
// let count = "";

// for(let i = s.length-1; i>=0 ; i--){
//     count+= s.charAt(i);
// }

// console.log(count);



// do a program who can convert capital A into a small and small a into A like (ShRe => sHrE) 


// let s = "SHREyash";

// let toggle = "";

// for(let i=0; i<=s.length-1; i++){
//     let str = s.charCodeAt(i);
   
//     if(str >= 65 && str <= 90){
//         toggle = toggle + String.fromCharCode(str + 32) 
//     }else if(str >= 97 && str <= 122){
//         toggle = toggle + String.fromCharCode(str - 32)}
    
// }

// console.log(toggle);




// how many times that letter appers each letter

// let str = "shreyash jadhav"

// let arr = new Array(128).fill(0);

// for(let i=0; i< str.length; i++){
//     let index = str.charCodeAt(i);
//     arr[index] = arr[index] + 1     //arr[115] = arr[115] + 1 → arr[115] = 1
// }


// for(let i=0; i<arr.length; i++){
//     if(arr[i] > 0){
//         console.log(String.fromCharCode(i) + " appear" + arr[i] + " times");
        
//     }
// }



// merage two string like this output sJhRaeyashdav

// let str = "shreysdh";
// let str2 = "jadhav";
// let res = "";

// let max = Math.max(str.length , str2.length);

// for(let i=0; i< max;i++){
//     if(str[i]) res+= str[i];
//     if(str2[i]) res+= str2[i];
// }

// console.log(res);


// or
// let str = "shreysdh";
// let str2 = "jadhav";
// let res = "";

// let i = 0;
// let j = 0;

// while (i < str.length || j < str2.length) {
//   if (i < str.length) {
//     res += str[i]; 
//     i++;
//   }
//   if (j < str2.length) {
//     res += str2[j];
//     j++;
//   }
// }

// console.log(res);







