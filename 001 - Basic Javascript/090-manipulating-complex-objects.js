// using objects in JS lets you save arbitrary combinations
// of various data types (strings, numbers, booleans, arrays,
// functions, and other objects).

// EXAMPLE:
// myMusic is an array of objects. Each object contains metadata
// on a single album in its properties in key:value format.
// We have string, number, array, and Boolean values stored:

var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: [
      "CD",
      "8T",
      "LP"
    ],
    gold: true
  },
  {
    artist: "Amaranthe",
    title: "Helix",
    release_year: 2018,
    formats: [
      "CD",
      "digital"
    ],
    gold: false
  }
];