// for in loop
let mobile = {
  brand : "Samsung",
  model : "Galaxy On8"
}

for(let key in mobile){
  console.log(`Key ${key}`);
  console.log(`value ${mobile[key]}`);
  console.log("------");
}

// this keyword
// this refers to the current calling object

// arrow function doesnot have "this" context, so better not use arrow functions for methods

const restaurant = {
  numCustomer = 40,
  noSeats = 180,
  availableSlots(){
    return this.noSeats - this.numCustomer;
  }
}

console.log(restaurant.availableSlots());  // Prints 140
