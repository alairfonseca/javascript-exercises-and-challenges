

function desenhaMatriz(matriz) {

  let i;
  let j;

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

function gatilho() {
  return desenhaMatriz(5);
}
