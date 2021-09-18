let nombre = prompt("Ingresá tu nombre y apellido");
alert("¡Hola "+ nombre + "!");
let edad = Number(prompt("Ingresá tu edad"));
let jubilacion = 65
let resultado = jubilacion - edad;

if(edad<65){
            alert( nombre + ", te faltan " + resultado + " años para jubilarte.");
}
else{
            alert(nombre + " ya deberías estar jubilado hace " + -(resultado) + " años.");
}