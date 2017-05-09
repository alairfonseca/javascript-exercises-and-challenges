let a = 5;
let b = 6;
let c = 7;

let perimetro = (a + b + c) / 2;
let area = Math.sqrt(perimetro *((perimetro - a) * (perimetro - b) * (perimetro - c)));

console.log("A área é : " + area);
