// creating a class

class Song{
  constructor(){
    this.title;
    this.author;
  }
  play(){
    console.log('Song playing');
  }
}

// creating an Object
const mySong = new Song();
mySong.play();

// Initializing the variables

class Music{
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
  play(){
    console.log(`Music by ${this.author}`);
  }
}

const myMusic = new Music("beat", "gk");
mySong.play();
