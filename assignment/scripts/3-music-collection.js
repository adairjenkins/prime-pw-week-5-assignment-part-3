console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, tracks) {

  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  }//end album

  collection.push(album);
  return album;
}//end addToCollection

console.log('Added:', addToCollection('Blue Train', 'John Coltrane', 1958,
                                      [{trackName:'Blue Train', duration:'10:44'},
                                       {trackName:'Moment\'s Notice', duration:'9:11'},
                                       {trackName:'Locomotion', duration:'7:14'},
                                       {trackName:'I\'m Old Fashioned', duration:'7:58'},
                                       {trackName:'Lazy Bird', duration:'7:07'},]));
console.log('Added:', addToCollection('Kind of Blue', 'Miles Davis', 1959,
                                      [{trackName:'So What', duration:'9:28'},
                                       {trackName:'Freddie Freeloader', duration:'9:54'},
                                       {trackName:'Blue in Green', duration:'5:42'},
                                       {trackName:'All Blue', duration:'5:39'},
                                       {trackName:'Flamenco Sketches', duration:'9:30'}]));
console.log('Added:', addToCollection('Birth of the Cool', 'Miles Davis', 1957,
                                      [{trackName:'Move', duration:'2:34'},
                                       {trackName:'Jeru', duration:'3:13'},
                                       {trackName:'Moon Dreams', duration:'3:20'},
                                       {trackName:'Venus De Milo', duration:'3:12'},
                                       {trackName:'Budo', duration:'2:35'},
                                       {trackName:'Deception', duration:'2:48'},
                                       {trackName:'God Child', duration:'3:10'},
                                       {trackName:'Boplicity', duration:'3:01'}]));
console.log('Added:', addToCollection('Waltz for Debby', 'Bill Evans Trio', 1962,
                                      [{trackName:'My Foolish Heart', duration:'4:57'},
                                       {trackName:'Waltz for Debby', duration:'7:00'},
                                       {trackName:'Detour Ahead', duration:'7:37'},
                                       {trackName:'My Romance', duration:'7:11'},
                                       {trackName:'Some Other Time', duration:'5:00'},
                                       {trackName:'Milestones', duration:'6:33'}]));
console.log('Added:', addToCollection('Lady in Satin', 'Billy Holiday', 1958,
                                      [{trackName:'I\'m a Fool to Want You', duration:'3:25'},
                                       {trackName:'For Heaven\'s Sake', duration:'3:28'},
                                       {trackName:'You Don\'t Know What Love Is', duration:'3:50'},
                                       {trackName:'I Get Along Without You Very Well', duration:'3:00'},
                                       {trackName:'For All We Know', duration:'2:55'},
                                       {trackName:'Violets for Your Furs', duration:'3:26'},
                                       {trackName:'You\'ve Changed', duration:'3:19'},
                                       {trackName:'It\'s Easy to Remember', duration:'4:03'},
                                       {trackName:'But Beautiful', duration:'4:31'}]));
console.log('Added:', addToCollection('At Carnegie Hall', 'The Thelonious Monk Quartet with John Coltrane', 1957,
                                      [{trackName:'Monk\'s Mood', duration:'7:52'},
                                       {trackName:'Evidence', duration:'4:42'},
                                       {trackName:'Crepuscule With Nellie', duration:'4:27'},
                                       {trackName:'Nutty', duration:'5:04'},
                                       {trackName:'Epistrophy', duration:'4:30'},
                                       {trackName:'Bye-Ya', duration:'6:31'},
                                       {trackName:'Sweet & Lovely', duration:'9:35'},
                                       {trackName:'Blue Monk', duration:'6:31'}]));

console.log('Collection:', collection);
//------------------------------------------------------------------------------

function showCollection(array) {
  console.log('Number of items:', array.length);

  for (let i=0; i < array.length; i++) {
    console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}:`);

    if (typeof array[i].tracks !== 'undefined') { //confirms object has tracks property
      for (let j=0; j < array[i].tracks.length; j++) {
        console.log(`${j+1}. ${array[i].tracks[j].trackName}: ${array[i].tracks[j].duration}`);
      }
    }
  }
}

showCollection(collection);
//------------------------------------------------------------------------------

function findByArtist(artist) {
  let artistAlbums = [];

  for (let i=0; i < collection.length; i++) {
    if (collection[i].artist == artist) {
      artistAlbums.push(collection[i]);
    }
  }
  return artistAlbums;
}

console.log('Albums in collection by Miles Davis:',findByArtist('Miles Davis'));
console.log('Albums in collection by Lady Gaga:', findByArtist('Lady Gaga'));
//------------------------------------------------------------------------------

function search(searchObject) {
  let searchHits = [];

  if (('artist' in searchObject) && ('yearPublished' in searchObject) && ('tracks' in searchObject)) { //confirms searchObejct has necessary properties; could be improved if I could figure out how to check for trackNames instead of tracks
    for (let i=0; i<collection.length; i++) {

      let tracks_i = collection[i].tracks; //uncertain if this variable is necessary but was not able to make .some work without it

      if (searchObject.artist == collection[i].artist
          && searchObject.yearPublished == collection[i].yearPublished
          && tracks_i.some(tracks_i => tracks_i.trackName == searchObject.tracks.trackName)) {

        searchHits.push(searchObject);
      }
    }
    return searchHits;
  }

  return collection;//returns original collection if searchObject does not have necesary properties
}

album0 = { artist: 'Ray Charles', yearPublished: 1957, tracks: {trackName: 'A Fool for You'}}
album1 = { artist: 'Miles Davis', yearPublished: 1959, tracks: {trackName: 'All Blue'}}
album2 = { title: 'Birth of the Cool', yearPublished: 1957}

console.log('Test search for no match:', search(album0));
console.log('Test search for match:', search(album1));
console.log('Test search for argument that does not meet criteria:', search(album2))
