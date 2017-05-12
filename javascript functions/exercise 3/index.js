
function gerarCombinacoes(id) {

  let texto = document.getElementById(id).value;

  let textoArray = texto.split('');

  let combinacoes = [];

  var posicao = 1;

  for (var i = 0; i < textoArray.length; i++) {
    while (posicao <= textoArray.length) {
      let combinacao = texto.substring(i, posicao);

      if (combinacao != "")
        combinacoes.push(combinacao);
        
      posicao++;
    }
    posicao = i + 1;
  }

  console.log(combinacoes);

}
