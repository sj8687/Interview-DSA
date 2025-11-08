// The every function checks if all array elements satisfy a condition

// const n = [1,2];
// const allPos = n.every((num) => num > 0);
// console.log(allPos)

// output: true  if no matiching then    false



// The some function checks if at least one array element satisfies a condition.

// const n = [1, 2, 3, 4, 5];
// const hasNeg = n.some((num) => num < 2);
// console.log(hasNeg);

// output: true  if no matiching then    false



// The find function returns the first element in the array that satisfies a given condition.

// const n = [1];
// const fEven = n.find((num) => num % 2 === 0);
// console.log(fEven);

// output: true  if no matiching then    undefind




// The forEach function executes a provided function once for each array element.

// const n = [1, 2, 3];
// n.forEach((num) => console.log(num * 2));

// output: 2 4 6



// The reduce function accumulates array elements into a single value based on a callback function.

// const n = [1, 2, 3, 4, 5];
// const sum = n.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);



// The map function is used to transform an array by applying a callback function to each element. It returns a new array.

// const n = [1, 2, 3, 4, 5];
// const square = n.map((num) => num > 3);
// console.log(square);

// output : [ false, false, false, true, true ]



// The filter function is used to create a new array containing elements that satisfy a given condition.

// const n = [ 2,1];
// const even = n.filter((num) => num % 2 === 0);
// console.log(even);

// output: 2 if not then []




