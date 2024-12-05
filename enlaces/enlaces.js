


const nombre = document.getElementById("nombre");
const enlace = document.getElementById("enlace");
const boton = document.getElementById("boton");
const contenedor = document.getElementById("contenedor");

function mostrarnombre() {
    const texto = nombre.value;
    const enlaces = enlace.value;

    let enlacesGuardados = JSON.parse(localStorage.getItem("enlacesGuardados")) || [];
    enlacesGuardados.push({ texto: texto, url: enlaces });
    localStorage.setItem("enlacesGuardados", JSON.stringify(enlacesGuardados));
    mostrarGuardados();
}

function mostrarGuardados() {
    const enlacesGuardados = JSON.parse(localStorage.getItem("enlacesGuardados")) || [];
    contenedor.innerHTML = '';

    enlacesGuardados.forEach((enlaceObj, index) => {
        const Divenlace = document.createElement("div");
        Divenlace.classList.add("contenedorEnlace")
        Divenlace.innerHTML = `
            <span class="close" data-index="${index}">&times;</span>
            <a  class="espacio" href="${enlaceObj.url}" target="_blank">${enlaceObj.texto}</a>
        `;
        
        contenedor.appendChild(Divenlace);
    });

    document.querySelectorAll('.close').forEach(span => {
        span.addEventListener('click', (event) => {
            const index = event.target.getAttribute('data-index');
            eliminarEnlace(index);
        });
    });
}

function eliminarEnlace(index) {
    let enlacesGuardados = JSON.parse(localStorage.getItem("enlacesGuardados")) || [];
    enlacesGuardados.splice(index, 1);
    localStorage.setItem("enlacesGuardados", JSON.stringify(enlacesGuardados));
    mostrarGuardados();
}

document.addEventListener("DOMContentLoaded", mostrarGuardados);
boton.addEventListener("click", mostrarnombre);


const imagenes = [
    '/enlaces/img/one.jpg',
    '/enlaces/img/two.jpg',
    "/enlaces/img/three.jpg",
    '/enlaces/img/four.png',
    '/enlaces/img/five.jpg',
    '/enlaces/img/six.png',
    '/enlaces/img/seven.jpeg',
    '/enlaces/img/eight.jpeg',
    '/enlaces/img/nine.jpeg',
    '/enlaces/img/ten.jpg',];

function mostrarImagenAleatoria() 
{const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
const imagenAleatoria = imagenes[indiceAleatorio];
document.body.style.backgroundImage =`url(${imagenAleatoria})`;
}
        
setInterval(mostrarImagenAleatoria, 5000);
