
function multiplica(idUm, idDois) {

  let valorUm = document.getElementById(idUm).value;
  let valorDois = document.getElementById(idDois).value;

  let resultado = valorUm * valorDois;

  document.getElementById("resultado").innerHTML = resultado;

}

function divide(idUm, idDois) {

  let valorUm = document.getElementById(idUm).value;
  let valorDois = document.getElementById(idDois).value;

  let resultado = valorUm / valorDois;

  document.getElementById("resultado").innerHTML = resultado;

}
