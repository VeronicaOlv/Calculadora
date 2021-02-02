let r;
let resultado = [];
let numeros = [2, 3, 4, 5, 67, 890, 2, 4, 5, 6, 10, 3, 90];

function nuevoArr(n1, n2) {
  numeros.forEach(function (elemento2) {
    if (elemento2 != n1 && elemento2 != n2) r = resultado.push(elemento2);
  });
}

nuevoArr(2000, 5);
console.log(resultado);
