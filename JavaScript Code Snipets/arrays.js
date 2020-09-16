// Declaration
const numberArray = [1, 2, 3];
const mixedArray = [1 , "goutham" , false, [1,2]];

console.log(mixedArray);

// Indexing

console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);

//Length of an mixedArray

console.log(mixedArray.length);

// Mutable
// JavaScript arrays are mutable, meaning that the values they contain can be changed.
//
// Even if they are declared using const, the contents can be manipulated


// Adding elements
numberArray.push(4);
numberArray.push(5, 6, 7);


// removing elements
const ingredients = ['eggs','flour','cheese'];
const poppedIngredient = ingredients.pop();
console.log(ingredients);
console.log(poppedIngredient);
