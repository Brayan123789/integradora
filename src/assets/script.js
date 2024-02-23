const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document .getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {

    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
    const elementos = e.target.parentElement;
    leerDatosElementos(elemento);
}

}
function leerDatosElementos(elemneto) {
    const infoElemento = {
        imgen: elemneto.querySelector('img').src,
        titulo: elemneto.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')

    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(Elemento) {

    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
     <img src="${Elemento.imgen}" width=100 />
     </td>
     <td>
        ${Elemento.titulo}
     </td>
     <td>
     ${Elemento.precio}
     </td>
     <a herf="#" class="borrar" data-id="${Elemento.id}">X </a>
</td>

`; 
 
lista.appendChild(row);
    
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
     elementoId;
    if(e.target.classList.contains('borrar')) {
        elemento.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}