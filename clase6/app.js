let horarioApertura = 9;
let horarioCierre = 18;
let horario;

const turnos=[{horario:9,disponible:true},{horario:10,disponible:true},{horario:11,disponible:true},{horario:12,disponible:true},{horario:13,disponible:true},{horario:14,disponible:true},{horario:15,disponible:true},{horario:16,disponible:true},{horario:17,disponible:true},{horario:18,disponible:true}];
console.log(turnos);

let contador=0;
do{
    const turnosLibres=[];
    console.log(turnos);
for (const turno of turnos){

        if(turno.disponible){
                turnosLibres.push(turno.horario);
                }
            else{
                continue;
            }
    }
    console.log(turnosLibres);

    alert(`Hola! Le indicamos que los turnos disponibles para el día de la fecha son ${turnosLibres} hs`)
    let reserva=Number(prompt(`Indiquenos con un numero el que desea reservar`));

    let reservaTurno = turnosLibres.find(elemento => elemento == reserva);
        if(reservaTurno==undefined){
            alert(`El turno que elijió se encuentra reservado o  el horario se encuentra fuera del rango de atención`)
        } else{
            turnos[(reserva-9)]={horario:reserva,disponible:false}
            contador++;
            }
            console.log(turnos);
        
    }while(contador<turnos.length);
    alert(`Lo sentimos, no disponemos de más turnos para la fecha`);