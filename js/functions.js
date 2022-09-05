
// Functions
function areaQuadrado(lado){
    return lado * lado
}
function carroFavorito(carro){
    if(carro === 'Fusca'){
        console.log("O carro favorito e o fusca.")
    }
    else if(carro === 'Gol'){
        console.log("O carro e um gol.")
    }
    else{
        console.log("Nenhum dos carros.")
    }
}
areaQuadrado(10) // call the function
console.log(areaQuadrado(10)); // print function
console.log(carroFavorito())


// Anonymous function
var area = function(width, height){
    return width * height;
};

var size = area(2,3)

// Creating Constructor
function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;

    this.checkAvailability = function(){
        return this.rooms - this.booked;
    }
}
var quayHotel = new Hotel('Quay', 40, 25); // call instance
delete Hotel.booked;  // delete a property from object


