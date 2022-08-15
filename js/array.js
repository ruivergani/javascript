
// Arrays
var filhos = ['Rui', 'Maria', 'Pamela', 'Yuri']; // create array
console.log(filhos); // print array

filhos.pop(); // Remove last item of array (also return)
filhos.push('Cruze'); // Add in the end of array
filhos.length; // 4

let colours = ["red", "purple"]; // an array
for(let i=0; i< colours.length; i++){ // acessing element
    console.log(colours[i]);
}

console.log(colours.push("pink")); // add elements to end of the array
console.log(colours.unshift("orange")); // add element to front of array and return number of elements
console.log(colours.pop()); // remove from end of array
console.log(colours.shift()); //remove from front of the array

// insert and remove elements
colours.splice(2, "green", 6); // location to insert - number items to delete - items to insert

// concatenate array
let all = things.concat(colours); // assign an array concatenated another one

// retrieve elements and store in a new array
let primary = all.slice(3, 6); // start - end 

// sort()
// reverse()
// find()

// Matrix concept
const students = [
    ['Joseph', 23, 'MG'],
    ['Rui', 22, 'SP']
]
console.log(students[0][1])