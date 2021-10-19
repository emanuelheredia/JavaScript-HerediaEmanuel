//ENTIDADES
//Clase funcion constructora de productos a almacenar en Local Storage
class Productos {
    constructor ({marca,tipo,envase,precio}) {
    this.marca=marca;
    this.tipo=tipo;
    this.envase=envase;
    this.precio=precio;
    }}

//Variables Globales e inicializaciones
let usuario="coder";
let contraseña="coderhouse";
let bucle;
let listaDeProductos;
let boton=document.getElementById("btn");
let cuerpoAdmin;
let botonCrearProducto;

//Funcion que valida si el usuario es el Admin con autorizacion para cargar productos
const validarUsuario=()=>{
    let ingresoUsuario=document.getElementById("inputUsuario").value;
    let ingresoContraseña=document.getElementById("inputContraseña").value;
    if(ingresoUsuario===usuario & ingresoContraseña===contraseña){
        return "true";
    }else{
        return "false"
    }
}

//Escucha evento "click" en boton de acceso
boton.onclick= ()=>{
    if (validarUsuario()=="false"){
        let formulario=document.getElementById("formulario");
        let leyenda=document.createElement("h4");
        leyenda.innerHTML="Usuario o Contraseña incorrecto";
        formulario.appendChild(leyenda);
    }
    else{
        let cuerpoAdmin=document.getElementById("cuerpoAdmin");
        crearBoton(cuerpoAdmin);
        let botonCrear=document.getElementById("botonCrear");
        botonCrear.onclick=()=>{
            let formularioCarga=document.createElement("div");
            formularioCarga.innerHTML =     `<form class="formulario" id="formulario" action="">
                                            <label for="">Marca del Lubricante</label>
                                            <input id="inputMarca" type="text">
                                            <label for="">Tipo</label>
                                            <input id="inputTipo" type="text">
                                            <label for="">Envase</label>
                                            <input id="inputEnvase" type="text">
                                            <label for="">Precio</label>
                                            <input id="inputPrecio" type="text">
                                            </form>
                                            <div>
                                            <button id="botonCargar" class="btnCarga" name="button">CARGAR</button><button id="botonFinalizar" class="btnCarga" name="button">FINALIZAR</button>
                                            </div>`
            cuerpoAdmin.appendChild(formularioCarga);
            formularioCarga.className="formularioCarga"
            verificarStorage();
            let botonCargar=document.getElementById("botonCargar");
            document.getElementById("botonFinalizar").addEventListener("click",()=>{
                window.location.reload();
            })
            botonCargar.addEventListener("click",()=>{
                    cargarProducto();  
                })
            }
    }
}
//Funcion que recibe valores de los input ingresados en el HTML
const cargarProducto=()=>{
    let marca=document.getElementById("inputMarca").value;
    let tipo=document.getElementById("inputTipo").value;
    let envase=document.getElementById("inputEnvase").value;
    let precio=document.getElementById("inputPrecio").value;
    let producto=new Productos({marca:marca,tipo:tipo,envase:envase,precio:precio});
    listaDeProductos.push(producto);
    localStorage.setItem("ListaDeProductos",JSON.stringify(listaDeProductos));
}
const crearBoton=(cuerpoAdmin)=>{
    botonCrearProducto=document.createElement("button");
    botonCrearProducto.innerHTML="INGRESAR PRODUCTO";
    cuerpoAdmin.appendChild(botonCrearProducto);
    botonCrearProducto.className="btn"
    botonCrearProducto.id="botonCrear";
}
//Funcion que verifica si hay elementos en la lista LocalStorage para reutilizarla
const verificarStorage=()=>{
    if(localStorage.getItem("ListaDeProductos") == null){
        return listaDeProductos=[];
        }
        else{
        return listaDeProductos=JSON.parse(localStorage.getItem("ListaDeProductos"));
        }
}