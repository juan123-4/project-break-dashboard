
//clima
const clima = document.getElementById("clima");

async function obtenerclima() {
    const traer = await fetch("https://api.weatherapi.com/v1/forecast.json?key=9ddc5921b97f46ec930163658240512&q=Madrid&aqi=no");
    const devolver = await traer.json();
    return devolver;
}

function mostrarclima(devolver) {
    clima.innerHTML = "";  
    
    const divclima = document.createElement('div');
    divclima.classList.add('clima');
    const imagen=devolver.current.condition.icon
    const condiciones=devolver.current.condition.text;
    const pais = devolver.location.country;
    const ciudad = devolver.location.name;
    const grados = devolver.current.temp_c;
    const viento = devolver.current.wind_kph;
    const humedad = devolver.current.humidity;
    const precipitacion = devolver.current.precip_mm;
    
    
    const cero=devolver.forecast.forecastday[0].hour[0].time;
    const horacero = cero.split(" ")[1];
    const gradoscero = devolver.forecast.forecastday[0].hour[0].temp_c;
    const imagencero = devolver.forecast.forecastday[0].hour[0].condition.icon;

    const uno=devolver.forecast.forecastday[0].hour[1].time;
    const horauno = uno.split(" ")[1];
    const gradosuno = devolver.forecast.forecastday[0].hour[1].temp_c;
    const imagenuno = devolver.forecast.forecastday[0].hour[1].condition.icon;
    
    const dos=devolver.forecast.forecastday[0].hour[2].time;
    const horados = dos.split(" ")[1];
    const gradosdos = devolver.forecast.forecastday[0].hour[2].temp_c;
    const imagendos = devolver.forecast.forecastday[0].hour[2].condition.icon;

    const tres=devolver.forecast.forecastday[0].hour[3].time;
    const horatres = tres.split(" ")[1];
    const gradostres = devolver.forecast.forecastday[0].hour[3].temp_c;
    const imagentres = devolver.forecast.forecastday[0].hour[3].condition.icon;

    const cuatro=devolver.forecast.forecastday[0].hour[4].time;
    const horacuatro = cuatro.split(" ")[1];
    const gradoscuatro = devolver.forecast.forecastday[0].hour[4].temp_c;
    const imagencuatro = devolver.forecast.forecastday[0].hour[4].condition.icon;

    const cinco=devolver.forecast.forecastday[0].hour[5].time;
    const horacinco = cinco.split(" ")[1];
    const gradoscinco = devolver.forecast.forecastday[0].hour[5].temp_c;
    const imagencinco = devolver.forecast.forecastday[0].hour[5].condition.icon;

    const seis=devolver.forecast.forecastday[0].hour[6].time;
    const horaseis = seis.split(" ")[1];
    const gradosseis = devolver.forecast.forecastday[0].hour[6].temp_c;
    const imagenseis = devolver.forecast.forecastday[0].hour[6].condition.icon;

    const siete=devolver.forecast.forecastday[0].hour[7].time;
    const horasiete = siete.split(" ")[1];
    const gradossiete = devolver.forecast.forecastday[0].hour[7].temp_c;
    const imagensiete = devolver.forecast.forecastday[0].hour[7].condition.icon;

    const ocho=devolver.forecast.forecastday[0].hour[8].time;
    const horaocho = ocho.split(" ")[1];
    const gradosocho = devolver.forecast.forecastday[0].hour[8].temp_c;
    const imagenocho = devolver.forecast.forecastday[0].hour[8].condition.icon;

    const nueve=devolver.forecast.forecastday[0].hour[9].time;
    const horanueve = nueve.split(" ")[1];
    const gradosnueve = devolver.forecast.forecastday[0].hour[9].temp_c;
    const imagenueve = devolver.forecast.forecastday[0].hour[9].condition.icon;

    const diez=devolver.forecast.forecastday[0].hour[10].time;
    const horadiez = diez.split(" ")[1];
    const gradosdiez = devolver.forecast.forecastday[0].hour[10].temp_c;
    const imagendiez = devolver.forecast.forecastday[0].hour[10].condition.icon;

    const once=devolver.forecast.forecastday[0].hour[11].time;
    const horaonce = once.split(" ")[1];
    const gradosonce = devolver.forecast.forecastday[0].hour[11].temp_c;
    const imagenonce = devolver.forecast.forecastday[0].hour[11].condition.icon;

    const doce=devolver.forecast.forecastday[0].hour[12].time;
    const horadoce= doce.split(" ")[1];
    const gradosdoce = devolver.forecast.forecastday[0].hour[12].temp_c;
    const imagendoce = devolver.forecast.forecastday[0].hour[12].condition.icon;
    
    const trece=devolver.forecast.forecastday[0].hour[13].time;
    const horatrece = trece.split(" ")[1];
    const gradostrece = devolver.forecast.forecastday[0].hour[13].temp_c;
    const imagentrece = devolver.forecast.forecastday[0].hour[13].condition.icon;

    const catorce=devolver.forecast.forecastday[0].hour[14].time;
    const horacatorce= catorce.split(" ")[1];
    const gradoscatorce = devolver.forecast.forecastday[0].hour[14].temp_c;
    const imagencatorce = devolver.forecast.forecastday[0].hour[14].condition.icon;

    const quince=devolver.forecast.forecastday[0].hour[15].time;
    const horaquince = quince.split(" ")[1];
    const gradosquince = devolver.forecast.forecastday[0].hour[15].temp_c;
    const imagenquince = devolver.forecast.forecastday[0].hour[15].condition.icon;

    const diezciseis=devolver.forecast.forecastday[0].hour[16].time;
    const horadieciseis = diezciseis.split(" ")[1];
    const gradosdieciseis = devolver.forecast.forecastday[0].hour[16].temp_c;
    const imagendieciseis = devolver.forecast.forecastday[0].hour[16].condition.icon;

    const diezcisiete=devolver.forecast.forecastday[0].hour[17].time;
    const horadiezcisiete = diezcisiete.split(" ")[1];
    const gradosdiezcisiete = devolver.forecast.forecastday[0].hour[17].temp_c;
    const imagendiezcisiete = devolver.forecast.forecastday[0].hour[17].condition.icon;

    const diezciocho=devolver.forecast.forecastday[0].hour[18].time;
    const horadiezciocho = diezciocho.split(" ")[1];
    const gradosdiezciocho = devolver.forecast.forecastday[0].hour[18].temp_c;
    const imagendiezciocho = devolver.forecast.forecastday[0].hour[18].condition.icon;

    const diezcinueve=devolver.forecast.forecastday[0].hour[19].time;
    const horadiezcinueve = diezcinueve.split(" ")[1];
    const gradodiezcinueve = devolver.forecast.forecastday[0].hour[19].temp_c;
    const imagendiezcinueve = devolver.forecast.forecastday[0].hour[19].condition.icon;

    const veinte=devolver.forecast.forecastday[0].hour[20].time;
    const horaveinte = veinte.split(" ")[1];
    const gradosveinte = devolver.forecast.forecastday[0].hour[20].temp_c;
    const imagenveinte = devolver.forecast.forecastday[0].hour[20].condition.icon;

    const veintiuno=devolver.forecast.forecastday[0].hour[21].time;
    const horaveintiuno = veintiuno.split(" ")[1];
    const gradosveintiuno = devolver.forecast.forecastday[0].hour[21].temp_c;
    const imageveintiuno = devolver.forecast.forecastday[0].hour[21].condition.icon;

    const ventidos=devolver.forecast.forecastday[0].hour[22].time;
    const horaveintidos = ventidos.split(" ")[1];
    const gradosveintidos = devolver.forecast.forecastday[0].hour[22].temp_c;
    const imageveintidos = devolver.forecast.forecastday[0].hour[22].condition.icon;
    
    const veintitres=devolver.forecast.forecastday[0].hour[23].time;
    const horaveintitres = veintitres.split(" ")[1];
    const gradosveintitres = devolver.forecast.forecastday[0].hour[23].temp_c;
    const imagenveintitres= devolver.forecast.forecastday[0].hour[23].condition.icon;


    divclima.innerHTML = `
        <div class="generalone">
        <ul>
            <div class="pegado">
            <div class="ciudad">
            <li class="blanco">${ciudad}/${pais}</li>
            <li class="amarillo">${condiciones}</li>
            
            </div>
            
            <div class="losdos">
            <div class="grados">
            <img src="${imagen}" alt="${ciudad}" class="imagen-clima">
            <li class="texto"><span id="textop">${grados}</span> <img src='/clima/img/termometro.png' class="imagentemp"> </li> 
            </div>
            
            <div class="predicciones">
            <li>precipitaciones: ${precipitacion} %</li>
            <li>Humedad: ${humedad} %</li>
            <li>Viento: ${viento} Km/h</li>
            
            
            </div>
            
            </div>
            </div>
            
            <div class="horas">
            
                <div>
                <li>${horacero}</li>
                <img src="${imagencero}">
                <li>${gradoscero}°C</li>
                </div>
                
                <div>
                <li>${horauno}</li>
                <img src="${imagenuno}">
                <li>${gradosuno}°C</li>
                </div>

                
                <div>
                <li>${horados}</li>
                <img src="${imagendos}">
                <li>${gradosdos}°C</li>
                </div>

                <div>
                <li>${horatres}</li>
                <img src="${imagentres}">
                <li>${gradostres}°C</li>
                </div>

                <div>
                <li>${horacuatro}</li>
                <img src="${imagencuatro}">
                <li>${gradoscuatro}°C</li>
                </div>

                <div>
                <li>${horacinco}</li>
                <img src="${imagencinco}">
                <li>${gradoscinco}°C</li>
                </div>


                <div>
                <li>${horaseis}</li>
                <img src="${imagenseis}">
                <li>${gradosseis}°C</li>
                </div>

                <div>
                <li>${horasiete}</li>
               <img src="${imagensiete}">
                <li>${gradossiete}°C</li>
                </div>

                <div>
                <li>${horaocho}</li>
                <img src="${imagenocho}">
                <li>${gradosocho}°C</li>
                </div>

                <div>
                <li>${horanueve}</li>
                <img src="${imagenueve}">
                <li>${gradosnueve}°C</li>
                </div>

                <div>
                <li>${horadiez}</li>
                <img src="${imagendiez}">
                <li>${gradosdiez}°C</li>
                </div>

                <div>
                <li>${horaonce}</li>
                <img src="${imagenonce}">
                <li>${gradosonce}°C</li>
                </div>

                <div>
                <li>${horadoce}</li>
                <img src="${imagendoce}">
                <li>${gradosdoce}°C</li>
                </div>

                <div>
                <li>${horatrece}</li>
                <img src="${imagentrece}">
                <li>${gradostrece}°C</li>
                </div>


                <div>
                <li>${horacatorce}</li>
                <img src="${imagencatorce}">
                <li>${gradoscatorce}°C</li>
                </div>

                <div>
                <li>${horaquince}</li>
                <img src="${imagenquince}">
                <li>${gradosquince}°C</li>
                </div>

                <div>
                <li>${horadieciseis}</li>
                <img src="${imagendieciseis}">
                <li>${gradosdieciseis}°C</li>
                </div>

                <div>
                <li>${horadiezcisiete}</li>
                <img src="${imagendiezcisiete}">
                <li>${gradosdiezcisiete}°C</li>
                </div>

                <div>
                <li>${horadiezciocho}</li>
                <img src="${imagendiezciocho}">
                <li>${gradosdiezciocho}°C</li>
                </div>

                <div>
                <li>${horadiezcinueve}</li>
                <img src="${imagendiezcinueve}">
                <li>${gradodiezcinueve}°C</li>
                </div>

                <div>
                <li>${horaveinte}</li>
                <img src="${imagenveinte}">
                <li>${gradosveinte}°C</li>
                </div>

                <div>
                <li>${horaveintiuno}</li>
                <img src="${imageveintiuno}">
                <li>${gradosveintiuno}°C</li>
                </div>

                <div>
                <li>${horaveintidos}</li>
                <img src="${imageveintidos}">
                <li>${gradosveintidos}°C</li>
                </div>

                <div>
                <li>${horaveintitres}</li>
                <img src="${imagenveintitres}">
                <li>${gradosveintitres}°C</li>
                </div>

            </div>
        </ul>
        </div>
    `;
    
    clima.appendChild(divclima);  
}

(async () => {
    const devolver = await obtenerclima();
    mostrarclima(devolver);
})();

const imagenes = [
    '/clima/img/1.jpg',
    '/clima/img/2.jpg',
    "/clima/img/3.jpeg",
    '/clima/img/4.jpg',
    '/clima/img/5.jpg',
    '/clima/img/6.jpg',
    '/clima/img/7.jpeg',
    '/clima/img/8.jpg',
    '/clima/img/9.jpg',
    '/clima/img/10.jpg',];

function mostrarImagenAleatoria() 
{const indiceAleatorio = Math.floor(Math.random() * imagenes.length);
const imagenAleatoria = imagenes[indiceAleatorio];
document.body.style.backgroundImage =`url(${imagenAleatoria})`;
}
        
setInterval(mostrarImagenAleatoria, 5000);
mostrarImagenAleatoria();



//contraseña
const eleccion = document.getElementById("eleccion");
const boton = document.getElementById("boton");
const contenedor = document.getElementById("contenedor");

const letras = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ", 
    "abcdefghijklmnopqrstuvwxyz", 
    "0123456789", 
    "!@#$%^&*()-_=+" 
];


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


boton.addEventListener("click", generarContraseña);

// enlace
const nombre = document.getElementById("nombre");
const enlace = document.getElementById("enlace");
const botonone= document.getElementById("botonone");
const contenedorone = document.getElementById("contenedorone");

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
    contenedorone.innerHTML = '';

    enlacesGuardados.forEach((enlaceObj, index) => {
        const Divenlace = document.createElement("div");
        Divenlace.classList.add("contenedorEnlace")
        Divenlace.innerHTML = `
            <span class="close" data-index="${index}">&times;</span>
            <a  class="espacio" href="${enlaceObj.url}" target="_blank">${enlaceObj.texto}</a>
        `;
        
        contenedorone.appendChild(Divenlace);
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
botonone.addEventListener("click", mostrarnombre);

// reloj

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

setInterval(hora, 1000);
hora();
mostrarfecha();

