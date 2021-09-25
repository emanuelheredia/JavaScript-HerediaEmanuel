//ESTE ES UN PROGRAMA PARA SIMULAR EL COSTO DE UN SERVICE VEHICULAR SEGUN LA PREFERENCIA DEL USUARIO

//Inicialización de Variables Globales
let marca;
let modelo;
let año;
let service;
let confirmacionAceite;
let confirmacionFltroAceite;
let confirmacionFltroAire;
let confirmacionFltroCombustible;

//Función que solicita datos del vehículo al cliente
function solicitarDatosAuto () {
    marca = prompt("Ingrese la marca de su Vehículo");
    modelo = prompt("Ingrese el modelo");
    año = Number(prompt("Ingrese el año"));
    precioAceite = Number(costoAceite(año));
    return precioAceite;
}

//Función para calcular el costo del aceite según el modelo del auto (año)
const costoAceite = (año)=> {
    if(año<2000){
        return 2000;
    } else if(año>=2000 && año<2015){
        return 4500;
    } else if(año>=2015){
        return 6300;
    }
}
let aceite= solicitarDatosAuto();

//Función para saber si el usuario desea realizar service completo o parcial según necesidad
function tipoDeService () {
    service = window.confirm("Desea realizar el service completo cambiando todos los filtros y el aceite?");
    if(!service){
        confirmacionAceite = window.confirm("Aceite?");
        confirmacionFltroAceite = window.confirm("Filtro de Aceite?");
        confirmacionFltroAire = window.confirm("Filtro de Aire?");
        confirmacionFltroCombustible = window.confirm("Filtro de Combustible?");
        }
    return presupuesto(service,aceite,confirmacionAceite,confirmacionFltroAceite,confirmacionFltroAire,confirmacionFltroCombustible)
}

//Funcion que calcula el presupuesto total según eleccion del usuario
const presupuesto = (service,aceite,confirmacionAceite,confirmacionFltroAceite,confirmacionFltroAire,confirmacionFltroCombustible)=>{
    //Inicialización de variables locales y asignación de valor inicial
    let filtroAire=800;
    let filtroAceite=800;
    let filtroCombustible=1200;
    let sumarAceite;
    let sumarFiltroAceite;
    let sumarFiltroAire;
    let sumarFiltroCombustible;

    if(service==true){
        return aceite+(filtroAire+filtroAceite+filtroCombustible);
    }
    else{ 
        if(confirmacionAceite==true){
            sumarAceite=aceite;
        }
            else{
                sumarAceite=0;
            }
        if(confirmacionFltroAceite==true){
            sumarFiltroAceite=filtroAceite;
        }
            else{
                sumarFiltroAceite=0;
            }
        if(confirmacionFltroAire==true){
            sumarFiltroAire=filtroAire;
        }
            else{
                sumarFiltroAire=0;
            }
        if(confirmacionFltroCombustible==true){
            sumarFiltroCombustible=filtroCombustible;
        }
            else{
                sumarFiltroCombustible=0;
            }
        return sumarAceite+sumarFiltroAceite+sumarFiltroAire+sumarFiltroCombustible
    }
}
//Inicializacion y definicion de variable para imprimir alerta
let costoTotal= tipoDeService();

//Mensaje en pantalla final del presupuesto calculado
alert(`Le informamos que el service para su vehículo ${marca} ${modelo} modelo ${año} según su elección y utilizando el aceite recomendado por el fabricante, tiene un costo final de $${costoTotal}`);