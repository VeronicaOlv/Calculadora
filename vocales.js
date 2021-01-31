let p = ["b", "i", "d", "e", "e", "o", "O", "O", "e", "h"];
let r = [0, 0, 0, 0, 0, "A", "E", "I", "O", "U"];

p.forEach(function (elemento) {
  if (elemento.includes("A") || elemento.includes("a")) r[0] = r[0] + 1;
  if (elemento.includes("E") || elemento.includes("e")) r[1] = r[1] + 1;
  if (elemento.includes("I") || elemento.includes("i")) r[2] = r[2] + 1;
  if (elemento.includes("O") || elemento.includes("o")) r[3] = r[3] + 1;
  if (elemento.includes("U") || elemento.includes("u")) r[4] = r[4] + 1;
});

console.log(r);
r.forEach(function (elemento2, ind) {
  elemento2 >= 1
    ? console.log("Hay " + elemento2 + " de la vocal " + r[ind + 5])
    : "";
});
