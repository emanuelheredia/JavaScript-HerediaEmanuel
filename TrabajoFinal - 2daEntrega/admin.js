//ENTIDADES
//Clase funcion constructora de productos a almacenar en Local Storage
class Productos {
    constructor({ marca, tipo, envase, precio }) {
        this.marca = marca;
        this.tipo = tipo;
        this.envase = envase;
        this.precio = precio;
    }
}

//Variables Globales e inicializaciones
let usuario = "coder";
let contraseña = "coderhouse";
let listaDeProductos;
let boton = document.getElementById("btn");
let cuerpoAdmin;
let botonCrearProducto;

//Funcion que valida si el usuario es el Admin con autorizacion para cargar productos
const validarUsuario = () => {
    let ingresoUsuario = (document.getElementById("inputUsuario").value).trim();
    let ingresoContraseña = (document.getElementById("inputContraseña").value).trim();
    if (ingresoUsuario === usuario & ingresoContraseña === contraseña) {
        return "true";
    } else {
        return "false"
    }
}

//Escucha evento "click" en boton de acceso
boton.onclick = () => {
    if (validarUsuario() == "false") {
        $("#formulario").append("<h4>Usuario o Contraseña incorrecto</h4>");
        $("h4").fadeOut(3000);
    }
    else {
        $("#formulario").slideUp(500);
        $("#btn").slideUp(500);
        $("#cuerpoAdmin").append(`<div class="form"> <form class="formulario formularioCarga" id="formulario" action="">
                                            <label for="">Marca del Lubricante</label>
                                            <input id="inputMarca" type="text">
                                            <label for="">Tipo</label>
                                            <input id="inputTipo" type="text">
                                            <label for="">Envase</label>
                                            <input id="inputEnvase" type="text">
                                            <label for="">Precio</label>
                                            <input id="inputPrecio" type="text">
                                            <div>
                                                <button id="botonCargar" class="btnCarga" name="button">CARGAR</button><button id="botonFinalizar" class="btnCarga" name="button">FINALIZAR</button>
                                            </div>
                                        </form>
                                </div>`
        )
        $(".form").slideDown(3000)
        verificarStorage();
        $("#botonCargar").click((e) => {
            cargarProducto();
            e.preventDefault();
        })
    }
}
//Funcion que recibe valores de los input ingresados en el HTML
const cargarProducto = () => {
    let marca = (document.getElementById("inputMarca").value).toUpperCase();
    let tipo = (document.getElementById("inputTipo").value).toUpperCase();
    let envase = (document.getElementById("inputEnvase").value).toUpperCase();
    let precio = (document.getElementById("inputPrecio").value).toUpperCase();
    let producto = new Productos({ marca: marca, tipo: tipo, envase: envase, precio: precio });
    listaDeProductos.push(producto);
    localStorage.setItem("ListaDeProductos", JSON.stringify(listaDeProductos));
}
//Funcion que verifica si hay elementos en la lista LocalStorage para reutilizarla
const verificarStorage = () => {
    if (localStorage.getItem("ListaDeProductos") == null) {
        return listaDeProductos = [];
    }
    else {
        return listaDeProductos = JSON.parse(localStorage.getItem("ListaDeProductos"));
    }
}