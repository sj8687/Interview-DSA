// basic
// let arr = new Array(3);  //or let arr = [];
// arr[0] = 100;
// arr[1] = 20;
// arr[2] = 30;

// arr[7] = 150;

// console.log((arr));   //[ 100, 20, 30, <4 empty items>, 150 ]



// sum of array

// let arr = [1,2,3,4];
// let sum = 0;
// for(let i = 0; i <= arr.length; i++){
//     sum+=i
// }

// console.log(sum);



// get a no from prompt and put it in the array
// let arr = new Array(3);

// for(let i=0; i<arr.length; i++){
//     arr[i] = Number(prompt("enter a number"))
// }
                                                         
// console.log(arr);



// swapping big  numbers
// let arr = [40,5,6,7,8,43,1,2];

// for (let i = 0; i <= arr.length; i++) {
//    for(j = 0; j < arr.length; j++){
//     if([arr[j]] > arr [j + 1]){
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//     }
//    }    
// }
// console.log(typeof(arr));
// console.log(arr); 

//[
//   1, 2,  5,  6,
//   7, 8, 40, 43
// ]



// const sortt = (arr) => {
//     return arr.sort((a,b) => (a - b));
// }

// console.log(sortt([8,5,7,4,5,32,1]));




// find the maximum 
// function find(str) {
//     console.log(...str);
//     return Math.max(...str)

// }

// console.log(find([11,1,2,44,55,6,7,8]))

// find max no by loop
// let arr = [32,5,8,43,77];
// let max = arr[0]
// for(let i=1; i<arr.length; i++){
//     if(max < arr[i]){
//         max = arr[i]
//     }
// }

// console.log(max); //77




// find second big no
// let arr = [34, 56, 111, 57];

// let Max = Math.max(arr[0], arr[1]);  // 56
// let SMax = Math.min(arr[0], arr[1]); // 34

// for (let i = 2; i < arr.length; i++) {
//     if (arr[i] > Max) {
//         SMax = Max;  //56
//         Max = arr[i]; //111

//     } else if (arr[i] > SMax && arr[i] < Max) {   //57 > 56 && 57 < 111 
//         SMax = arr[i];  smax will be 57
//     }
// }

// console.log(SMax);  // 56




// reverse an array
// let arr = [1,2,3,4,5];
// let temp = new Array(arr.length);

// let j = 0;
// for(let i = arr.length-1; i>=0; i--){
//     temp[j] = arr[i]
//     j++;
// }
// console.log(temp);  //[ 5, 4, 3, 2, 1 ]







// or more better way

// let arr = [6,5,4,3,2,1];


// let i = 0;  let j = arr.length-1;

// while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
    
// }

// console.log(arr); //[ 5, 4, 3, 2, 1 ]





// let arr = [1,1,0,1,0,1,0,1,0,1];

// let i = 0; j = 0;

// while(i <= arr.length){
//     if(arr[i] == 0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
//     i++;
// }
// console.log(arr);

// [
//   0, 0, 0, 0, 1,
//   1, 1, 1, 1, 1
// ]




// // give the factorial

// function factorial(num){
//     let fact = 1;

//     for(let i = 1; i <= num; i++){
//         fact = fact * i;
//     }
//     return fact;
// }

// console.log(factorial(3));




// check two number of arrays are equal or not


// const equall = (arr1 , arr2) => {
//     if(arr1.length !== arr2.length){
//         return false
//     }

//     return arr1.every((curEle,index)=>
//         curEle === arr2[index]

//     )
// }

// console.log(equall([1,2],[1,3]));








// rotate an array

// let arr = [1,2,3,4,5];

// let copy = arr[0];  //1

// for(i=0; i<arr.length-1; i++){   //5
//     arr[i] = arr[i+1];  //2 = 2
// }

// arr[arr.length-1] = copy;    //

// console.log(arr);    //[ 2, 3, 4, 5, 1 ]




// rotate a but oposite

// let arr = [1,2,3,4,5];

// let copy = arr[arr.length - 1];

// for( let i=arr.length-1; i>0; i--){
//         arr[i] = arr[i-1];
// }

// arr[0] = copy;

// console.log(arr);  //[ 5, 1, 2, 3, 4 ]



// rotate left as per prompt (for less loooping there is (k%) )

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("enter a no to rotate the array")); //7

// k = k % arr.length; 

// for(let i=0; i<k; i++){
//         let temp = arr[0];
//         for(let j=0; j<arr.length-1; j++){
//                 arr[j] = arr[j+1];
//         }
//         arr[arr.length - 1] = temp;
// }

// console.log(arr);  //[3,4,5,1,2]

// or

// let arr = [1,2,3,4,5];
// let temp = new Array(arr.length);
// // let k = Number(prompt("enter a value")); //7
// k = 7 % arr.length;

// for (let i = 0; i < arr.length; i++){
//         temp[i] = arr[(i + k) % arr.length];
//         console.log(temp[i]);        
// }

// console.log(temp);



// This question is for rotating an array to the right by k steps
// let arr = [1,2,3,4,5];
// // let k = Number(prompt("enter a value"))    //3
// k = 3 % arr.length

// reverse(0, k-1);   //[3, 2, 1, 4, 5]   (0,3-1) = 0 to 2  //callin reverse fun..
// reverse(k, arr.length-1);  //[3, 2, 1, 5, 4]   (3,4)
// reverse(0, arr.length-1)   // [4, 5, 1, 2, 3]   (0,4)

// console.log(arr);


// function reverse(i,j){   //i=0, j=4 (this is the value of last revrse(k,lenght))

//         while(i<j){
//                 let temp = arr[i]   
//                 arr[i] = arr[j]  
//                 arr[j] = temp; 
//                 i++;
//                 j--
//         }
// }



// remove duplicate No. and sort an arr
// const remove = function(nums) {
//     let j = 1;
//     for (let i = 0; i < nums.length - 1; i++) {
//         if (nums[i] != nums[i + 1]) {
//             nums[j] = nums[i + 1];
//             j++;
//         }
//     }
//     return j;

    
// };

// let arr = [1, 6, 5, 5, 4, 4, 3, 3, 2, 1, 2];
// arr.sort((a, b) => a - b); 
// let count = remove(arr);

// console.log("Unique count:", count);
// console.log("Updated array with unique elements:", arr.slice(0, count));


// or
// const unique = function(num){

//     let uniqueEle = [];

//     for (let i = 0; i < num.length; i++) {
//         if(uniqueEle.indexOf(num[i]) === -1){
//             uniqueEle.push(num[i])
//         }
        
//     }

//     return uniqueEle;
// }

// console.log(unique([1,1,2,25,5,4,7,8,6]));


// or
//  function unique(num){
//     return [...new Set(num)]
// }

// console.log(unique([1,1,2,25,5,4,7,8,6]));




// merge an arrray with sort

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// console.log([...arr2,...arr1]);



// let arr1 = [2, 5, 6]; 
// let arr2 = [1, 3, 4, 8];

// let merge = new Array(arr1.length + arr2.length);
// let i = 0, j = 0, k = 0;

// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//         merge[k++] = arr1[i++];
//     } else {
//         merge[k++] = arr2[j++];
//     }
// }

// while (j < arr2.length) {      
//     merge[k++] = arr2[j++];
// }
// while (i < arr1.length) {
//     merge[k++] = arr1[i++];
// }

// console.log(merge); // [1, 2, 3, 4, 5, 6, 8]



// find the profit(over all profit)

// var maxProfit = function(prices){
//         let maxProfit = 0;
//         let min = prices[0];
//         for(let i = 0; i < prices.length; i++ ){
//                 if(prices[i] < min) min = prices[i]  //1 < 1
//                 let profit = prices[i] - min;   //
//                 maxProfit = Math.max(maxProfit , profit)
//         }

//         return maxProfit
// }

// console.log(maxProfit([1,4,33,55,6,7]));


// sort a color

// const soercolor = function(arr){
//     let i=0, j=0, k=arr.length-1

//     while(i<k){
//         if (arr[i] == 0) {
//             let temp = arr[j];
//             arr[j] = arr[i];
//             arr[i] = temp;
//             i++;
//             j++;
//         }
//         else if(arr[i] ==2){
//             let temp = arr[k];
//             arr[k] = arr[i]
//             arr[i] = temp
//             k--;
//         }
//         else{
//             i++
//         }
//     }

//     return arr
// }

// console.log(soercolor([2,0,2,1,1,1,0])); // [0,0,1,1,2,2]



// maximum subarray (kadane's algorithm)

// const maxsub = function(nums){   
//     let max = -Infinity; 
//     let sum = 0; 

//     for(let i=0; i < nums.length; i++){
//         sum +=nums[i];
//         max = Math.max(max,sum);
//         if(sum < 0) sum = 0
//     }
//     return max
// }
// console.log(maxsub([-2,1,-3,4,-1,2,1,-5,4]));  //6



// majority algorithm

// const majority = function(nums) {
//   let ans = nums[0];  //2
//   let count = 1;
//   for(let i=1; i<nums.length; i++){
//     if(count == 0){
//       ans = nums[i];
//       count = 1;
//     }else if(ans == nums[i]) count++;

//     else count--;
//   }

//   return ans;
// }


// console.log(majority([2,2,1,1,1,2,2,2]));  //2




// const major = function(nums) {
//   let ans = nums[0];
//   let count = 1;

//   for(let i=1; i<nums.length; i++){
//     if(count == 0){
//       ans = nums[i];
//       count = 1;
//     }else if(ans == nums[i]){
//       count++;
//     }else count--;
//   }

//   return ans;
// }


// or

// function major(nums) {
//   nums.sort();
//   return nums[Math.floor(nums.length / 2)];
// }

// console.log(major([2,2,1,2,2,1,3,3,3,3,3,3]));  //2




// trapping rain water (hard)

// let trap = function(height){

//   let left = new Array(height.length);   // [4,4,4,4,4,5]
//   let right = new Array(height.length);  // [5,5,5,5,5,5]

//   let maxLeft = height[0], maxRight = height[height.length-1];   // maxLeft-4  maxRight-5

//   left[0] = maxLeft , right[right.length-1] = maxRight;    //  Left-4  right-5
 

//   for(let i=1; i<height.length; i++){
//     maxLeft = Math.max(height[i],maxLeft);
//     left[i] = maxLeft;
//   }

//   for(let i=height.length-2; i>=0; i--){
//     maxRight = Math.max(height[i],maxRight);
//     right[i] = maxRight;
//   }

//   let ans = 0;
//   for(let i=0; i<height.length; i++){
//     ans += Math.min(left[i], right[i]) - height[i];
//   }

//   return ans;

// }


// console.log(trap([4,2,0,3,2,5]));   //9



// let arr = [1,2,3,4,5,6];

// let x = 3;
// console.log(arr[x]);



// add a 70 to the 2nd index by loop

// let arr = [11,22,33,44,55,66];
// let newEl = 70;
// let position = 2;


// for(let i = arr.length-1; i >= 0; i--){
//     if(i >= position ){        
//         arr[i+1] = arr[i]        
//         if(i == position){
//             arr[i] = newEl
//         }

//     }
// }

// console.log(arr);




// delete a no in array with his postion(index);

// let arr = [1,2,3,4,5,6];
// let position = 3;
// for(let i = position; i <= arr.length-1; i++){
//     arr[i] = arr[i+1];
// }

// arr.length = arr.length-1

// console.log(arr);

// [1, 2, 3, 5, 6]



//search the following no

// let data = [1,2,3,4,6,5];
// let item = 5;
// let index = undefined;

// for(let i = 0; i < data.length; i++){
//     if(data[i] === item){
//         index = i
//         break;
//     }
// }

// console.log(index);


// merge the array

// let data = [1,2,3,4];
// let data2 = [5,6,7,8];

// let data3 = [];

// for(i=0; i < data.length; i++){
//     data3[i] = data[i]
// }
// for(i=0; i<data2.length;i++){
//     data3[data.length+i] = data2[i];
// }

// console.log(data3);



// seprate numbers and strings from an array

// const arr = [1,"sj",2,'c'];
// let num = [];
// let str = [];
// let other = [];

// arr.forEach((ele) => {
//     if(typeof ele === 'number'){
//         num.push(ele);
//     }
//     else if (typeof ele === 'string'){
//         str.push(ele);
//     }
// })

// console.log(num);




// flat the array  [1,2,3,4,5,6,7,8,]

// const a = [1,2,3, [4,[5,6], 7,8]];

// let arrayStore = []
// function flatArray(a){
//     for (let i = 0; i < a.length; i++) {
//          if (typeof a[i] === "number") {
//             arrayStore.push(a[i])
//          }
//          else{
//             flatArray(a[i]) // recurrsion call
//          }  
//     }
// }


// flatArray(a)
// console.log(arrayStore);




// display repeated values
// let arr1 = [100,200,400,500];
// let arr2 = [1000,200,4000,500];

// let res = arr1.filter((item)=> arr2.includes(item))

// console.log([...new Set(res)]);

// or

// let arr1 = [100, 20, 300, 400, 500];
// let arr2 = [300, 400, 50, 100, 200];

// let repeated = [];

// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//       if (!repeated.includes(arr1[i])) {    //push it to repeated (only once)
//         repeated.push(arr1[i]);
//       }
//     }
//   }
// }

// console.log(repeated);






