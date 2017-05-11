var resultado = document.getElementById('resultado');

function transformaCemF(id) {
  let graus = document.getElementById(id).value;

  let grausFahrenheit = ((graus / 5) * 9) + 32;

  resultado.innerHTML = grausFahrenheit + ' °F';
}

function transformaFemC(id) {
  let graus = document.getElementById(id).value;

  let grausCelsius = ((graus - 32) / 9) * 5;

  resultado.innerHTML = grausCelsius + ' °C';
}
