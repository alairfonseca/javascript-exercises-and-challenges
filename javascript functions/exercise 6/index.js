
function maiorPalavra(id) {

  let texto = document.getElementById(id).value;

  texto = texto.split(' ');

  let retorno = '';

  for (var i = 0; i < texto.length; i++) {
    if (texto[i].length > retorno.length)
      retorno = texto[i];
      console.log(retorno);
  }

  document.getElementById('resultado').innerHTML = retorno;

}
