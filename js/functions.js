
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

