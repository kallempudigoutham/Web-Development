// getter and setter
// to use getter or setter start the variable name with _
const myCat = {
  _name :'Dotie',

  get name(){
    return this._name;
  },

  set name(newName){
    this._name = newName;
  }
};

console.log(myCat.name) // invokes getter
myCat.name = "Yankee" // invokes setter

console.log(myCat)
