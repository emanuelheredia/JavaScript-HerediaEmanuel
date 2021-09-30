//funcion constructora para dar la bienvenida a los usuarios que ingresen a la página para simular un presupuesto y/o consultar su historial de service previos
class usuario{
    constructor(nombre,apellido,telefono){
        this.nombre=nombre;
        this.apellido=apellido;
        this.telefono=telefono;
    }
    saludar(){
        alert(`Hola ${this.nombre} ${this.apellido}, un placer su visita por aquí`);        
    }
}
const usuario1 = new usuario (prompt(`Por favor ingrese su nombre`),prompt(`ahora su apellido`),prompt(`y por último el teléfono`))
usuario1.saludar();

//funcion constructora para que cada usuario ingrese los datos de su vehículo y así brindarle un presupuesto para el service del mismo
function Auto (marca,modelo,año,motor,combustible){
    this.marca=marca;
    this.modelo=modelo;
    this.año=año;
    this.motor=motor;
    this.combustible=combustible;
    let service;
    let confirmacionAceite;
    let confirmacionFltroAceite;
    let confirmacionFltroAire;
    let confirmacionFltroCombustible;
    this.imprimir= function(){
        console.log(`Su vehículo es un ${marca} ${modelo} fabricado en el año ${año} con un motor de cilindrada ${motor} que funciona con combustible ${combustible}`)
    
    }
    //Función para calcular el costo del aceite según el modelo del auto (año)
    this.costoAceite= function(año) {
        if(año<2000){
            return 2000;
        } else if(año>=2000 && año<2015){
            return 4500;
        } else if(año>=2015){
            return 6300;
        }
    }
    //Función para saber si el usuario desea realizar service completo o parcial según necesidad
    this.tipoDeService= function() {
            service = window.confirm("Desea realizar el service completo cambiando todos los filtros y el aceite?");
            if(!service){
                confirmacionAceite = window.confirm("Aceite?");
                confirmacionFltroAceite = window.confirm("Filtro de Aceite?");
                confirmacionFltroAire = window.confirm("Filtro de Aire?");
                confirmacionFltroCombustible = window.confirm("Filtro de Combustible?");
                }
            return this.presupuesto(service,this.costoAceite(this.año),confirmacionAceite,confirmacionFltroAceite,confirmacionFltroAire,confirmacionFltroCombustible)
    }
    //Funcion que calcula el presupuesto total según eleccion del usuario
    this.presupuesto = function (service,aceite,confirmacionAceite,confirmacionFltroAceite,confirmacionFltroAire,confirmacionFltroCombustible){
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
}

//ingreso por prompt de lo datos
const vehiculo1 = new Auto (prompt(usuario1.nombre+" ingresá la marca de tu auto"),prompt("modelo?"),prompt("año?"),prompt("cilindrada?"),prompt("nafta o diesel?"));
vehiculo1.imprimir();

//Inicializacion y definicion de variable para imprimir alerta
let costoTotal= vehiculo1.tipoDeService();

//Mensaje en pantalla final del presupuesto calculado
alert(`Le informamos que el service para su vehículo ${vehiculo1.marca} ${vehiculo1.modelo} modelo ${vehiculo1.año} según su elección y utilizando el aceite recomendado por el fabricante, tiene un costo final de $${costoTotal}`);

