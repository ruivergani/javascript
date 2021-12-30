console.log('Hello World!!'); // escreve no console do navegador
// alert('Isto e um alert do javascript'); // manda um alerta para o navegador


// Variables in JS
var marcaCarro = 'Chevrolet';
let anoCarro = 2021;
const vendido = false; // nao altera a variavel

console.log(marcaCarro);
console.log(anoCarro);

// Data Structure

var carro = 'Gol'; // String
var anoCarro2 = 2021; // Number
var carroVendido = true; // Boolean
var qtdRodas; // Undefined
var carroAutomatico; // Null
var Simbolo = Symbol(); // Symbol
var ObjetoCarro = { // Object
    nome: 'Gol',
    anoFabricacao: 2021,
    marca: 'Volswagen'
}; 
console.log(ObjetoCarro);
console.log(ObjetoCarro.nome);
var objetoPosicoes = [ // Object (more positions)
    { 
        nome: 'Gol',
        anoFabricacao: 2021,
        marca: 'Volswagen'
    },
    { 
        nome: 'Polo',
        anoFabricacao: 2021,
        marca: 'Volswagen'
    },
];
console.log(objetoPosicoes[0].nome);
console.log(objetoPosicoes.length);

console.log(typeof carro); // Type of Variable
console.log("O carro com nome " + carro + " foi fabricado no ano de " + anoCarro2); // Concatenacao
console.log(`O nome do carro e ${carro}`); // Template String (ECMA Script 6)

// Numbers and Operators
let pi = 3.14
let soma = 5 + 10;
let subtracao = 10 - 5;
let multiplicacao = 10 * 5;
let divisao = 10 / 2;
let expoente = 2 ** 4;
let medida = 'litros'; // NaN (not a number - if you sum number + string)

// Unario Operator
let incrementar = 10;
console.log(incrementar++) // after
console.log(++incrementar) // before

// Conditional IF and Else
if(carroVendido){
    console.log('O carro foi vendido! ');
}
else{
    console.log('O carro nao foi vendido.');
}

let possuiCarro = true
let possuiMoto = false
if(possuiMoto){
    console.log('Ele tem uma moto.');
} 
else if(possuiCarro){
    console.log('Ele tem um carro.');
}
else{
    console.log('Ele nao tem nenhum veiculo.');
}

// False values
if(false);
if(0);
if(NaN);
if(null);
if(undefined);
if('');

// Negative Operator
if(!true) // false
if(!'') // true
if(!undefined); //true

true && true; // AND Operator