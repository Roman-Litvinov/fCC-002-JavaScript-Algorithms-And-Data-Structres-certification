// set up the contact list to work on:
// - is an array of objects with the following properties:
//      - firstName:    string
//      - lastName:     string
//      - number:       string
//      - likes:        array of strings
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

// make a function to look up a contact profile
// - take contact's first name and property as arguments
// - check if NAME matches an actual first name of a contact and 
//   if PROP matches one of existing properties of that contact, and
//   if both are true, return the value of that property.
// - if name doesn't exist in the list, return "No such contact".
// - if property doesn't exist for the given contact, return "No such property".

function lookUpProfile(name, prop) {
    console.log("Arguments are:", name, prop);
    // iterate through list:
    for (var recordNum = 0; recordNum < contacts.length; recordNum++) {
        // console.log('Record number:',recordNum);
        // if name matches...
        if (name === contacts[recordNum].firstName) {
            // console.log('Name match!');
            // check if property exists...
            if (contacts[recordNum].hasOwnProperty(prop)) {
                // if true - return its value:
                return contacts[recordNum][prop];
            } else {
                // if not - return property error message:
                return 'No such property';
            }
        }
    }
    // We only get to this point if no record had a matching first name,
    // and thus we didn't end up exiting the loop with either of the other
    // 2 possible outcomes (which would have used RETURN statements):
    // - name match + property found & shown
    // - name match + property not found
    // SO, we return name error message:
    // console.log('Name doesn\'t match!');
    return 'No such contact';
}

// TEST CASES:
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile('Sherlock', 'likes'));
console.log(lookUpProfile('Harry', 'likes'));
console.log(lookUpProfile('Bob', 'number'));
console.log(lookUpProfile('Bob', 'potato'));
console.log(lookUpProfile('Akira', 'address'));

