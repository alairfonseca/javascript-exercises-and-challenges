function inverteNumero(idNumero) {
  let numero = document.getElementById(idNumero).value;

  numero = numero + "";

  numero = numero.split("").reverse().join("");

  document.getElementById("resultado").innerHTML = numero;
}
