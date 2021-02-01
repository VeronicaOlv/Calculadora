let objeto = {
    name: 'Julio',
    apellido: 'Moreno',
    color: 'Rojo',
    cumple: 'Agosto'
}

objeto.hobbie = 'Bike';

for(let property in objeto){
   // console.log(objeto[property])
}

let persona ={}
let a = ['Veronica', 29];
let a1=0;

/*for(let p in persona){
    console.log(persona[p]=a[a1])
    a1++;
}*/

a.forEach(function(po,i){
    switch (i) {
        case 0:
            console.log(persona.name=po);
            break;
        case 1:
            console.log(persona.edad=po);
            break;
    }
    
})

console.log(persona);

