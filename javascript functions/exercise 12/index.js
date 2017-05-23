
function verifica(numero) {
  let x = 0;
  for(let i = 1; i <= numero / 2; i++) {
    if (numero % i === 0)
      x += i;
  }

  if (x === numero && x != 0) {
    console.log("O número é perfeito");
  } else {
    console.log("O número não é perfeito");
  }
}
