/* with VAR keyword, you can re-declare a variable
  with the same name without shown errors:

var camper = 'James';
var camper = 'David';
console.log(camper);    // outputs a string 'David'

With LET keyword, you cannot re-declare a variable
with the same name - it can only be declared once:

let camper1 = 'James';
let camper1 = 'David';  // throws a redeclaration error
*/


let catName;
let quote;
function catTalk() {
  "use strict";

  let x = 3.14;
  catName = "Oliver";
  quote = catName + " says Meow!";
  console.log(quote);

}
catTalk();

