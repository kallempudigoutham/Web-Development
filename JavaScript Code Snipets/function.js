function calculateBmi(weight, height){
  return Math.round(weight / (height * height));
}

console.log(calculateBmi(67 , 1.70));
