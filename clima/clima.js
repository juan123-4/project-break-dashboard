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
    divclima.innerHTML = `
        <div>
        <ul>

            <li>País: ${pais}</li>
            <li>Ciudad: ${ciudad}</li>
            <img src="${imagen}" alt="${ciudad}" class="imagen-pokemon">
            <li>${condiciones}</li>
            
            <li>Temperatura: ${grados} <img src="https://st5.depositphotos.com/24479230/65121/v/450/depositphotos_651213404-stock-illustration-fever-temperature-symbol-sign-vector.jpg"> °C </li> 
            <li>Viento: ${viento} kph</li>
            <li>Humedad: ${humedad} %</li>
            <li>precipitaciones: ${precipitacion} %</li>

                <div>
                <li>${horacero}</li>
                <li>${gradoscero}</li>
                 <li><img src="${imagencero}"></li>
                </div>
                
                <div>
                <li>${horauno}</li>
                <li>${gradosuno}</li>
                 <li><img src="${imagenuno}"></li>
                </div>

                
                <div>
                <li>${horados}</li>
                <li>${gradosdos}</li>
                 <li><img src="${imagendos}"></li>
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
