// .forEach method
// It takes a callback function as argument and executes for each of the element.

const numbers = [1, 27, 98, 74, 5];
numbers.forEach(
  number =>{
    console.log(number);
  }
);

//  .map method
// The .map() method executes a callback function on each element in an array. It returns a new array made up of the return values from the callback function.
//
// The original array does not get altered, and the returned array may contain different elements than the original array.

const finalPart = ["goutham" , "kallempudi","nani"];

const announcements = finalPart.map(
  member => {
    return member + " joined contest";
});

console.log(finalPart);
console.log(announcements);
