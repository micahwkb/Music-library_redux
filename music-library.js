class Library {

  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.tracks = [];
    this.playlists = [];
  }
  addTrack(title, rating, length) {
    const newTrack = new Track(title, rating, length);
    this.tracks.push(newTrack);
  }
  addPlaylist(name, tracks) {
    const newPlaylist = new Playlist(name, tracks);
    this.playlists.push(newPlaylist);
  }
}

class Track {
  constructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.trackLength = length;
  }
}

class Playlist {
  constructor(name, tracks) {
    this.name = name;
    this.tracks = tracks;
    this.duration = this.totalDuration();
    this.rating = this.overallRating();
    this.trackCount = this.tracks.length
  }
  totalDuration() {
    return this.tracks.reduce((sum, a) => sum += a.trackLength, 0)
  }
  overallRating() {
    const sumRating = this.tracks.reduce((sum, a) => sum += a.rating, 0);
    return (sumRating / this.tracks.length).toFixed(1);
  }
}

// -- TESTS --

const fishy = new Library('Fish Songs','Fish McGee')
fishy.addTrack('fish soup', 5, 135);
fishy.addTrack('fish balls', 4, 222);
fishy.addTrack("fish n chips", 3.5, 182);

fishy.addPlaylist('fish rulez', fishy.tracks);

console.log(fishy.playlists)
console.log(fishy.tracks)
