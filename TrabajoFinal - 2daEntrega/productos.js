
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
    $("#modal_container").addClass(`show`);
})
$("#cerrarModal").click(()=>{
    $("#modal_container").removeClass(`show`);
})

const mostrarCarrito=()=>{
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
        $("#mostrarCarrito").append(`<h3>${productos.marca} - ${productos.tipo} - ${productos.envase} - $${productos.precio}</h3>`)
    }
    }
}

$("#btnVer").click(()=>{
    $("#modal_container_carrito").addClass(`show`);
    mostrarCarrito();
})

$("#cerrarModalCarrito").click(()=>{
    $("#modal_container_carrito").removeClass(`show`);
})
