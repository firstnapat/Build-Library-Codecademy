class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    toggleCheckOutStatus() {
      this.isCheckedOut = !this.isCheckedOut;
    }
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((sum, rating) => sum + rating);
      return ratingsSum / this.ratings.length;
    }
  
    addRating(inputValue) {
      if (inputValue <= 5) {
        this._ratings.push(inputValue);
      } else {
        console.log("Rating have limit is 5");
      }
    }
    set isCheckedOut(value) {
      this._isCheckedOut = value;
    }
  }
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author() {
      return this._author;
    }
    get pages() {
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
  }
  
  class CD extends Media {
    constructor(artist, title) {
      super(title);
      this._artist = artist;
      this._songs = [];
    }
    get artist() {
      return this._artist;
    }
    get songs() {
      return this._songs;
    }
    addSong(newSong) {
      return this.songs.push(newSong);
    }
    shuffle() {
      return this._songs[Math.floor(Math.random() * this._songs.length)];
    }
  }
  
  const historyOfEverything = new Book(
    "Bill Bryson",
    "A Short History of Nearly Everything",
    544
  );
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  const speed = new Movie("Jan de Bont", "Speed", 116);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  
  const the1975 = new CD(
    "The 1975",
    "I Like It When You Sleep, for You Are So Beautiful yet So Unaware of It"
  );
  
  the1975.toggleCheckOutStatus();
  console.log(the1975.isCheckedOut);
  the1975.addSong("Somebody else")
  the1975.addSong("The Change of Heart")
  the1975.addRating(4);
  the1975.addRating(5);
  the1975.addRating(5);
  console.log(the1975.getAverageRating());
  // return shuffled songs
  console.log(the1975.shuffle());
  