
let carrito=[];
let productoElegido;

let listaDeProductos=JSON.parse(localStorage.getItem("ListaDeProductos"));
let productoComprado;
const imprimirProducto=()=>{
    for(let i=0;i<listaDeProductos.length;i++){
    producto=listaDeProductos[i];
    $("#productos").append(`<div class="card"><h2>${producto.marca}</h2>
                                <h3>${producto.tipo}</h3>
                                <h3>${producto.envase}</h3>
                                <h2>$${producto.precio}</h2>
                                <button class="btnComprar" id="${i}">Comprar</button></div>`
    )
    }
}
imprimirProducto();

const cargarCarrito=(carrito)=>{
    for(let i=0;i<listaDeProductos.length;i++){
        $(`#${i}`).click(()=>{
            productoElegido= listaDeProductos[i]
            console.log(productoElegido)
            carrito.push(productoElegido)
            localStorage.setItem("Carrito",JSON.stringify(carrito))
        })
    }
    return productoElegido;
}
const verificarStorage=()=>{
    if(localStorage.getItem("Carrito")==null){
        return carrito=[];
    }
    else{
        return carrito=JSON.parse(localStorage.getItem("Carrito"));
    }
}

cargarCarrito(verificarStorage());

const cancelarCompra=()=>{
    localStorage.removeItem("Carrito");
    window.location.reload();
}
$(`#btnCancelar`).click(()=>{
    cancelarCompra();
})

const sumarCarrito=()=>{
    let compra= JSON.parse(localStorage.getItem("Carrito"));
    let suma;
    for(producto of compra){
        if(suma==undefined){
            suma=producto.precio;
        }else{
            suma=Number(suma)+Number(producto.precio)
        }
    }
    return suma;
}

$("#btnFinalizar").click(()=>{
    let precioCompra=sumarCarrito();
    $("#mensajeCompra").append(`<p>Gracias por su compra!
                                Le informamos que el monto total a pagar es de $${precioCompra}</p>`)
})

$(".btnComprar").click(()=>{
    $("#modal_container").fadeTo(500,1).delay(1000).fadeTo(500,0)
})

const mostrarCarrito=()=>{
    let total=0;
    if($("#mostrarCarrito")==null){
        $("#mensajeCarrito").append(`<div id="mostrarCarrito"></div>`);
    }else{
        $("#mensajeCarrito").empty();
        $("#mensajeCarrito").append(`<div id="mostrarCarrito"></div>`);
    }
    if(localStorage.getItem("Carrito")==null){
        $("#mostrarCarrito").append(`<h3> El Carrito está Vacío </h3>`)
    }else{
    let carrito=JSON.parse(localStorage.getItem("Carrito"))
    for (productos of carrito){
        total=Number(productos.precio)+Number(total)
        $("#mostrarCarrito").append(`<h3>${productos.marca} - ${productos.tipo} - ${productos.envase} - $${productos.precio}</h3>`)
    }
    $("#mostrarCarrito").append(`<h3 style="color:red;font-size:30px">TOTAL = $${total}</h3>`)
    }
}
$("#btnVer").click(()=>{
    $("#modal_container_carrito").addClass(`show`);
    mostrarCarrito();
})
$("#cerrarModalCarrito").click(()=>{
    $("#modal_container_carrito").removeClass(`show`);
})

const url = "https://jsonplaceholder.typicode.com/comments";
$("main").append(`<button class="btn" id="verComentarios">Opiniones sobre nuestros productos</button>`);
$("#verComentarios").click(()=>{
    $.getJSON(url,function(res,est){
        if(est==="success"){
            let datos=res;
            let id;
            for(const comen of datos){
                $("#comentarios").append(`<div class="cardComentario">
                    <h2>...${comen.name}</h2>
                    <h3>${comen.email}</h3>
                    <h4>${comen.body}</h4>               
                </div>`)
                id=comen.id;
                if(id==4){
                    break;
                }
            }
        }
    })
})