/*ESTE ES UN PROGRAMA QUE OTORGA TURNOS A USUARIOS DE ACUERDO A LA CANTIDAD QUE PREVIAMENTE DEFINE EL ADMINISTRADOR, CON SUS RESPECTIVOS HORARIOS. A MEDIDA QUE SE RESERVN TURNOS,DESAPARECEN DE LA DISPONIBILIDAD*/


//ADMINISTRADOR INGRESA CANTIDAD DE TURNOS A OTORGAR EN EL DÍA
cantidadDeTurnos=Number(prompt(`Administrador ingresá la cantidad de turnos que otorgaras hoy`));
const turnos=[];
const turno=[];

//CREACION DE ARRAY Y ASIGNACION DE ELEMENTOS SEGUN HORARIOS QUE INGRESA EL ADMINISTRADOR
for (let i=0; i<cantidadDeTurnos; i++){
    let hora = Number(prompt(`Ingresá el horario del turno ${i+1}`));
    turno[i]={horario:hora,disponible:true};
    turnos.push(turno[i]);
}
console.log(turnos);

//BUCLE INTERACTIVO CON EL USUARIO BRINDANDOLE LOS TURNOS DISPONIBLES PARA SU RESERVA
let contador=0;
do{
    const turnosLibres=[];
    console.log(turnos);

    //RECORRIDO DEL ARRAY, VERIFICANDO DISPONIBILIDAD DE TURNOS EN CADA VUELTA
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

            //VERIFICANDO SI EL HORARIO QUE ELIGIÓ EL USUARIO ESTÁ DISPONIBLE
            let reservaTurno = turnosLibres.find(elemento => elemento == reserva);
                if(reservaTurno==undefined){
                    alert(`El turno que elijió está reservado o el horario se encuentra fuera del rango de atención (9 a 18hs)`)
                } else{
            //SE BUSCA EL INDICE DEL OBJETO CORRESPONDIENTE AL HORARIO ELEGIDO Y SE MODIFICA LA DISPONIBILIDAD PARA FILTRARLO EN LA PROXIA VUELTA
                        let quitarTurno= turnos.findIndex(elemento=>elemento.horario==reserva);
                        console.log(quitarTurno);
                        turnos[quitarTurno]={horario:reserva,disponible:false}
                        contador++;
                    }
            console.log(turnos);
    }while(contador<turnos.length);
alert(`Lo sentimos, no disponemos de más turnos para la fecha`);