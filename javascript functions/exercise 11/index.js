

function desenhaMatriz(id) {

  let matriz = document.getElementById(id).value;

  for (i=0; i < matriz; i++) {
    for (j=0; j < matriz; j++) {
      if (i === j) {
        console.log(' 1 ');
      } else {
          console.log(' 0 ');}
      }
    console.log('----------');
   }

 }
