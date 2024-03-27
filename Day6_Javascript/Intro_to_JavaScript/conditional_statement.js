// Control Flow Structure
// 1. Conditional Statements
// 2. Looping Statement

//1. Conditional Statement allow us to execute different block of codes base on a condition
// if statement
let age= 18;
if (age >=18) {
    console.log("You are eligible  for voting");
    } else{
        console.log("Sorry, you are not eligible for voting")
}
// else if and else can be used together
let temperature=25;
if (temperature <0) {
    console. log( "It's freezing!");    
}else if(temperature<10){
   console.log("It's very cold.");
}else{
    console.log("It's a nice day.")
}
// SWitch statement
let day= "Monday";

switch (day) {
    case "Monday":
        console.log("It is the strat of the week!");
        break;
    case 'Friday':
        console.log("This is the end of the week");
        break;  
    default:
        console.log("It's just a normal day");

}