// getAttribute 
const image = document.querySelector('img');
console.log(image.getAttribute('src')); // pegar atributo src da imagem 

// Change password to view/not
const button1 = document.querySelector('button')
const input1 = document.querySelector('input')

button.addEventListener('click', () => { // no clique a funcao vai ser executada
    if(input.getAttribute('type') === 'password'){
        input.setAttribute('type', 'text')
    }
    else{
        input.setAttribute('type', 'password')
    }
})
