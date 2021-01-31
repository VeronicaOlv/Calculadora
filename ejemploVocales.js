const inventario = ['a','b','2'];

function esCereza(fruta) {
    return fruta === 'b';
}

console.log(inventario.find(esCereza));