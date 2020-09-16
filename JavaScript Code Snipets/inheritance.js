//Parent class
class Media{
  constructor(info){
    this.date = info.date;
    this.name = info.name;
  }
}

//Child Class
class Song extends Media{
  constructor(songData){
    super(songData);
    this.artist = songData.artist
  }
}

const mySong = new Song({
  artist : 'Queen',
  name : 'goutham',
  date : 1996
});

console.log(mySong.name);
