
alert(`Bienvenido al simulador de precios de Lubricentro HyH`);

class Usuario {
    constructor(nombreApellido, telefono) {
        this.nombreApellido = nombreApellido;
        this.telefono = telefono;
    }
        saludar () {
            alert(`Hola ${this.nombreApellido}, un placer su visita por aquí`);
        }
}

//Asignación en array de productos para selección de lubricante en la opción de personalizar el cambio de aceite
const lubricante=JSON.parse(localStorage.getItem("ListaDeLubricantes"));

let lubricantesRango;

//asignación evento boton para calcular rango lubricantes
let botonRango = document.getElementById("btnRango");
botonRango.addEventListener("click", (e)=>{
    e.preventDefault()
    filtrarRangoPrecio()
})
//función que brinda los lubricantes dentro del rango de precios ingresado por el usuario
function filtrarRangoPrecio (){
    let elecciónRangoPrecioMax = Number(document.getElementById("rangoMaximoAceite").value);
    //Filtro de costo de aceite según ingreso de usuario
    lubricantesRango = lubricante.filter(costo => costo.precio < elecciónRangoPrecioMax );
    for(const item of lubricantesRango){
        const cod= lubricantesRango.indexOf(item);
        let contenedor=document.createElement("div");
        contenedor.innerHTML=`Codigo: ${cod} - Marca: ${item.nombre} - Tipo: ${item.tipo} - precio: $ ${item.precio}`;
        document.getElementById("mensajePantallaRango").appendChild(contenedor);
    }
}

//Clase con funcion constructora para que cada usuario ingrese los datos de su vehículo y así brindarle un presupuesto de service
class Auto {
    constructor(marca,modelo,año){
    this.marca=marca;
    this.modelo=modelo;
    this.año=año;}
    //Función para calcular el costo del aceite según el modelo del auto (año)
}

//funcion calculadora de costo de lubricante segun año de auto para service completo
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

//asignación de función a boton "Simular" para efectuar calculo de service e imprimir mensaje final en pantalla
document.getElementById("btn").addEventListener("click",()=>{
    tipoDeService();
    const vehiculo1=new Auto(
        document.getElementById("marca").value,
        document.getElementById("modelo").value,
        Number(document.getElementById("año").value))
    let costoTotal= tipoDeService();
    let mensajePantalla=document.createElement("p");
    mensajePantalla.innerHTML= `<p>Le informamos que el service para su vehículo ${vehiculo1.marca} ${vehiculo1.modelo} modelo ${vehiculo1.año} según su elección y utilizando el aceite recomendado por el fabricante (o personalizado), tiene un costo final de $ ${costoTotal}</p>`;
    return document.body.appendChild(mensajePantalla);
})

//Funcion que calcula el presupuesto total según eleccion del usuario
const presupuesto = (service,aceite,confirmacionFltroAceite,confirmacionFltroAire,confirmacionFltroCombustible) =>{
    //Inicialización de variables locales y asignación de valor inicial
    let filtroAire=800;
    let filtroAceite=800;
    let filtroCombustible=1200;
    let sumarFiltroAceite;
    let sumarFiltroAire;
    let sumarFiltroCombustible;
    if(service=="true"){
        return aceite+filtroAire+filtroAceite+filtroCombustible;
    }
    else{ 
        if(confirmacionFltroAceite=="true"){
            sumarFiltroAceite=Number(filtroAceite);
        }
        else{
            sumarFiltroAceite=0;
        }
        if(confirmacionFltroAire=="true"){
            sumarFiltroAire=Number(filtroAire);
        }
        else{
            sumarFiltroAire=0;
        }
        if(confirmacionFltroCombustible=="true"){
            sumarFiltroCombustible=Number(filtroCombustible);
        }
        else{
            sumarFiltroCombustible=0;
        }
        return aceite+Number(sumarFiltroAceite)+Number(sumarFiltroAire)+Number(sumarFiltroCombustible);
    }
}

//Función que permite saber si el usuario desea realizar service completo o personalizado según necesidad
const tipoDeService= ()=>{
    let service = document.getElementById("tipoDeService").value;

    //Condicionales para brindarle al usuario la posibilidad de personalizar service
    if(service=="false"){
        console.log(`Acontinuación te daremos la posibilidad de personalizar tu service`)
            return presupuesto(
                service,
                Number(lubricantesRango[document.getElementById("codLubricante").value].precio),
                document.getElementById("seleccionFiltroAceite").value,
                document.getElementById("seleccionFiltroAire").value,
                document.getElementById("seleccionFiltroCombustible").value);
    }
    else{
        return presupuesto(
            service,
            costoAceite(),
            document.getElementById("seleccionFiltroAceite").value,
            document.getElementById("seleccionFiltroAire").value,
            document.getElementById("seleccionFiltroCombustible").value);
    }
}
    







