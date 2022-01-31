

// For loop
for(var numero = 0; numero <= 10; numero++){
    console.log(numero);
}


// While
var i = 0;
while(i < 10){
    console.log(i);
    i++;
}


// Loops com Array
var testing = ['Fusca', 'Ferrari', 'Gol'];
for(var i = 0; i < testing.length; i++){
   // console.log(testing[i]);
}


// forEach
testing.forEach( // just use item, index or array 
    function(item) {
        console.log(item);
    })
// By using forEach you don't need to use condition, or start or increment.
 