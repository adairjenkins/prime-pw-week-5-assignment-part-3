console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {

  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }//end album

  collection.push(album);
  return album;
}//end addToCollection

console.log('Added:', addToCollection('Blue Train', 'John Coltrane', 1958));
console.log('Added:', addToCollection('Kind of Blue', 'Miles Davis', 1959));
console.log('Added:', addToCollection('Birth of Cool', 'Miles Davis', 1957));
console.log('Added:', addToCollection('Waltz for Debby', 'Bill Evans Trio', 1962));
console.log('Added:', addToCollection('Lady in Satin', 'Billy Holiday', 1958));
console.log('Added:', addToCollection('At Carnegie Hall', 'The Thelonious Monk Quartet with John Coltrane', 1957));


console.log('Collection:', collection);
//------------------------------------------------------------------------------

function showCollection(array) {
  console.log('Number of items:', array.length);

  for (let i=0; i < array.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist} published in ${collection[i].yearPublished}`);
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
  searchHits = [];

  if (('artist' in searchObject) && ('yearPublished' in searchObject)) {
    for (let i=0; i<collection.length; i++) {
      if (searchObject.artist == collection[i].artist && searchObject.yearPublished == collection[i].yearPublished) {
        searchHits.push(searchObject);
      }
    }
    return searchHits;
  }

  return collection;
}

album0 = { artist: 'Ray Charles', yearPublished: 1957}
album1 = { artist: 'Miles Davis', yearPublished: 1959}
album2 = { title: 'Birth of Cool', yearPublished: 1957}

console.log('Test search for no match:', search(album0));
console.log('Test search for match:', search(album1));
console.log('Test search for argument that does not meet criteria:', search(album2));
