
function segundosMenorEMaior(array) {

  array.sort((x,y) => {
    return x - y;
  });

  if (array.length > 2) {
    return "Segundo menor: " + array[1] + " " + "Segundo maior: " + array[array.length - 2];
  } else if (array.length == 2) {
    return "Segundo menor: " + array[0] + " " + "Segundo maior: " + array[1];
  } else {
    return "Segundo menor: " + array[0] + " " + "Segundo maior: " + array[0];
  }

}

function gatilho() {

  console.log(segundosMenorEMaior([1, 3, 4, 6, 2, 5]));

}
