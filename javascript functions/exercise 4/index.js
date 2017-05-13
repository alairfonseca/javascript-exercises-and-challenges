
function ordenarTexto(id) {

  let texto = document.getElementById(id).value;

  texto = texto.split('').sort().join('');

  document.getElementById('resultado').innerHTML = texto;
}
