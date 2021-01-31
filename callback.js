function Saludo(saludo, callback){
    console.log(saludo)
    callback('Hola Vero');
};

Saludo('Hola', function(value){
    console.log(value)
})

