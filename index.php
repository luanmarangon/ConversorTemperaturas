<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conversor de Temperaturas</title>
    <link rel="stylesheet" href="style.css">

</head>
<body>
<div class="container">
    <h1 class="page-title">
        Conversor de Temperaturas
    </h1>
    <p class="page-subtitle">
        Descubra as Temperaturas
    </p>
    <br><br> <br><br>
    <label for="temperatura">Insira a Temperatura</label><br>
    <input type="number" id="valor" size="2"/><br>
    <label for="moeda">Escolha a Escala da Temperatura informada:</label><br>
    <button type="submit" onclick="Celsius()">Celsius</button>
    <button type="submit" onclick="Fahrenheit ()">Fahrenheit</button>
    <button type="submit" onclick="kelvin()">kelvin</button>
    <h2 id="valorConvertido"></h2>
</div>
<a href="https://api.whatsapp.com/send?phone=5518997482397" target="_blank">
    <img src="img/Logo_WhatsApp.png" alt="" class="alura-logo">

    <script src="script.js" type="text/javascript"></script>
</body>
</html>