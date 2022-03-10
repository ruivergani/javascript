
// Arrays
var filhos = ['Rui', 'Maria', 'Pamela', 'Yuri']; // create array
console.log(filhos); // print array

filhos.pop(); // Remove last item of array
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