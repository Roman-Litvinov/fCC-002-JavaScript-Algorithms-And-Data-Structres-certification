// When both a local and a global variable have the same name,
// the local variable takes precedence over the global one when
// within the local scope.

// WARNING - when the var names are the same, and the local var
// is declared without using the "var" keyword, it becomes global
// and overwrites the global one!

//declare a global var with one value:
var outerWear = "T-Shirt";

function myOutfit() {
  // declare a local var with a different value:
  var outerWear = "sweater";
  // function will return the value "sweater" (value of the LOCAL outerWear variable):
  return outerWear;
}

// see the value of the global outerWear variable:
console.log(outerWear);
// see the value of the local outerWear variable:
console.log(myOutfit());
// see the value of the global outerWear variable again:
console.log(outerWear);
