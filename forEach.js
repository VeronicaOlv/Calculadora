let arr = ['40', 4, 6, 8,78,28,3,23,9,29,40,1,2,2];

//Valores mayor a 6
/*arr.forEach(function (elemento) {
  if (elemento > 6) console.log(elemento);
}); */

//Valores pares
/*arr.forEach(function (elemento) {
    if ((elemento % 2)==0) console.log(elemento);
  });*/

//Valores impares
/*arr.forEach(function (elemento) {
    if ((elemento % 2)==1) console.log(elemento);
  });*/

//Valores 4, 40  
/*arr.forEach(function (elemento) {
    if (elemento === '4' || elemento===40) console.log(elemento);
  });*/

//IF ternario
arr.forEach(function(elemento){
    elemento === 2 ? console.log("Soy un dos") : console.log ("No soy"); 
})



