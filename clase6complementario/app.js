const lubricante=[  {marca:"Elaion",tipo:"sintetico",precio:6000},
                    {marca:"Elaion",tipo:"semisintetico",precio:4000},
                    {marca:"Elaion",tipo:"mineral",precio:2900},
                    {marca:"Total",tipo:"sintetico",precio:6200},
                    {marca:"Total",tipo:"semisintetico",precio:4100},
                    {marca:"Total",tipo:"mineral",precio:3000},
                    {marca:"Elf",tipo:"sintetico",precio:6300},
                    {marca:"Elf",tipo:"semisintetico",precio:4250},
                    {marca:"Elf",tipo:"mineral",precio:3100},
                ]

//FILTRO DE PRODUCTOS POR PRECIO SEGUN INGRESO DEL USUARIO 
let elecciónRangoPrecioMax = prompt(`Elija el monto máximo que está dispuesto a pagar en el lubricante`);
const lubricantesRango = lubricante.filter(costo => costo.precio < elecciónRangoPrecioMax );

if(lubricantesRango.length==0){
    alert(`No disponemos de productos dentro de ese rango de precio`);
    }
    else{
        console.table(lubricantesRango)
    }

//FILTRO DE PRODUCTOS POR TIPO SEGUN INGRESO DEL USUARIO 
let elecciónTipoLubricante = (prompt(`Qué tipo de lubricante desea utilizar: Mineral,Semisintético o Sintético`)).toLocaleLowerCase();

const tipoLubricantes = lubricante.filter(tipo => tipo.tipo == elecciónTipoLubricante );

console.table(tipoLubricantes);

//ORDENAMIENTO DE PRODUCTOS DE MENOR A MAYOR PRECIO ("ACEPTAR" DE MENOR A MAYOR, "CANCELAR" DE MAYOR A MENOR)
let ordenarPrecio = window.confirm(`Ordenar el precio de menor a mayor?`);
if(ordenarPrecio){
lubricante.sort(function (a, b){
    return (a.precio - b.precio);
})
console.log(lubricante);}
else{
    lubricante.sort(function (a, b){
    return (b.precio - a.precio);
})
console.log(lubricante);}
