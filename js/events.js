
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

el.addEventListener('blur', function() {
    checkUsername(); // function
})


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

/* Events 
1. Select the elemtent node you want the script to respond to
2. Indicate which event on the selected node will trigger the response
3. Start the code you want to run when the event occurs

HTML Event Handler Attributes : recommended not to use them
Trandional DOM event handlers: element.onevent = functionName()
Using EventListener (Actual ones)
*/

function checkUsername(e){
    var target = e.target; // get target of event
}

// Using EventListener with the Event Object
function checkLength(e, minLength){
    var el, elMsg;
    if(!e){ // If event object does not exists
        e = window.event;
    }
    el = e.target || e.srcElement; // get target of event 
    elMsg = el.nextSibling; // get its next sibling

    if(el.value.length < minLength){ // If lenght is too short set message
        elMsg.innerHTML = 'Username must be at least ' + minLength + ' characters or more ';
    } else{
        elMsg.innerHTML = '';
    }
}

var elUsername = document.getElementById('username');
if(elUsername.addEventListener){ // If event listener is supported
    elUsername.addEventListener('blur', function(e){ // On blur event
        checkLength(e,5);
    }, false);
}
else {
    elUsername.attachEvent('onblur', function(e){ // IE fallback onblur
        checkLength(e, 5); // Call checkLength function
    });
}


// Event Delegation = basically you need to reduce the amount of eventListeners to increase performance and maintainability (instead of using for each item of list you can use for the whole list itself)
