// Array
let fruit= "Mango";

// Create an Array
let  fruits = [fruit,"Apple","Banana"];
console.log("Fruits:", fruits);

//  Accessing array elements using index
console.log(fruits[0]);

// Access an out of bound index
console.log(fruits[5]);

// Length
console.log("Length:", fruits.length);

// Update 
fruits[1] = "Orange"
console.log("Fruits:", fruits);

//  Add element to the end of the array
fruits.push("Grapes");
console.log("Added Grapes: ", fruits)

// Add an element at the beginning of the array
fruits.unshift("Strawberry")
console.log("Added Strawberry : ", fruits)

// Check if an item exists in the array
if (fruits.includes('Banana')) {
    console.log("Yes, 'Banana' is present!");
} else {
    console.log("No, 'Banana' is not present!");
}

// Remove an element from the array using it's value
let index = fruits.indexOf('Mango');
console.log(" Index of Mango:", index)

// Remove last element from the array   
fruits.pop();
console.log("Removed Grapes: ", fruits);

// remove  first element from the array
fruits.shift();
console.log("Removed Strawberry : ", fruits);

// sort element
fruits.sort()
console.log("Sorted Fruit : ", fruits);
// splice
fruits.splice(1,1) //removing Orange from second position
console.log("After removing orange: ", fruits);
// delete a specific index
delete fruits[0];
console.log("Fruit : ", fruits);

// indexOf
// It will return an index
let index=fruits.indexeOf('Banana')
console.log("Index  of Banana after deleting : ", index)

// Check if an element is present in an array
// boolean: true/false
let isIncluded= fruit.includes("Banana")

// Join
let joined_fruits_elements=fruits.join("-");
console.log("Joined elements:", joined_fruits_elements);

// Slice the array
let sliced_fruits= fruits.slice(1,3)
console.log("Sliced Fruits:", sliced_fruits);
console.log("Fruits:", fruit)

// Looping through the elements
for ( let i=0; i<fruits.length; i++) {
   console.log(`Looping Through Elements ${i} :`, fruits[i]);
}