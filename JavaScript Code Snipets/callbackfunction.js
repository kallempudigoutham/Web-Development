// Higher order functions
// In Javascript, functions can be assigned to variables in the same way that strings or arrays can.
//They can be passed into other functions as parameters or returned from them as well.
// A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

// Example -1
// Passing function as argument to other functions

const isEven = (n) =>{
  return n%2 == 0;
}

let printMsg = (evenFunc , num) =>{
  const isEvenNum = evenFunc(num);
  console.log(`The number ${num} is even : ${isEvenNum}.`);
}

printMsg(isEven, 50);
