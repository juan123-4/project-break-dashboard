const eleccion = document.getElementById("eleccion");
const boton = document.getElementById("boton");
const contenedor = document.getElementById("contenedor");

// Array de caracteres
const letras = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Mayúsculas
    "abcdefghijklmnopqrstuvwxyz", // Minúsculas
    "0123456789", // Números
    "!@#$%^&*()-_=+" // Símbolos
];

// Función para generar la contraseña
function generarContraseña() {
    contenedor.innerHTML = "";
    const valor = parseInt(eleccion.value);
    let contraseña = "";

    for (let i = 0; i < valor; i++) {
        const tipoAleatorio = Math.floor(Math.random() * letras.length);
        const caracterAleatorio = letras[tipoAleatorio].charAt(Math.floor(Math.random() * letras[tipoAleatorio].length));
        contraseña += caracterAleatorio;
    }

    const divContraseña = document.createElement("div");
    divContraseña.classList.add("contraseña");
    divContraseña.innerHTML =`
    <h2>contraseña Generada:</h2>
    <ul>
     <li class="css">${contraseña}</li>
    </ul> `;
    contenedor.appendChild(divContraseña);
    
    
}

// Evento click para el botón
boton.addEventListener("click", generarContraseña);
const imagenes = [
    '/contraseñas/img/1.jpg',
    '/contraseñas/img/2.png',
    "/contraseñas/img/3.jpg",
    '/contraseñas/img/4.png',
    '/contraseñas/img/5.jpg',
    '/contraseñas/img/6.png',
    '/contraseñas/img/7.jpg',
    '/contraseñas/img/8.jpg',
    '/contraseñas/img/9.jpg',
    '/contraseñas/img/10.jpg',];

function mostrarImagenAleatoria() 
{const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
const imagenAleatoria = imagenes[indiceAleatorio];
document.body.style.backgroundImage =`url(${imagenAleatoria})`;
}
        
setInterval(mostrarImagenAleatoria, 5000);
mostrarImagenAleatoria();
