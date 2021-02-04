function vocales(palabra) {
  let p = palabra.toLowerCase();
  let cadena = p.split("", palabra.length);
  let c = 0;
  cadena.forEach(function (elemento) {
    if (
      elemento.includes("a") ||
      elemento.includes("e") ||
      elemento.includes("i") ||
      elemento.includes("o") ||
      elemento.includes("u")
    )
      c = c + 1;
  });
  console.log("Hay " + c + " vocales en la palabra --> " + palabra);
}

vocales("Vero 8767577");
