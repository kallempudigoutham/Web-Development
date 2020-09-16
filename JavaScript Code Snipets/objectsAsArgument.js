// When passing variables to function they are passed by value
// But objects are passed by reference

const num = 8;
const colObj = {
  color : "blue"
}

const changeItUp = (num , obj) =>{
  num = 7;
  obj.color = 'red';
};

changeItUp(num, colObj);

console.log(num);  // prints 7
console.log(colObj.color); // prints red
