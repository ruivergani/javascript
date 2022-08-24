// This page is about the book and concepts of JavaScript

/* 

1. Access the content of the page
2. Modify the conent of the page
3. Program rules the browser can follow
4. React to events triggered by the user or browser
5. Make use of flowcharts to design the tasks

Object {
    Properties: characteristics
    Events: interaction with objects
    Methods: things people need to do with objects
}

1. Chapter:
    - Learning using Window/Document Object
    - No need to specify what type data the variable holds
    - Naming rules: start a letter, $, _ | dont use dash or dot
    - CaseSensitive
    - Array: usually a list that you dont know how many items you need
    - Synchronous: uma tarefa e concluida apos a outra
    - Asynchronous: tarefas executadas de maneira independente
*/

// Callback functions
function imprimirDado(dado){
    console.log(dado)
}

imprimirDado(function () {
    return 'Ola Mundo'
})

// setTimeout (function, delay)
setTimeout(() => {
    console.log('Depois de 1 segundo.')
}, 1000);

const https = require('https');
const API = 'https://ruiverganineto.co.uk' // fetch
https.get(API, response => {
    console.log(response.statusCode) // if received status code should be 200
})
console.log('Conectando API')

// Promise: object javascrit com a promessa que algo sera realizado, usado para operacoes assincronas
// Pending | Fullfield | Rejected | Settled = estagios da promessa

let aceitar = true
console.log('pedir uber')
const promessa = new Promise((resolve, reject) => { // saber se vai ser resolvida ou rejeitada
    if(aceitar){
        return resolve('pedido aceito')
    }
    else{
        return reject('pedido negado')
    }
})
console.log('aguardando...')
promessa
    .then(result => { // for the resolve
        console.log(result)
    })
    .catch(error => { // for the reject
        console.log(error)
    })
    .finally(() => {
        console.log('finalizado...')
    })