calcularFactorial = () => {

    let fact= document.getElementsByClassName("facto")[0].value;
    let fact2= parseInt(fact);
    let calcular = 1;

    if(fact2 <= 0 || isNaN(fact2)){
        return alert("Cadena no valida");
    }
    else{
    
    for (let f=1; f<=fact2; f++){
            calcular = calcular * f;
    
        }
    }
    return alert(calcular);
}