
function verificaPrimo(id) {

  let numero = document.getElementById(id).value;

  if (numero == 1) {
    return false;
  } else if (numero == 2){
    return true;
  } else {
    for (var i = 2; i < numero; i++) {
      if (numero % i == 0) {
        return false;
      }
    }
    return true;
  }
}

function gatilho(id) {
    document.getElementById('resultado').innerHTML = verificaPrimo(id);
}
