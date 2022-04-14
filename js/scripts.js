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
// window.alert('Isto e um alerta.');
// alert('outro alerta');
document.querySelector('h2'); // seleciona o 1 H2
const titulo02 = document.querySelector('h2'); // atribui a uma constante a selecao h2
console.log(titulo02.classList[0])
document.body; // retorna o body


// Selecionando elements
const cabecalho = document.getElementById('js-cabecalho'); // getElementByID


//QuerySelector
const rodape = document.querySelector('.rodape'); // seleciona o primeiro elemento com a classe rodape
const menu = document.querySelector('#menu'); // using ID
const ultimoItem = document.querySelector('ul li:last-child'); // choosing same as CSS
const primeiraLista = document.querySelector('ul'); // first list
const itemMenu = primeiraLista.querySelector('li'); // selecting from primeiraLista (li)


// QuerySelectorAll
const alldropdowns = document.querySelectorAll('.dropdown'); // return as an array (list)
console.log(alldropdowns[1]); // retorna o segundo elemento com a classe dropdown
alldropdowns.forEach(function(item, index){ // go through an array (item, index)
  console.log(item, index);
})


// forEach
const alldropdown = document.querySelectorAll('.dropdown');
alldropdown.forEach(function(item, index, array){ // forEach
    console.log(item); // Item atual do loop
    console.log(index); // O numero do index
    console.log(array); // Array completo
})

alldropdown.forEach(function(item, index, array){
    item.addEventListener('click', function(){ // evento que mapeia o click (nesse caso posso mudar a cor apos o clique em cada botao)
        console.log('Estou clicando no item' + index)
    })
})


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


// Class
const titulos = document.querySelector('h1');

titulos.classList; // lista de classes do elemento
titulos.classList.add('ativo'); // add class
titulos.classList.remove('ativo'); // remove class
titulos.classList.toggle('ativo'); // add/remove class de acordo com condition (pode ser click)
titulos.classList.contains('ativo'); // true ou false
console.log(titulos.classList.contains('ativo')); // true ou false (if condition to see if exists or not)
titulos.classList.replace('ativo', 'inativo'); // troca uma classe pela outra

console.log(titulos)

// getAttribute 
const image = document.querySelector('img');
console.log(image.getAttribute('src')); // pegar atributo src da imagem 

// setAttribute
//console.log(image.setAttribute('src', '/caminho-da-imagem')); // colocar um atributo na imagem

// Change password to view/not
const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click', () => { // no clique a funcao vai ser executada
    if(input.getAttribute('type') === 'password'){
        input.setAttribute('type', 'text')
    }
    else{
        input.setAttribute('type', 'password')
    }
})


// OuterHTML, InnerHTML and innerText
const title = document.querySelector('.titulo');

console.log(title.outerHTML); // todo html do elemento
console.log(title.innerHTML); // html interno
console.log(title.innerText); // texto, sem tags

title.innerText = '<h1>Novo Titulo </h1>'; // A tag  vai como texto
title.innerHTML = '<h1>New title </h1>';


// Events
// addEventListener = adiciona uma funcao a um elemento. Sera ativada no elemento definido.
const botao = document.querySelectorAll('button');

botao.addEventListener('click', () => {
    console.log('clicou no botao')
})


// Using ForEach
function clickBotao(event){
    console.log(event.type);
    console.log(this); 
}
botao.forEach(item => {
    item.addEventListener('click', clickBotao)
})


// Separating the callback function
function eventoDeClicar(){
    console.log('Clicou no botao')
}
botao.addEventListener('click', eventoDeClicar); // calling the function here


// Event
function eventoDeClicar1(event){ // event: retorna todos atributos e metodos do evento que aconteceu (click) no caso acima
    //Elemento que foi clicado
    console.log(event.currentTarget); // qual elemento esta clicando
    console.log(event.target); // aonde foi clicado
    console.log(event.type); // tipo do evento
    console.log(event.path); // caminho do elemento
}


// Prevent.Default() Concept
function eventoDeClicar2(event){ // previne o comportamento padrao do evento no browser (por exemplo: se voce for fazer link de ancora para uma secao no site (tem que usar tag link) porem a pagina ira atualizar, e nao executara o javascript - prevenir de nao atualizar a pagina)
    event.preventDefault(); // prevenir o comportamento padrao do elemento
    console.log(event.currentTarget.href);
}
function callBack(event){
    console.log(event.type);
}


// Types of events
button.addEventListener('click', callBack); // clique
button.addEventListener('mouseenter', callBack); // enter the section 
button.addEventListener('mouseleave', callBack); // leave the section
button.addEventListener('keydown', callBack); // apertar tecla do teclado
// window.resize 


const buttons = document.querySelector('a'); // variable
function eventoCallback(event){ // Function to return something accordingly to the event
    event.preventDefault();
    console.log(event.type);
}
buttons.addEventListener('mouseenter', eventoCallback) // EVENTO (acao, chamada do callback function)\


// Exercise: change color when click on button
const btn = document.querySelectorAll('button');
function changeColor(event){
    this.classList.toggle('ativo');
}
btn.forEach(item => {
    item.addEventListener('click', changeColor); // pegou item e adicionou evento nele
})

// Convert method for string
parseInt();
parseFloat();


// Transversing in JS 
const titulo = document.querySelect('.titulo');
titulo.parentElement; // pai deste elemento
titulo.parentElement.parentElement; // pai do pai 
titulo.previousElementSibling; // elemento anterior
titulo.nextElementSibling; // proximo elemento

// Manipulando elementos
const item01 = document.querySelector('.item-01');
const txtTitulo = document.querySelect('.titulo');

// move o elemento para o final do item 01
item01.appendChild(item02);

// remove o titulo do item01
item01.removeChild(txtTitulo);

// Criando a estrutura dos elementos em JS
const areaDeTitulos = document.querySelector('.area-titulos');
const novoTitulo = document.createElement('h1');

novoTitulo.innerText = 'Novo Titulo'; // inserir inner text
novoTitulo.classList.add('titulo-novo'); // adiciona a class titulo novo
areaDeTitulos.appendChild(novoTitulo); // coloca esse elemento na div area-titulos

// setTimeout and setInterval

//atrasar alguma coisa no JS (delay)
setTimeout(() => {
    console.log('Executar setTimeout');
}, 3000) // 3000 = in mileseconds

// executar a funcao em um intervalo de tempo 
setInterval(() => {

}, 1000) // mil mileseconds

// Number(string) = convert string to number

// Local Storage
localStorage.setItem('Categoria', 'Caminhoes');

console.log(localStorage.getItem('Categoria'));