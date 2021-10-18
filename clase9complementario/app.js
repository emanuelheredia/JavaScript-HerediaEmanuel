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
let service;
//Asignación en array de productos para selección de lubricante en la opción de personalizar el cambio de aceite
const lubricante=JSON.parse(localStorage.getItem("ListaDeProductos"));
let botonRango = document.getElementById("btnRango");

//asignación evento boton para calcular rango lubricantes
botonRango.addEventListener("click", (e)=>{
    e.preventDefault();
    filtrarRangoPrecio();
})
//función que brinda los lubricantes dentro del rango de precios ingresado por el usuario
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
    <h4>${item.envase} - $${item.precio}</h4>
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
    