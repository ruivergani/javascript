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
    - Array Constructor: Array()
2. Chapter:
  - Basic concepts such as variables, operators script
3. Chapter:
  - Functions | Objects | Methods
  - Argument (variables) vs Parameters (values)
  - Functions without name are called anonymous
  - Variable Scope (local and global variables), global variables consume more memory than local variables
  - Creating Objects using Constructors
  - This keyword is used 
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
    .finally(() => { // happens after all the code is done
        console.log('finalizado...')
    })

// Using Github API
fetch("https://api.github.com/users/ruivergani")
.then((response) =>
  console.log(response)
);

// Using Axios
import axios from "axios";
axios.get('/users')
  .then(res => {
    console.log(res.data);
});

import axios from "axios";
axios
   .get('https://api.github.com/users/ruivergani') //promise pending
   .then(response => { // response
     console.log(response.data)
   })
   .catch(error => console.log(error)) //erros


import axios from "axios";
Promise.all([ // using promise.all
    axios.get('https://api.github.com/users/ruivergani')
])
.then(responses => {
    console.log(responses[0].data.login)
})

// Using Async - Await concept
const promessa1 = new Promise((resolve, reject) => { // saber se vai ser resolvida ou rejeitada
    return resolve('ok')
  })
  async function start(){ // same code as the function below
    try{
      const result = await promessa // espera pela promessa
      console.log(result)
    }
    catch (e){ //error
      console.log(e)
    }
    finally{
      console.log('rodar sempre')
    }
  }
  start()
  // promessa
  //     .then(result => { // for the resolve
  //         console.log(result)
  //     })
  //     .catch(error => { // for the reject
  //         console.log(error)
  //     })
  //     .finally(() => { // happens after all the code is done
  //         console.log('finalizado...')
  //     })

  // Using Async - Await with Fetch
  async function start(){ // same code as the function below
    const response = await fetch('https://api.github.com/users/ruivergani')
    const user = await response.json()
  
    const reposResponse = await fetch(user.repos_url)
    const repos = await reposResponse.json()
    console.log(repos)
  
  }




