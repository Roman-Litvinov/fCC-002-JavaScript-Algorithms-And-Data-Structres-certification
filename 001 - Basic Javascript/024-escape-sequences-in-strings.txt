/*  ESCAPE SEQUENCES
  The following escape sequences are used to use various
  special characters inside strings:
  \'  - a single quote
  \"  - a double quote
  \\  - a backslash
  \n  - a newline
  \r  - a carriage return
  \t  - a tab
  \b  - a word boundary, whatever that is
  \f  - a form feed
*/

/* using escape sequences, assign the following 3 lines of text to myStr:
FirstLine
    \SecondLine
ThirdLine
*/

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);
