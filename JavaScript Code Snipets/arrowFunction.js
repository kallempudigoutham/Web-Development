// Arrow function expressions were introduced in ES6.
// These expressions are clean and concise


//Example -1
const hello = () =>{
  console.log("Hello world")
};

hello();

//Example -2

const sum = (a, b) => a+b;
console.log(sum(5, 8 ));

//Example -3

const checkWeight = weight =>{
  console.log(`Your Baggage weight is ${weight}`);
};

checkWeight(25);
