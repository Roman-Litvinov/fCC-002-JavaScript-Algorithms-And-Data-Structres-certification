var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// construct a sentence using the given variables and other strings,
// by concatenating stuff together and accounting for spaces and 
// punctuation:

var wordBlanks = "My " + myNoun + " saw a freakishly " + myAdjective;
wordBlanks += " chicken, so he turned around and " + myVerb;
wordBlanks += " away very " + myAdverb + ".";

console.log(wordBlanks);
