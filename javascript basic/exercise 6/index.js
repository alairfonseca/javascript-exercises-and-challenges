let ano =  window.prompt("Informe um ano : ");

console.log(isAnoBissexto(ano));

function isAnoBissexto(ano) {
  let retorno = false;

  if (ano % 4 == 0) {
    if (ano % 100 ==0) {
      if (no % 400 == 0) {
        retorno = true;
      }
    } else {
      retorno = true;
    }
  }

  return retorno;
}
