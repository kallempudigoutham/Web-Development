// Js objects can have methods
// Example

const engine = {
  name : "Audi",

  start(adverb){
    console.log(`the engine ${adverb}`)
  },

  sputter :  ()=>{
    console.log("Anonymous class");
  }

}

console.log(engine.name);
engine.start("5 star");
engine.sputter();
