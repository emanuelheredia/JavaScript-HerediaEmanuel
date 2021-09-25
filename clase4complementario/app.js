//Este es un programa que calcula el valor final de un númer neto y el interés según cuota que elija el usuario

//Declaración de variables Globales
let costoNeto;
let iva;
let costoFinal;
let ingresoDeCuotas;

//Función que solicita datos al usuario y brinda el mensaje de salida con el calculo hecho
function pedirDatos(){
    costoNeto = Number(prompt("Ingrese el valor Neto a calcular"));
    iva = Number(prompt("Ingrese el valor del IVA"));
    ingresoDeCuotas = Number(prompt("Ingrese la cantidad de cuotas"));
    costoFinal = precioFinal(costoNeto,iva);
    let cargoFinanciacion = interesSegunCuota(ingresoDeCuotas,costoFinal);
    
    return "El importe final abonando en contado con IVA incluido es $"+costoFinal+" y financiado en "+ingresoDeCuotas+" cuotas, el total sería de $"+cargoFinanciacion+" finales";    
}
//funcion que calcula el costo fina luego de aplicarle el IVA
const precioFinal = (costoNeto,iva)=>{
    return costoNeto+(costoNeto*(iva/100));
}

//funcion que calcula el interés correspondiente a la cuota elejida por el usuario
const interesSegunCuota = (cuotas,costoFinal) =>{
    switch(cuotas){
        case 1:
            return costoFinal*1.05;
            break;
        case 3:
            return costoFinal*1.2;
            break;
        case 6:
            return costoFinal*1.3;
            break;
        default: 
            return "La cantidad de cuotas que eligió no esta disponible";
            break;
    }
}
console.log(pedirDatos());

