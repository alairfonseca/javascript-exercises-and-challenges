const DIA_NATAL = 25;
const MES_NATAL = 11;
let dia = (1000*60*60*24);

let dataAtual = new Date();

let cmas = new Date(dataAtual.getFullYear(), MES_NATAL, DIA_NATAL);

let diaAtual = dataAtual.getDay();
let mesAtual = dataAtual.getMonth();


let faltaDias = DIA_NATAL - diaAtual;
let faltaMes = MES_NATAL - mesAtual;

console.log(Math.ceil((cmas.getTime()-dataAtual.getTime()) / dia));
