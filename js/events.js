
// Events

// addEventListener = adiciona uma funcao a um elemento. Sera ativada no elemento definido.
const botao = document.querySelectorAll('button');

botao.addEventListener('click', () => {
    console.log('clicou no botao')
})

// exemplo com forEach
function clickBotao(event){
    console.log(event.type);
    console.log(this); 
}
botao.forEach(item => {
    item.addEventListener('click', clickBotao)
})

// Boa pratica separar o callback 
function eventoDeClicar(){
    console.log('Clicou no botao')
}
Button.addEventListener('click', eventoDeClicar); // calling the function here

// event
function eventoDeClicar1(event){ // event: retorna todos atributos e metodos do evento que aconteceu (click) no caso acima
    //Elemento que foi clicado
    console.log(event.currentTarget); // qual elemento esta clicando
    console.log(event.target); // aonde foi clicado
    console.log(event.type); // tipo do evento
    console.log(event.path); // caminho do elemento
}
// event.preventDefault()
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
botao.addEventListener('mouseenter', eventoCallback) // EVENTO (acao, chamada do callback function)\


// Exercise: change color when click on button
const btn = document.querySelectorAll('button');
function changeColor(event){
    this.classList.toggle('ativo');
}
btn.forEach(item => {
    item.addEventListener('click', changeColor); // pegou item e adicionou evento nele
})

// Eventos
// keyboard events
