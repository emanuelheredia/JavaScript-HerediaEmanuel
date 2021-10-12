
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

// console.log(`Bienvenido al simulador de precios de Lubricentro HyH`);
// const usuario1 = new Usuario ((prompt(`Por favor ingrese su Nombre y Apellido`)),(prompt(`y por último el teléfono de contacto`)));
// usuario1.saludar();

//Inicialización de variables a utilizar en clase Auto, función "tipoDeService"

// let confirmacionFltroAceite;
// let confirmacionFltroAire;
// let confirmacionFltroCombustible;
let aceitePersonalizado;
let service;

//Asignación en array de productos para selección de lubricante en la opción de personalizar el cambio de aceite
const lubricante=JSON.parse(localStorage.getItem("ListaDeLubricantes"));


document.getElementById("btnRango").addEventListener("click",()=>{
    let elecciónRangoPrecioMax = Number(document.getElementById("rangoMaximoAceite").value);
    //Filtro de costo de aceite según ingreso de usuario
    let lubricantesRango = lubricante.filter(costo => costo.precio < elecciónRangoPrecioMax );
    for(const item of lubricantesRango){
        const cod= lubricantesRango.indexOf(item);
        let contenedor=document.createElement("div");
        contenedor.innerHTML=`Codigo: ${cod} - Marca: ${item.nombre} - Tipo: ${item.tipo} - precio: ${item.precio}`;
        document.getElementById("mensajePantallaRango").appendChild(contenedor);
    }
})

//Clase con funcion constructora para que cada usuario ingrese los datos de su vehículo y así brindarle un presupuesto de service
class Auto {
    constructor(marca,modelo,año){
    this.marca=marca;
    this.modelo=modelo;
    this.año=año;}
    //Función para calcular el costo del aceite según el modelo del auto (año)
}

const costoAceite = () =>{
    let año=document.getElementById("año").value;
    if(año<=2000){
        return 2000;
    } else if(año>2000 && año<2015){
        return 4500;
    } else if(año>=2015){
        return 6300;
    }
}

document.getElementById("btn").addEventListener("click",()=>{
    tipoDeService();
    const vehiculo1=new Auto(
        document.getElementById("marca").value,
        document.getElementById("modelo").value,
        Number(document.getElementById("año").value))
    let costoTotal= tipoDeService();
    let mensajePantalla=document.createElement("p");
    mensajePantalla.innerHTML= `<p>Le informamos que el service para su vehículo ${vehiculo1.marca} ${vehiculo1.modelo} modelo ${vehiculo1.año} según su elección y utilizando el aceite recomendado por el fabricante (o personalizado), tiene un costo final de $ ${costoTotal}</p>`;
    document.body.appendChild(mensajePantalla);
})
    //Función que permite saber si el usuario desea realizar service completo o personalizado según necesidad
    const tipoDeService= ()=>{
        service = document.getElementById("tipoDeService").value;
    
        //Condicionales para brindarle al usuario la posibilidad de personalizar service
        if(service==false){
            console.log(`Acontinuación te daremos la posibilidad de personalizar tu service`)
            // let confirmacionAceite = document.getElementById("seleccionAceite").value;
            // if(confirmacionAceite){
            //     let elecciónRangoPrecioMax = Number(document.getElementById("rangoMaximoAceite").value);
            //     //Filtro de costo de aceite según ingreso de usuario
            //     const lubricantesRango = lubricante.filter(costo => costo.precio < elecciónRangoPrecioMax );
            //     console.table(lubricantesRango);
            //     if(lubricantesRango.length==0){
            //         console.log(`No disponemos de productos dentro de ese rango de precio`);
            //     }
            //     else{
                // let confirmacionFltroAceite = document.getElementById("seleccionFiltroAceite").value;
                // let confirmacionFltroAire = document.getElementById("seleccionFiltroAire").value;
                // let confirmacionFltroCombustible = document.getElementById("seleccionFiltroCombustible").value;
                return presupuesto(
                    service,
                    lubricantesRango[document.getElementById("codLubricante").value].precio,
                    document.getElementById("seleccionFiltroAceite").value,
                    document.getElementById("seleccionFiltroAire").value,
                    document.getElementById("seleccionFiltroCombustible").value)
        }
        else{
            return presupuesto(
                service,
                costoAceite(),
                document.getElementById("seleccionFiltroAceite").value,
                document.getElementById("seleccionFiltroAire").value,
                document.getElementById("seleccionFiltroCombustible").value)
        }
    }
    //Funcion que calcula el presupuesto total según eleccion del usuario
    const presupuesto = (service,aceite,confirmacionFltroAceite,confirmacionFltroAire,confirmacionFltroCombustible) =>{
        //Inicialización de variables locales y asignación de valor inicial
        let filtroAire=800;
        let filtroAceite=800;
        let filtroCombustible=1200;

        let sumarFiltroAceite;
        let sumarFiltroAire;
        let sumarFiltroCombustible;
        if(service==true){
            return aceite+filtroAire+filtroAceite+filtroCombustible;
        }
        else{ 
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
            return aceite+sumarFiltroAceite+sumarFiltroAire+sumarFiltroCombustible;
        }
    }


//ingreso por prompt de lo datos del vehículo
// const vehiculo1 = new Auto (prompt("Ingresá la marca de tu auto"),prompt("modelo?"),Number(prompt("año? (Entre 1960 - 2021)")));




//Inicializacion y definicion de variable para imprimir alerta

