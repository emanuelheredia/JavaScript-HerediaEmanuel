// Programa que otorga turnos e indica en pantalla nombre del cliente y el horario asignado  

let horarioApertura = 9;
let horarioCierre = 18;
let horario;

for(horario=horarioApertura;horario>=horarioApertura&&horario<horarioCierre;horario++){
    //Se saltea el horario de las 13hs y el de las 14hs porque el local reabre a las 15hs
    if(horario==13 || horario==14){
        continue;
    }
    let cliente = prompt("Ingrese su nombre para reservar un turno");
    console.log (`${cliente}, se le asignó el turno de las ${horario}hs.`);
    reserva = window.confirm(`${cliente} desea confirmarlo?`);
    
    //A continuación si el cliente confirma el turno se le muestra en consola la confirmación, caso contrario
    //se libera el horario para el siguiente cliente
    if(reserva==true){
        console.log (`${cliente}, su turno a las ${horario}hs quedó reservado.`);
    }
    else{
        horario--;
    }
}
console.log(`Lo siento, no tenemos más turnos para el día de la fecha. Consulte mañana nuevamente`);



