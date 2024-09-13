const menu = document.querySelector('.hamburguesa')
const navegacion = document.querySelector('.navegacion')
const imagenes = document.querySelectorAll('img')
const formulario = document.querySelector('form')

const contenedorPlatillos = document.querySelector('.platillos')

const btnTodos = document.querySelector('.todos')
const btnEnsaladas = document.querySelector('.ensaladas')
const btnPastas = document.querySelector('.pasta')
const btnPizza = document.querySelector('.pizza')
const btnPostres = document.querySelector('.postres')

document.addEventListener('DOMContentLoaded', ()=>{
    eventos();
    platillos();
    formularioBeta();
})

// Menu
const eventos = () => {
    menu.addEventListener('click',abrirMenu)
}

const abrirMenu = () => {
    navegacion.classList.remove('ocultar')
    botonCerrar()
}

const botonCerrar = () => {
    const parrafo = document.createElement("p")

    const overlay = document.createElement('div')
    overlay.classList.add('pantalla-completa')

    const body = document.querySelector('body')
    body.appendChild(overlay)
   

    parrafo.textContent = "x"
    parrafo.classList.add('btn-cerrar')
    navegacion.appendChild(parrafo)

    cerrarMenu(parrafo, overlay);

}

const cerrarMenu = (boton,overlay) => {

    boton.addEventListener('click', () => {
        navegacion.classList.add('ocultar')
        overlay.remove()
        boton.remove()
    })

    overlay.onclick = function(){
        overlay.remove()
        boton.remove()
        navegacion.classList.add('ocultar')
    }

}

//Data img
const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            const imagen = entry.target
            imagen.src = imagen.dataset.src
            observer.unobserve(imagen)
        }
    })
})

imagenes.forEach((imagen) => {
    observer.observe(imagen)
})

// Filtros menu

const platillos = () =>{

    let platillosArreglo = []
    const platillos = document.querySelectorAll('.platillo')
    platillos.forEach(platillo => platillosArreglo = [...platillosArreglo, platillo])

    const ensaladas = platillosArreglo.filter(ensalada => ensalada.getAttribute('data-platillo') === 'ensalada'  )
    const pastas = platillosArreglo.filter(ensalada => ensalada.getAttribute('data-platillo') === 'pasta'  )
    const pizzas = platillosArreglo.filter(ensalada => ensalada.getAttribute('data-platillo') === 'pizza'  )
    const postres = platillosArreglo.filter(ensalada => ensalada.getAttribute('data-platillo') === 'postre'  )

    mostrarPlatillos(ensaladas,pastas,pizzas,postres, platillosArreglo)
}

const mostrarPlatillos = (ensaladas,pastas, pizzas, postres, todos) => {

    btnEnsaladas.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos)
        ensaladas.forEach(ensalada => {
            contenedorPlatillos.appendChild(ensalada)
        })
    })

    btnPastas.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos)
        pastas.forEach(pasta => {
            contenedorPlatillos.appendChild(pasta)
        })
    })

    btnPizza.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos)
        pizzas.forEach(pizza => {
            contenedorPlatillos.appendChild(pizza)
        })
    })

    btnPostres.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos)
        postres.forEach(postre => {
            contenedorPlatillos.appendChild(postre)
        })
    })

    btnTodos.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos)
        todos.forEach(platillo => {
            contenedorPlatillos.appendChild(platillo)
        })
    })

}

const limpiarHtml = (contenedorPlatillos) => {
    while(contenedorPlatillos.firstChild){
        contenedorPlatillos.removeChild(contenedorPlatillos.firstChild)
    }
}

const formularioBeta = () => {
    formulario.addEventListener('submit', (e) =>{
        e.preventDefault();

        alert("El formulario no funciona en la DEMO")

    })
}



