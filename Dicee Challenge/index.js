var value_1 = Math.floor((Math.random() * 6 )) + 1;
var value_2 = Math.floor((Math.random() * 6 )) + 1;

document.querySelector('.img1').setAttribute("src" , "images/dice"+value_1+".png");
document.querySelector('.img2').setAttribute("src" , "images/dice"+value_2+".png");

if(value_1 > value_2){
  document.querySelector('h1').textContent = "🏁 Player 1 Wins!";
}
else if(value_1 < value_2){
  document.querySelector('h1').textContent = "🏁 Player 2 Wins!";
}
else{
  document.querySelector('h1').textContent = "Draw!";
}
