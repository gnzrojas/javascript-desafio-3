/*CAMBIAR COLOR A NEGRO*/

const divAzul = document.getElementById('azul')
const divRojo = document.getElementById('rojo')
const divVerde = document.getElementById('verde')
const divAmarillo = document.getElementById('amarillo')

divAzul.addEventListener('click', () => {
    divAzul.style.backgroundColor = 'black'
})

divRojo.addEventListener('click', () => {
    divRojo.style.backgroundColor = 'black'
})

divVerde.addEventListener('click', () => {
    divVerde.style.backgroundColor = 'black'
})

divAmarillo.addEventListener('click', () => {
    divAmarillo.style.backgroundColor = 'black'
})

/*CAMBIAR COLOR PRESIONANDO A,S,D*/

const divKey = document.getElementById('key')

document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        divKey.style.backgroundColor = 'pink'
    }
    else if (event.key === 's'){
        divKey.style.backgroundColor = 'orange'
    }

    else if (event.key === 'd'){
        divKey.style.backgroundColor = 'skyBlue'
    }
})

/*AGREGAR DIV PRESIONANDO Q,W,E */
let colorNewDiv = false; 

if (event.key ==='q') {
    colorNewDiv = 'purple'
}
else if (event.key === 'w'){
    colorNewDiv = 'grey'
}
else if (event.key === 'e') {
    colorNewDiv = 'brown'
}

if (colorNewDiv) {
    const newDiv = document.createElement('div')
    newDiv.style.width = '200px'
    newDiv.style.height = '200px'
    newDiv.style.backgroundColor = newDiv
    newDiv.style.margin = '10px'
    document.body.appendChild(newDiv)
}