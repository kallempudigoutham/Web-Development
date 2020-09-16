// While loop

let i = 1;
while(i<5){
  console.log(i);
  i++;
}

// do while loop
// It executes atleast once

let j = 1
do{
  console.log(j);
  j++;
}while(j<5)

//for loop

for(let k=1;k<5;k++){
  console.log(k);
}

// break keyword
let p = 1;
while(true){
  if(p>5){
    break;  // breaks the loop if p greater than 5
  }
  console.log(p);
  p = p + 2;
}

// Looping through arrays
const fruits = ["apple" , "banana", "kiwi"];
for(let f =0; f<fruits.length;f++){
  console.log(fruits[f]);
}
