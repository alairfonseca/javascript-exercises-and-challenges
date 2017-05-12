
function verificaPalindromo(id) {

  let texto = document.getElementById(id).value;
  let textoInverso = texto.split('').reverse().join('');

  if (texto.replace(/\s/g, '') == textoInverso.replace(/\s/g, '')) {
    document.getElementById('resultado').innerHTML = 'O texto informado é um palindromo';
  } else {
    document.getElementById('resultado').innerHTML = 'O texto informado não é um palindromo';
  }

}
