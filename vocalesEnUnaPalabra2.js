let voc=['A','E','I','O','U','a','e','i','o','u']
function vocales(palabra) {
    let cadena = palabra.split("", palabra.length);
    let c = 0;
    cadena.forEach(function (elemento) {
      elemento.find(voc) ? c=c+1 : "";
    });
    console.log("Hay " + c + " vocales en la palabra --> " + palabra);
  }
  
  vocales("Julio Moreno");
  