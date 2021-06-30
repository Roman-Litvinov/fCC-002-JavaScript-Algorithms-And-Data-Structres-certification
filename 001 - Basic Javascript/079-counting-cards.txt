/*  BLACKJACK - COUNTING CARDS

Cards               Count Change
2, 3, 4, 5, 6           +1	           
7, 8, 9                  0 
10,'J','Q','K','A'      -1
*/

// Make a function that will:
// - accept CARD parameter (a number or a string)
// - increment/decrement COUNT, depending on value of CARD (per table above)
// - return: current COUNT, then a single space, then 
//   either "Bet" (if COUNT >0) or "Hold" (if COUNT <= 0)

// init the global var count:
var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    default:
      // get out with error message:
      return("Unknown card!");
    }
  // if count >0, bet, otherwise hold:
  if (count >0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

// TEST CASES:
cc(2); cc(3); cc(7); cc('K'); console.log(cc('A'));
// reset the count before doing another sequence:
count = 0;
cc(2); cc(3); cc(4); cc(5); console.log(cc(6));
count = 0;
cc(7); cc(8); console.log(cc(9));
count = 0;
cc(10); cc('J'); cc('Q'); cc('K'); console.log(cc('A'));


