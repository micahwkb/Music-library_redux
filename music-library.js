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
    let total = 0;
    this.tracks.forEach((track) => {
      total += track.trackLength;
    })
    return total;
    // using 'reduce' here produces NaN after more than 2 tracks
    // return this.tracks.reduce((a, b) => {
    //   return a.trackLength + b.trackLength;
    // })
  }
  overallRating() {
    let ratingTotal = 0;
    this.tracks.forEach((track) => {
      ratingTotal += track.rating;
    })
    return (ratingTotal / this.tracks.length).toFixed(1);
    // as above, re 'reduce'
    // let sumRating = this.tracks.reduce((a, b) => {
    //   return a.rating + b.rating;
    // });
    // return sumRating / this.tracks.length;
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
