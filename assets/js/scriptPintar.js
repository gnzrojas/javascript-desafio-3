/*REQUERIMIENTO 2: CAMBIAR COLOR DE FONDO DE UN ELEMENTO HTML AL HACER CLICK*/

function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color
}

let ele = document.getElementById('ele1')

ele.addEventListener('click', () => pintar(ele, 'yellow'))

