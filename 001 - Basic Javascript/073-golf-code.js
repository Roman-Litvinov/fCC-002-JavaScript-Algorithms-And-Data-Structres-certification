/* GOLF CODE - OUTCOMES
Each hole in golf has a PAR - which is an average number of STROKES that a golfer
is expected to make to sink the ball in the hole to complete the play. 
Depending on how above/below par the strokes were, the outcome has a different
nickname, as per the following table (# of strokes vs. nickname):

STROKES     |   NICKNAME
1               Hole-in-one!
<= (par-2)      Eagle
par-1           Birdie
par             Par
par+1           Bogey
par+2           Double Bogey
>= (par+3)      Go Home!
*/

// set up array of possible outcome nicknames, in order from best to worst per strokes:
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

// set up a function which accepts the PAR, the STROKES number, and returns
// the appropriate outcome nickname depending on their relationship:
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <=(par-2)) {
    return names[1];
  } else if (strokes == (par-1)) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == (par+1)) {
    return names[4];
  } else if (strokes == (par+2)) {
    return names[5];
  } else {
    return names[6];
  }
}

// TEST CASES:
console.log(golfScore(5, 4));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(4, 7));
console.log(golfScore(4, "7"));
