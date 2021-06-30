// make a function that keeps a list of phonetic key:value pairs
// and gets the value when given the key:
function phoneticLookup(val) {
  var result = "";
  // make a new empty object using a constructor:
  var lookup = new Object;
  // assign its properties (key:value pairs):
  lookup.alpha='Adams';
  lookup.bravo='Boston';
  lookup.charlie='Chicago';
  lookup.delta='Denver';
  lookup.echo='Easy';
  lookup.foxtrot='Frank';
  // get the value of the property corresponding
  // to the given key:
  result = lookup[val];
  return result;
}

// TESTS:
console.log(phoneticLookup("alpha"));
console.log(phoneticLookup("bravo"));
console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("delta"));
console.log(phoneticLookup("echo"));
console.log(phoneticLookup("foxtrot"));
// what happens if we try and access the value of the property,
// whose name is an empty string "" and which we didn't assign
// a value before?
console.log(phoneticLookup(""));
