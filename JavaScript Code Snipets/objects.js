const classOf2018 ={
  students : 38,
  year : 2018,
  price : {
    bulk : '30/hr',
    small : '15/hr'
  }
};

console.log(classOf2018)

// accessing properties
console.log(classOf2018.students);
console.log(classOf2018.price.bulk);

// delete operator
// works only on properties

delete classOf2018.price.small;
console.log(classOf2018);


// accessing a non existent property results in undefined value
console.log(classOf2018.name); // undefined

// java script objects are mutable, meaning they can change
// Even though they are assigned to const, we can alter them

classOf2018.name = "Deutsche"
console.log(classOf2018);


// short hand syntax

const activity = 'Surfing';
const beach = {activity};
console.log(beach);
