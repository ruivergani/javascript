
// setAttribute
console.log(image.setAttribute('src', '/caminho-da-imagem')); // colocar um atributo na imagem

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
