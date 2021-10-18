class Productos {
    constructor ({marca,tipo,envase,precio}) {
    this.marca=marca;
    this.tipo=tipo;
    this.envase=envase;
    this.precio=precio;
    }}
let usuario="coder";
let contraseña="coderhouse";
let bucle;
let listaDeProductos;

const validarUsuario=()=>{
    let ingresoUsuario=document.getElementById("inputUsuario").value;
    let ingresoContraseña=document.getElementById("inputContraseña").value;
    if(ingresoUsuario===usuario & ingresoContraseña===contraseña){
        return "true";
    }else{
        return "false"
    }
}

let boton=document.getElementById("btn");
let cuerpoAdmin;
let botonCrearProducto;

boton.onclick= ()=>{
    if (validarUsuario()=="false"){
        let formulario=document.getElementById("formulario");
        let leyenda=document.createElement("h4");
        leyenda.innerHTML="Usuario o cntraseña incorrecta";
        formulario.appendChild(leyenda);
    }
    else{
        let cuerpoAdmin=document.getElementById("cuerpoAdmin");
        botonCrearProducto=document.createElement("button");
        botonCrearProducto.innerHTML="Ingresar Producto";
        cuerpoAdmin.appendChild(botonCrearProducto);
        botonCrearProducto.className="btn"
        botonCrearProducto.id="botonCrear";
        let botonCrear=document.getElementById("botonCrear");
        botonCrear.onclick=()=>{
            let formularioCarga=document.createElement("div");
            formularioCarga.innerHTML =     `<form class="formulario" id="formulario" action="">
                                            <label for="">Marca</label>
                                            <input id="inputMarca" type="text">
                                            <label for="">Tipo</label>
                                            <input id="inputTipo" type="text">
                                            <label for="">Envase</label>
                                            <input id="inputEnvase" type="text">
                                            <label for="">Precio</label>
                                            <input id="inputPrecio" type="text">
                                            </form>
                                            <div>
                                            <button id="botonCargar" class="btnCarga" name="button">Cargar</button><button id="botonFinalizar" class="btnCarga" name="button">Finalizar</button>
                                            </div>`
            cuerpoAdmin.appendChild(formularioCarga);
            formularioCarga.className="formularioCarga"
            
            if(localStorage.getItem("ListaDeProductos") == null){
                listaDeProductos=[];
                }
                else{
                    listaDeProductos=JSON.parse(localStorage.getItem("ListaDeProductos"));
                }
            let botonCargar=document.getElementById("botonCargar");
            document.getElementById("botonFinalizar").addEventListener("click",()=>{
                window.location.reload();
            })
            let ciclo="true";
            botonCargar.addEventListener("click",()=>{
                    cargarProducto();  
            })
        console.log("formularioCarga")
        }
    }
}
const cargarProducto=()=>{
                    let marca=document.getElementById("inputMarca").value;
                    let tipo=document.getElementById("inputTipo").value;
                    let envase=document.getElementById("inputEnvase").value;
                    let precio=document.getElementById("inputPrecio").value;
                    let producto=new Productos({marca:marca,tipo:tipo,envase:envase,precio:precio});
                    listaDeProductos.push(producto);
                    localStorage.setItem("ListaDeProductos",JSON.stringify(listaDeProductos));
}
