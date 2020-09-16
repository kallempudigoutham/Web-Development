// .filter method
// The .filter() method executes a callback function on each element in an array. The callback function for each of the elements must return either true or false. The returned array is a new array with any elements for which the callback function returns true.

const randomNumbers = [5, 1 , 25, 0 , -1, 99 , 17];
const filteredArray = randomNumbers.filter(
  number =>{
    return number > 5;
  }
);

console.log(filteredArray);


// .reduce method
// The .reduce() method iterates through an array and returns a single value.
// It takes a callback function with two parameters (accumulator, currentValue) as arguments. On each iteration, accumulator is the value returned by the last iteration, and the currentValue is the current element. Optionally, a second argument can be passed which acts as the initial value of the accumulator.

const arrayNum = [1,2,3,4];
const sum = arrayNum.reduce(
  (accumulator , currentValue) =>{
    return accumulator + currentValue;
  }
);

console.log(sum);
