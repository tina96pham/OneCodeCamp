// 1. Should be meaningful and descriptive.
// 2.SHould not start with a number.
// 3. Should not contain space or hyphen.
// 4. It is case sensitive.
// 5. Cannot use reversed keywords.


// Variables
//1. let variable
let firstName="John";
firstName= "Jane";
console.log('Hello!',firstName);

//2. var variable
var favoriteNumber= 23;
console.log(favoriteNumber);

// var vs let
if (true) {
    // console.log('Hello!',firstName);
    // console.log(favoriteNumber);

    // let is a block level scope: won't work outside this code block {}
    let lastName="Smith"; 
    // var is a global levl scope
    var age= "25"; // var
    // console.log(lastName)
    // console.log(age);
}
// console.log(lastName) error message will appear on console
console.log(age);

// 3. const var - fixed and cannot be change
const birthday="06/23/200";
// birthday = "07/08/2003" ;
// console.log(birthday); this will yield an errror because th variable is constant