
// Class
const titulo = document.querySelector('h1');

titulo.classList; // lista de classes do elemento
titulo.classList.add('ativo'); // add class
titulo.classList.remove('ativo'); // remove class
titulo.classList.toggle('ativo'); // add/remove class de acordo com condition (pode ser click)
titulo.classList.contains('ativo'); // true ou false
console.log(titulo.classList.contains('ativo')); // true ou false (if condition to see if exists or not)
titulo.classList.replace('ativo', 'inativo'); // troca uma classe pela outra

console.log(titulo)
