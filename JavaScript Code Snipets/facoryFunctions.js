// Functions which return object is called factory function

const dogFactory = (name, age, breed) =>{
  return{
    name : name,
    age : age,
    breed : breed,
    bark(){
      console.log("Bow Bow");
    }
  };
};
