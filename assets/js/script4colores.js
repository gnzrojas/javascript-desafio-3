/*REQUERIMIENTO 3: 4_COLORES*/
/*CAMBIAR COLOR A NEGRO*/

const divAzul = document.getElementById('azul')
const divRojo = document.getElementById('rojo')
const divVerde = document.getElementById('verde')
const divAmarillo = document.getElementById('amarillo')

const colorNegro = function (colorDiv, color) {
    colorDiv.addEventListener('click', () => {
        colorDiv.style.backgroundColor = color
    })
}
colorNegro(divAzul, 'black')
colorNegro(divRojo, 'black')
colorNegro(divVerde, 'black')
colorNegro(divAmarillo, 'black')

/*CAMBIAR COLOR PRESIONANDO A,S,D*/

const divKey = document.getElementById('key')

document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        divKey.style.backgroundColor = 'pink'
    }
    else if (event.key === 's') {
        divKey.style.backgroundColor = 'orange'
    }

    else if (event.key === 'd') {
        divKey.style.backgroundColor = 'skyBlue'
    }
})

/*AGREGAR DIV PRESIONANDO Q,W,E*/

const createDiv = function (tecla, color) {
    document.addEventListener('keydown', (event) => {
        let colorNewDiv = false

        if (event.key === tecla) {
            colorNewDiv = color
        }

        if (colorNewDiv) {
            const newDiv = document.createElement('div')
            newDiv.style.width = '200px'
            newDiv.style.height = '200px'
            newDiv.style.backgroundColor = colorNewDiv
            newDiv.style.margin = '10px'
            document.body.appendChild(newDiv)
        }

    })
}

createDiv('q', 'purple')
createDiv('w', 'grey')
createDiv('e', 'brown')