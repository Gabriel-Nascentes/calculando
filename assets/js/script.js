const form = document.querySelector('#formulario');

function evento (e){
    e.preventDefault();
    const inputCelsius = e.target.querySelector('#celsius');
    const celsius = Number(inputCelsius.value);
    const celsiusToFahrenheit = getCelsiusToFahrenheit(celsius);
    const celsiusToKelvin = getCelsiusToKelvin(celsius);
    const msg = `${celsiusToFahrenheit}°F <br>${celsiusToKelvin} K`;
    setResultado(msg);
    
}
form.addEventListener('submit',evento);

function getCelsiusToKelvin (celsius){
    const kelvinByCelsius = celsius + 273.15;
    return kelvinByCelsius.toFixed(2);
}

function getCelsiusToFahrenheit(celsius){
    const fahrenheitByCelsius = (celsius * 1.8) + 32;
    return fahrenheitByCelsius.toFixed(2);
}

function criaParagrafo(){
    const p = document.createElement('p');
    return p;
}
function setResultado(msg){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaParagrafo();
    p.innerHTML = msg;
    resultado.appendChild(p);
}
