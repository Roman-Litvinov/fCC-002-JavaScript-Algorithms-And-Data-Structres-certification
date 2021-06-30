/* PROBLEM:
You are given an object literal representing a part of your musical 
album collection. Each album has a unique id number as its key and
several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, 
RECORDS, containing the musical album collection, an ID, a PROP (like 
ARTIST or TRACKS), and a VALUE. Complete the function using the rules
below to modify the object passed to the function.

    Your function must always return the entire record collection object.
    If PROP isn't TRACKS and VALUE isn't an empty string, update or set that album's PROP to VALUE.
    If PROP is TRACKS but the album doesn't have a TRACKS property, create an empty array and add VALUE to it.
    If PROP is TRACKS and VALUE isn't an empty string, add VALUE to the end of the album's existing TRACKS array.
    If VALUE is an empty string, delete the given PROP property from the album.
*/

/* MORE DETAILS (added by me):
- recordCollection object contains album records as its properties,
  with album ID (a number) as the property name and a nested object 
  as that property's value.
- the nested objects contain key:value pairs of album properties.
- possible properties for an album (apart from the ID):
    albumTitle - a string
    artist - a string
    tracks - an array of strings
*/ 

// the object literal to work on:
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  // if value is '', an empty string:
  if (value ==='') {
    // delete prop from the object:
    delete records[id][prop];
    // otherwise, if prop is 'tracks':
  } else if (prop ==='tracks') {
      // if there's no existing 'tracks' property:
      if (!records[id].hasOwnProperty('tracks')) {
        // create empty 'tracks' array property, add value to 'tracks' array:
        // records[id][prop] = new Array();
        // records[id][prop].push(value);
        // OR, ALTERNATIVELY, - assign an array to an unassigned property to create and initialize it!
        records[id][prop] = [value];
        // otherwise (if 'tracks' is already present), 
      } else {
        // append value to existing 'tracks' array property:
        records[id][prop].push(value);
      }
      // otherwise (if prop is not 'tracks'),
  } else {
        // update or set prop to value:
        records[id][prop]=value;
  }
  // return the entire record collection object, finally:
  return records;
}

// TEST OPERATIONS:
updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
updateRecords(recordCollection, 2548, "artist", "");
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
updateRecords(recordCollection, 2468, "tracks", "Free");
updateRecords(recordCollection, 2548, "tracks", "");
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
console.log(recordCollection);
