// bubble sort

// let arr = [5, 3, 8, 4, 22,56,78,4,22,11];

// let n = arr.length;
// for(let i=0; i<n-1; i++){
//     for(let j=0; j<n-1-i; j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }

// console.log(arr);



// selection sort

// let arr = [5, 3, 8, 4]; 

// for (let i = 0; i < arr.length - 1; i++) {
//   let minIndex = i;   //5   //3  store index no (0,1...)

//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[minIndex]) {
//       minIndex = j;
//     }
//   }

//   if (minIndex !== i) {     //minIndex = 1 (value 3), not equal to i(0)
//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
//   }
// }
// console.log(arr);




// insertion sort

// let arr = [5, 3, 8, 4];
// for (let i = 1; i < arr.length; i++) {
//   let current = arr[i];
//   let j = i - 1;
//   while (j >= 0 && arr[j] > current) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = current;
// }
// console.log(arr);


