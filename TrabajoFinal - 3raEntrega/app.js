//ENTIDADES
//Clase con funcion constructora para que cada usuario ingrese los datos de su vehículo y así brindarle un presupuesto de service
class Auto {
    constructor(marca,modelo,año){
    this.marca=marca;
    this.modelo=modelo;
    this.año=año;}
}
//VARIABLES
let lubricantesRango;
let codLubricanteElegido;
//Asignación en array de productos para selección de lubricante en la opción de personalizar el cambio de aceite
const lubricante=JSON.parse(localStorage.getItem("ListaDeProductos"));
let botonRango = document.getElementById("btnRango");

//Asignación evento boton para calcular rango lubricantes
botonRango.addEventListener("click", (e)=>{
    e.preventDefault();
    filtrarRangoPrecio();
})
//Función que brinda los lubricantes dentro del rango de precios ingresado por el usuario
function filtrarRangoPrecio (){
    let elecciónRangoPrecioMax = Number(document.getElementById("rangoMaximoAceite").value);
    //Filtro de costo de aceite según ingreso de usuario
    lubricantesRango = lubricante.filter(costo => costo.precio < elecciónRangoPrecioMax );
    for(const item of lubricantesRango){
        imprimirProducto(item);
    }
    btnProductoSeleccionado();
}
//Función para imprimir en HTML card de lubricantes disponibles segun filtro de precio establecido
const imprimirProducto=(item)=>{
    let contenedor=document.createElement("div");
    contenedor.innerHTML=`  <h3>${item.marca}</h3>
    <h4>${item.tipo}</h4>
    <h4>${item.envase} - <strong>$${item.precio}</strong></h4>
    <button class="btnProducto" type="submit">Utilizar</button>`;
    contenedor.className="contenedor"
    document.getElementById("mensajePantallaRango").appendChild(contenedor);
}
//Función que escucha botón de card ante la selección del cliente para utilizar en su service personalizado
const btnProductoSeleccionado=()=>{
        let productosAgrupados=document.getElementsByClassName(`contenedor`)
        let btnAgrupados=document.getElementsByClassName(`btnProducto`)
        let productoElegido;
        for(let i=0;i<btnAgrupados.length;i++){
            btnAgrupados[i].addEventListener("click",(e)=>{
                e.preventDefault();
                codLubricanteElegido=i;
                productoElegido=productosAgrupados[i];
                let bucle=productosAgrupados.length;
                for(let ciclo=0;ciclo<bucle;ciclo++){
                    if(ciclo==i){
                        continue;
                    }
                    document.getElementById("productoElegido").appendChild(productoElegido);
                }
                //se modifica clase de contenedor para dejar de mostrarlo en pantalla (css) y solo observar el producto elegido 
                document.getElementById("mensajePantallaRango").className="mensajePantallaRango2";
            })
        }
    }
//Funcion calculadora de costo de lubricante segun año de auto para service completo
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

//Asignación de función a boton "Simular" para efectuar calculo de service e imprimir mensaje final en pantalla
document.getElementById("btn").addEventListener("click",()=>{
    tipoDeService();
    const vehiculo1=new Auto(
        (document.getElementById("marca").value).toUpperCase(),
        (document.getElementById("modelo").value).toUpperCase(),
        Number(document.getElementById("año").value))
    let costoTotal= tipoDeService();
    
    //Impresion en pantalla de la simulación según eleccion de tipo de service
    let mensajeSimulador=document.getElementById("mensajeSimulador");
    let mensajePantalla=document.createElement("p");
    mensajePantalla.id="mensaje"
    let mensajePantallaAntiguo=document.getElementById("mensaje");

    //Condicional para imprimir mensaje en pantalla o reemplazar el existente por el nuevo
    if(document.getElementById("mensaje")==null){
        if(service=="true"){
            mensajePantalla.innerHTML=imprimirMensaje(service,vehiculo1,costoTotal);
            return mensajeSimulador.appendChild(mensajePantalla);
        }else{
            mensajePantalla.innerHTML=imprimirMensaje(service,vehiculo1,costoTotal);
            return mensajeSimulador.appendChild(mensajePantalla);
        }
    }
    else{
        if(service=="true"){
            mensajePantalla.innerHTML= imprimirMensaje(service,vehiculo1,costoTotal);
            return mensajeSimulador.replaceChild(mensajePantalla,mensajePantallaAntiguo);
        }else{
            mensajePantalla.innerHTML= imprimirMensaje(service,vehiculo1,costoTotal);
            return mensajeSimulador.replaceChild(mensajePantalla,mensajePantallaAntiguo);
        }
    }
})

//Funcion que genera el mensaje de salida con el resultado de la simulacion
const imprimirMensaje = (service,vehiculo1,costoTotal)=>{
    if (service=="true"){
        return `Le informamos que el service Completo para su vehículo ${vehiculo1.marca} ${vehiculo1.modelo} modelo ${vehiculo1.año} utilizando el aceite recomendado por el fabricante y cambiando todos los filtros, tiene un costo final de $ ${costoTotal}`
    }else{
        return `Le informamos que el service Personalizado para su vehículo ${vehiculo1.marca} ${vehiculo1.modelo} modelo ${vehiculo1.año} utilizando el aceite  y filtros que seleccionó, tiene un costo final de $ ${costoTotal}`;
    }
}

//Funcion que calcula el presupuesto total según eleccion del usuario
const presupuesto = (service,aceite,confirmacionFltroAceite,confirmacionFltroAire,confirmacionFltroCombustible) =>{
    //Variables locales
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
    service = document.getElementById("tipoDeService").value;
    //Condicionales para brindarle al usuario la posibilidad de personalizar service
    if(service=="false"){
            return presupuesto(
                service,
                Number(lubricantesRango[codLubricanteElegido].precio),
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
const mostrarFormularioSecu=()=>{
    let personalizado=document.getElementById("tipoDeService").value;
    if(personalizado=="false"){
        document.getElementById("formularioEscondido").className="formularioSecu";    
    }else{
        document.getElementById("formularioEscondido").className="formularioEscondido"; 
    }
}
document.getElementById("tipoDeService").addEventListener("click",()=>{
    mostrarFormularioSecu();
});