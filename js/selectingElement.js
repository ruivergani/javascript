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
