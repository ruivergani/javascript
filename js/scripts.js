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
true || false; // OR Operator

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

// Object

var carro = {
    nome: 'Lamborghini', 
    ano: 2021,
    cor: 'Branca',
    automatica: true
}
carro.nome; // 'Lamborghini'
carro.cor; // 'Branca'  

// Arrays
var filhos = ['Rui', 'Maria', 'Pamela', 'Yuri']; // create array
console.log(filhos); // print array

filhos.pop(); // Remove last item of array
filhos.push('Cruze'); // Add in the end of array
filhos.length; // 4

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
 

// DOM
console.log(window); // window e o objeto global do navegador que possui diferentes metodos e propriedades 
console.log(window.innerWidth); // retorna a largura do navegador
window.alert('Isto e um alerta.');
alert('outro alerta');
document.querySelector('h2'); // seleciona o 1 H2
const titulo02 = document.querySelector('h2'); // atribui a uma constante a selecao h2
console.log(titulo02.classList[0])
document.body; // retorna o body

// Selecionando elementos
const cabecalho = document.getElementById('js-cabecalho'); // getElementByID

const rodape = document.querySelector('.rodape'); // seleciona o primeiro elemento com a classe rodape
const menu = document.querySelector('#menu');
const ultimoItem = document.querySelector('ul li:last-child');
const primeiraLista = document.querySelector('ul');

const itemMenu = primeiraLista.querySelector('li')