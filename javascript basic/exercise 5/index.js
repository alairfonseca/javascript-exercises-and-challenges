function animateString(id) {
  let elemento = document.getElementById(id);
  let no = elemento.childNodes[0];
  let texto = no.data;
  console.log(no);

  let ultimaPosicao = texto.length - 1;

  setInterval(function() {
    texto = texto[ultimaPosicao] + texto.substring(0, ultimaPosicao);
    no.data = texto;
  }, 100);

  console.log(texto);
}
