function validaTemperatura() {
    if (document.getElementById("valor").value.length < 1) {
        alert("Por favor, preencha o campo Temperatura");
        document.getElementById("valor").focus();
        exit();
    }
}

function Celsius() {
    validaTemperatura();

    var valorEl = parseFloat(document.getElementById("valor").value);
    var formulaF = (valorEl * (9 / 5) + 32);
    var formulaK = (valorEl + 273.15);


    var elementConvertido = document.getElementById("valorConvertido");
    var fahrenheit = "A conversão de " + valorEl + "°C para Fahrenheit é " + formulaF.toFixed(2) + "°F";
    var kelvin = "A conversão de " + valorEl + "°C para Kelvin é " + formulaK.toFixed(2) + "°K";
    elementConvertido.innerHTML = fahrenheit + "<br>" + kelvin;
}

function Fahrenheit() {
    validaTemperatura();

    var valorEl = parseFloat(document.getElementById("valor").value);
    var formulaC = (valorEl - 32) * (5 / 9);
    var formulaK = (valorEl - 32) * (5 / 9) + 273.15;


    var elementConvertido = document.getElementById("valorConvertido");
    var fahrenheit = "A conversão de " + valorEl + "°F para Celsius é " + formulaC.toFixed(2) + "°C";
    var kelvin = "A conversão de " + valorEl + "°F para Kelvin é " + formulaK.toFixed(2) + "°K";
    elementConvertido.innerHTML = fahrenheit + "<br>" + kelvin;
}

function kelvin() {
    validaTemperatura();

    var valorEl = parseFloat(document.getElementById("valor").value);
    var formulaC = (valorEl - 273.15);
    var formulaF = (valorEl - 273.15) * (9 / 5) + 32;


    var elementConvertido = document.getElementById("valorConvertido");
    var fahrenheit = "A conversão de " + valorEl + "°K para Celsius é " + formulaC.toFixed(2) + "°C";
    var kelvin = "A conversão de " + valorEl + "°K para Fahrenheit é " + formulaF.toFixed(2) + "°F";
    elementConvertido.innerHTML = fahrenheit + "<br>" + kelvin;
}