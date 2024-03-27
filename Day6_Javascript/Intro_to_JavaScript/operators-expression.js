// Arithmatic aporations
// 1. Addition of two numbers
// 2. Subtraction of two numbers
// 3. Multiplication of two numbers
// 4. Division of two numbers
// 5. Modulus of two numbers

let x=30;
let y=15;

// console.log("Addition: ", sum);   // 45
console.log("Substraction: "+(x-y));    // 15
console.log("Multiplication: "+ (x*y));     // 450
console.log("Division: "+(x/y));      // 2
console.log("Modulus: "+(x%y))        // 15

// get sum or total "+"
let sum=x+y
console.log("Addition: ", sum);  

//   get difference or subtraction "-"
let diff = x - y
console.log("Difference: ",diff);

// get product or multiply "*"
let prod = x * y
// console.log("Product: ",prod);

// division "/", it will return floating point number so we use parseInt() to convert into integer 
let div = parseInt(x / y)
console.log("Division: ",div);


// Assignment expression --> create progressive value
let a=10;
let b=5;

a +=b
console.log("a+=b is :",a);      // 15
// 
// Substraction "-="
a -= b
console.log("a-=b is :",a);       // 10

// Multiplication "*="
a *= b  
console.log("a*=b is :",a);         // 50

// Division "/=", using parseInt to remove the decimal part
a /= b
console.log("a/=b is :",a);          // 10

// Concatenation
const firstWord= 'Hello';
const secondWord='World';
console.log(firstWord +' '+secondWord);

// logical expression
let sunny=true;
let rain=false;

console.log("Is sunny AND warm?", sunny && rain );    // false
console.log("Is sunny OR warm?", sunny || rain );     // true
console.log("Is NOT sunny? ", !sunny);                // false
// if (sunny && rain){
//     console.log('Both are true');
// }else if(!rain && !sunny){ 
//     console.log('Both are false')
// } else{
//     console.log('One of them is false');