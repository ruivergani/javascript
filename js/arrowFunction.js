// Arrow Function
const allDropdowns = document.querySelectorAll('.dropdown');
allDropdowns.forEach((item, index, array) => { // do not need the function structure (arguments go directly using =>)
    console.log('Index:' ,index)
    console.log('Item:' ,item)
    console.log('Array:' ,array)
})
allDropdowns.forEach(() => {
    // this is the structure for arrow function
})


// arrow function
const x = () =>{
    // function inside assigned to x
}
// check for parameters
let difference = (a, b) => b ? a - b : "Missing value"; // ternary operator

// use arguments objects
let showArgs = function(){
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
    // useful for a variable (unknown) number of values
}

// Scope concept
let age = 20;
if (age > 18){
    var drink = true;
    let vote = true;
    console.log("Can i drink?", drink);
    console.log("Can vote?", vote);
}
console.log("Can I drink?", drink);
console.log("Can I vote?", vote); // block level 

// var are function scoped
// let and const are block scoped (only available where declared)


// function can be declared anywhere and called BEFORE or AFTER declaration excepet when using functions expressions or arrows

