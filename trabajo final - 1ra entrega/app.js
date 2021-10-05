
class Usuario {
    constructor(nombreApellido, telefono) {
        this.nombreApellido = nombreApellido;
        this.telefono = telefono;
    }
        saludar () {
            alert(`Hola ${this.nombreApellido}, un placer su visita por aquí`);
        }
}

//Solicitud de datos personales del usuario

alert(`Bienvenido al simulador de precios de Lubricentro HyH`);
const usuario1 = new Usuario ((prompt(`Por favor ingrese su Nombre y Apellido`)),(prompt(`y por último el teléfono de contacto`)));
usuario1.saludar();

//Inicialización de variables a utilizar en clase Auto, función "tipoDeService"

let confirmacionFltroAceite;
let confirmacionFltroAire;
let confirmacionFltroCombustible;
let aceitePersonalizado;

//Asignación en array de productos para selección de lubricante en la opción de personalizar el cambio de aceite
const lubricante=[  {marca:"Elaion",tipo:"sintetico",precio:6000,cod:1},
                    {marca:"Elaion",tipo:"semisintetico",precio:4000,cod:2},
                    {marca:"Elaion",tipo:"mineral",precio:2900,cod:3},
                    {marca:"Total",tipo:"sintetico",precio:6200,cod:4},
                    {marca:"Total",tipo:"semisintetico",precio:4100,cod:5},
                    {marca:"Total",tipo:"mineral",precio:3000,cod:6},
                    {marca:"Elf",tipo:"sintetico",precio:6300,cod:7},
                    {marca:"Elf",tipo:"semisintetico",precio:4250,cod:8},
                    {marca:"Elf",tipo:"mineral",precio:3100,cod:9},
]

//Clase con funcion constructora para que cada usuario ingrese los datos de su vehículo y así brindarle un presupuesto de service
class Auto {
    constructor(marca,modelo,año){
    this.marca=marca;
    this.modelo=modelo;
    this.año=año;}
    //Función para calcular el costo del aceite según el modelo del auto (año)
    costoAceite(){
        if(this.año<=2000){
            return 2000;
        } else if(this.año>2000 && this.año<2015){
            return 4500;
        } else if(this.año>=2015){
            return 6300;
        }
    }

    //Función que permite saber si el usuario desea realizar service completo o personalizado según necesidad
    tipoDeService(){
        let service = window.confirm("Desea realizar el service completo cambiando todos los filtros y el aceite recomendado por el fabricante?");
        
        //Condicionales para brindarle al usuario la posibilidad de personalizar service
        if(!service){
            alert(`Acontinuación te daremos la posibilidad de personalizar tu service`)
            let confirmacionAceite = window.confirm("Cambiarás el aceite?");
            if(confirmacionAceite){
                let elecciónRangoPrecioMax = prompt(`Elija el monto máximo que está dispuesto a pagar en el lubricante`);
                //Filtro de costo de aceite según ingreso de usuario
                const lubricantesRango = lubricante.filter(costo => costo.precio < elecciónRangoPrecioMax );
                console.table(lubricantesRango);
                if(lubricantesRango.length==0){
                    alert(`No disponemos de productos dentro de ese rango de precio`);
                }
                else{
                    let aceitePersonalizadoEleccion=Number(prompt(`Ingrese el número del codigo correspondiente al aceite que eligió de la lista`));
                    aceitePersonalizado = lubricante.findIndex(tipo => tipo.cod == aceitePersonalizadoEleccion );
                }
                confirmacionFltroAceite = window.confirm("Filtro de Aceite?");
                confirmacionFltroAire = window.confirm("Filtro de Aire?");
                confirmacionFltroCombustible = window.confirm("Filtro de Combustible?");
                return this.presupuesto(service,lubricante[aceitePersonalizado].precio,confirmacionAceite,confirmacionFltroAceite,confirmacionFltroAire,confirmacionFltroCombustible)
            } 
            else{
                confirmacionFltroAceite = window.confirm("Filtro de Aceite?");
                confirmacionFltroAire = window.confirm("Filtro de Aire?");
                confirmacionFltroCombustible = window.confirm("Filtro de Combustible?");
                return this.presupuesto(service,undefined,confirmacionAceite,confirmacionFltroAceite,confirmacionFltroAire,confirmacionFltroCombustible)
            }
        }
        else{
            return this.presupuesto(service,this.costoAceite(this.año),undefined,confirmacionFltroAceite,confirmacionFltroAire,confirmacionFltroCombustible)
        }
    }
    //Funcion que calcula el presupuesto total según eleccion del usuario
    presupuesto (service,aceite,confirmacionAceite,confirmacionFltroAceite,confirmacionFltroAire,confirmacionFltroCombustible){
        //Inicialización de variables locales y asignación de valor inicial
        let filtroAire=800;
        let filtroAceite=800;
        let filtroCombustible=1200;
        let sumarAceite;
        let sumarFiltroAceite;
        let sumarFiltroAire;
        let sumarFiltroCombustible;
        
        if(service){
            return aceite+(filtroAire+filtroAceite+filtroCombustible);
        }
        else{ 
            if(confirmacionAceite){
                sumarAceite=lubricante[aceitePersonalizado].precio;
            }
            else{
                sumarAceite=0;
            }
            if(confirmacionFltroAceite){
                sumarFiltroAceite=filtroAceite;
            }
            else{
                sumarFiltroAceite=0;
            }
            if(confirmacionFltroAire){
                sumarFiltroAire=filtroAire;
            }
            else{
                sumarFiltroAire=0;
            }
            if(confirmacionFltroCombustible){
                sumarFiltroCombustible=filtroCombustible;
            }
            else{
                sumarFiltroCombustible=0;
            }
            return sumarAceite+sumarFiltroAceite+sumarFiltroAire+sumarFiltroCombustible;
        }
    }
}

//ingreso por prompt de lo datos del vehículo
const vehiculo1 = new Auto (prompt("Ingresá la marca de tu auto"),prompt("modelo?"),Number(prompt("año? (Entre 1960 - 2021)")));

//Inicializacion y definicion de variable para imprimir alerta
let costoTotal= vehiculo1.tipoDeService();

//Mensaje en pantalla final del presupuesto calculado
alert(`Le informamos que el service para su vehículo ${vehiculo1.marca} ${vehiculo1.modelo} modelo ${vehiculo1.año} según su elección y utilizando el aceite recomendado por el fabricante (o personalizado), tiene un costo final de $${costoTotal}`);

alert(`MUCHAS GRACIAS POR VISITAR NUESTRA PÁGINA!!`);

