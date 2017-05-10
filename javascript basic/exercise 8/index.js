let aleatorio = Math.ceil(Math.random() * 10);

console.log(aleatorio);
let chute;

perguntaNumero();

function perguntaNumero() {
    chute = window.prompt("Tente adivinhar o número: ");
    if (chute == aleatorio) {
      alert("bom trabalho!")
    } else {
      alert("voce errou, tente novamente");
      perguntaNumero();
    }
}
