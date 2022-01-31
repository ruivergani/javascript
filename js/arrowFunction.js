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

