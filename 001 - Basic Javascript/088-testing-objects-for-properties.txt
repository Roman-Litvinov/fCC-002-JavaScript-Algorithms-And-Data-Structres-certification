// to check if an object has a certain property,
// we use the .hasOwnProperty(propName) method 
// of objects, which returns TRUE or FALSE, like so:

var myObj = {top:"hat", bottom:"pants"};
// check if myObj has the "top" property (returns TRUE):
console.log(myObj.hasOwnProperty("top"));
// check if myObj has the "middle" property (returns FALSE):
console.log(myObj.hasOwnProperty("middle"));


// - accept an object and property name as arguments
// - check if the object has that property,
// - if yes - return the property's value
// - if no - return "Not Found"
function checkObj(obj, checkProp) {
//  console.log(obj);
//  console.log(checkProp);
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

// TEST CASES:
console.log(checkObj({gift:'pony',pet:'kitten',bed:'sleigh'}, 'gift'));
console.log(checkObj({gift:'pony',pet:'kitten',bed:'sleigh'}, 'pet'));
console.log(checkObj({gift:'pony',pet:'kitten',bed:'sleigh'}, 'house'));

console.log(checkObj({city:'Seattle'}, 'city'));
console.log(checkObj({city:'Seattle'}, 'district'));

console.log(checkObj({pet:'kitten',bed:'sleigh'}, 'gift'));
console.log(checkObj({pet:'kitten',bed:'sleigh'}, 'bed'));