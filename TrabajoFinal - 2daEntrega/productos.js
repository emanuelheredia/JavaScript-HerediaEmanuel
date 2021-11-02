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

//Funcion que busca las marcas en la lista de productos y las incluye en el filtro "Marca" sin repetir
const sumarMarcaFiltrar=()=>{
    let marcasFiltrar=[];
    for(marca of listaDeProductos){
        let busqueda;
        busqueda=marcasFiltrar.includes(marca.marca)
        if(busqueda==false){
            marcasFiltrar.push(marca.marca);
        }else{
            continue;
        }
    }
    return marcasFiltrar;
}
console.log(sumarMarcaFiltrar());

$("#filtroMarca").click(()=>{
    if(document.getElementById("filtroMarca").length==1){
    for(marca of sumarMarcaFiltrar()){
    $("#filtroMarca").append(`<option value="${marca}">${marca}</option>
    `)}}
    console.log(document.getElementById("filtroMarca").value)
    $("#filtroMarca").click(()=>{
        let filtrado = imprimirFiltrado(listaDeProductos);
        $("#productos").empty()
        for(let i= 0;i<filtrado.length;i++){
            $("#productos").append(`<div class="card"><h2>${filtrado[i].marca}</h2>
            <h3>${filtrado[i].tipo}</h3>
            <h3>${filtrado[i].envase}</h3>
            <h2>$${filtrado[i].precio}</h2>
            <button class="btnComprar" id="${i}">Comprar</button></div>`)
        }
        cargarCarrito(verificarStorage(),filtrado);
        confirmacionCarga();
    })
})

const imprimirFiltrado=(listaDeProductos)=>{
    let seleccion= document.getElementById("filtroMarca").value;
    let filtrado;
    if(seleccion=="TODAS"){
        filtrado=listaDeProductos;
    }else{
        filtrado= listaDeProductos.filter(element=>element.marca==seleccion)
    }
    return(filtrado);
}

const cargarCarrito=(carrito,listaDeProductos)=>{
    lista=listaDeProductos;
    for(let i=0;i<lista.length;i++){
        $(`#${i}`).click(()=>{
            productoElegido= lista[i]
            console.log(productoElegido)
            carrito.push(productoElegido)
            localStorage.setItem("Carrito",JSON.stringify(carrito))
        })
    }
    return productoElegido;
}

//Función que verifica si el Local Storage "Carrito" posee o no productos
const verificarStorage=()=>{
    if(localStorage.getItem("Carrito")==null){
        return carrito=[];
    }
    else{
        return carrito=JSON.parse(localStorage.getItem("Carrito"));
    }
}

cargarCarrito(verificarStorage(),listaDeProductos);

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

//Función que imprime en carrito cantidad de productos que posee al recargar página
const contarCarrito= function(){
    let cantProductos= JSON.parse(localStorage.getItem("Carrito"))
    if(cantProductos!=null){
    $(".contadorCarrito").append(`<h5>${cantProductos.length}</h5>`)}
}
contarCarrito();

//Funcion contadora de productos que se van sumando al carrito e impresion en pantalla de modal confirmatorio
const confirmacionCarga=()=>{
$(".btnComprar").click(()=>{
    $("#modal_container").fadeTo(500,1).delay(1000).fadeTo(500,0)
    let cantProductos= JSON.parse(localStorage.getItem("Carrito"))
    if(cantProductos==null){
    $(".contadorCarrito").append(`<h5>${cantProductos.length}</h5>`)}
else{
    $(".contadorCarrito").empty();
    $(".contadorCarrito").append(`<h5>${cantProductos.length}</h5>`)
}
})}
confirmacionCarga();
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
        $("#mostrarCarrito").append(`<div class="modalCarrito">
            <h3>${productos.marca} ${productos.tipo} ${productos.envase}</h3>
            <h3>$${productos.precio}</h3>
        </div>`)
    }
    $(".totalPrecio").empty();
    $(".totalPrecio").append(`<h3>$ ${total}</h3>`)
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
$("main").append(`<button class="btn" id="verComentarios">Reseñas</button>`);
$("#verComentarios").click(()=>{
    $("#comentarios").empty();
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
                if(id==8){
                    break;
                }
            }
        }
    })
})