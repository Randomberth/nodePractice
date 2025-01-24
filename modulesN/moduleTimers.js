function suma(a, b) {
    c = a + b;
    console.log(c, " : setTimeout");
}

console.log("4 + 5");
setTimeout(suma, 2000, 4, 5);

/////////////////

function resta(a, b) {
    c = b - a;
    console.log(c, " : setInmediate")
}

console.log("15 menos 10'");
setImmediate(resta, 10, 15);


//////////////////////

function producto(a, b) {
    c = b * a;
    console.log(c, " : setInerval")
}

console.log("5 multiplicado por 5");
setInterval(producto, 1000, 5, 5);