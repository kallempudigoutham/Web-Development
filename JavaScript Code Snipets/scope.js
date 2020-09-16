// Global Scope
const name = "goutham";
function printName(){
  console.log(name);
}
printName();

// Block Scoped variables

const isLoggedIn = true;
if(isLoggedIn){
  const name1 = "goutham";
  let name2 = "kallempudi";
  var name3 = "nani";
}


// ReferenceError for all
cosole.log(name1);
cosole.log(name2);
cosole.log(name3);
