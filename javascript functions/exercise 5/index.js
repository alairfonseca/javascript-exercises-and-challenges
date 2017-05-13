

function maiuscula(id) {

  let texto = document.getElementById(id).value;

  texto = texto.split(' ');

  for (var i = 0; i < texto.length; i++) {
    var a = [];
    a.push(texto[i]);
    a[0] = a[0].charAt(0).toUpperCase() + a[0].slice(1);
    //console.log(a[0]);
    texto[i] = a[0];
    console.log(texto[i]);
  }

  document.getElementById('resultado').innerHTML = texto.join(' ');

}
