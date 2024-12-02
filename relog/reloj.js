const horas = document.getElementById("horas");
const mensaje=document.getElementById("mensaje")
function hora() {
    horas.innerHTML = "";
    horas.classList.add("horas")
    const listItem = document.createElement("li");
    const d = new Date();
    
    
    const horasFormato = ("0" + d.getHours()).slice(-2);
    const minutosFormato = ("0" + d.getMinutes()).slice(-2);
    const segundosFormato = ("0" + d.getSeconds()).slice(-2);
    listItem.innerHTML = `${horasFormato}:${minutosFormato}:${segundosFormato}`;
    horas.appendChild(listItem);
    frases(horasFormato,minutosFormato)
    }
   
//    
function mostrarfecha() {
    const fecha = document.getElementById("fecha");
    fecha.innerHTML = "";
    fecha.classList.add("fecha")
    const listItem = document.createElement("li");
    const d = new Date();
    listItem.innerHTML = `${("0" + d.getDate()).slice(-2)}/${("0" + (d.getMonth() + 1)).slice(-2)}/${d.getFullYear()}`;
    fecha.appendChild(listItem);
}
function frases(horasFormato, minutosFormato) {
    if (horasFormato >= "00" && horasFormato < "07" && minutosFormato >= "00" && minutosFormato <= "59") {
        mensaje.innerHTML = "Es hora de descansar. Apaga y sigue mañana";
    } else if (horasFormato >= "07" && horasFormato < "12" && minutosFormato >= "00" && minutosFormato <= "59") {
        mensaje.innerHTML = "Buenos días, desayuna fuerte y a darle al código";
    } else if (horasFormato >= "12" && horasFormato < "14" && minutosFormato >= "00" && minutosFormato <= "59") {
        mensaje.innerHTML = "Echa un rato más pero no olvides comer";
    } else if (horasFormato >= "14" && horasFormato < "16" && minutosFormato >= "00" && minutosFormato <= "59") {
        mensaje.innerHTML = "Espero que hayas comido";
    } else if (horasFormato >= "16" && horasFormato < "18" && minutosFormato >= "00" && minutosFormato <= "59") {
        mensaje.innerHTML = "Buenas tardes, el último empujón";
    } else if (horasFormato >= "18" && horasFormato < "22" && minutosFormato >= "00" && minutosFormato <= "59") {
        mensaje.innerHTML = "Esto ya son horas extras, ... piensa en parar pronto";
    } else if ((horasFormato >= "22" && horasFormato <= "23") || (horasFormato == "00" && minutosFormato == "00")) {
        mensaje.innerHTML = "Buenas noches, es hora de pensar en parar y descansar";
    } else {
        mensaje.innerHTML = "";
    }
}

const imagenes = [
            '/relog/img/uno.jpg',
            '/relog/img/dos.jpg',
            "/relog/img/tres.jpg",
            '/relog/img/cuatro.jpg',
            '/relog/img/cinco.jpg',
            '/relog/img/seis.jpg',
            '/relog/img/siete.jpeg',
            '/relog/img/ocho.jpg',
            '/relog/img/nueve.jpg',
            '/relog/img/diez.jpg',];

        function mostrarImagenAleatoria() 
        {const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
        const imagenAleatoria = imagenes[indiceAleatorio];
        document.body.style.backgroundImage =`url(${imagenAleatoria})`;
        }

    

        
setInterval(mostrarImagenAleatoria, 5000);
setInterval(hora, 1000);
hora();
mostrarfecha();
mostrarImagenAleatoria();

