// static methods are created when class is created
// they are called on class itself

class Dog{
  introduce(){
    console.log('I am a dog');
  }

  static bark(){
    console.log('Bow Bow');
  }
}

const myDog = new Dog();
myDog.introduce();


// static method call
Dog.bark();
