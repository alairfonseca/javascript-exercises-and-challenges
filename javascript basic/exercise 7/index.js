const JANEIRO = 0;
const DIA_PRIMEIRO = 1;
const DOMINGO = 0;

encontraPrimeiroDomingoUm();

function encontraPrimeiroDomingoUm() {
    for (let i = 2014; i <= 2050; i++) {

      let data = new Date(i, JANEIRO, DIA_PRIMEIRO);

      if (data.getDay() == DOMINGO) {
        console.log(i);
      }

    }
}
