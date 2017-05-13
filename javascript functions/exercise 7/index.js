
var vogais = "aeiouAEIOU";

function contarVogais(id) {

  let texto = document.getElementById(id).value;

  texto = texto.split('',);

  let contador = 0;

  for (var i = 0; i < texto.length; i++) {
    if (vogais.search(texto[i]) != -1)
      contador++;
  }

  document.getElementById('resultado').innerHTML = 'Foram encontradas ' + contador
                                                    + ' vogais.';
}
