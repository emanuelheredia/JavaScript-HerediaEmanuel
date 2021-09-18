// Esta aplicación se creó para recomendar el lubricante específico para su vehículo según modelo del mismo//

alert(`Hola! Te ayudaremos a encontrar el lubricante específico para tu vehículo`);

let nombre = prompt(`Antes de asesorarte, indicanos tu nombre por favor`);
let ingresomarca = prompt(`Perfecto ${nombre}, contanos cuál de las siguientes marcas de vehículos tenés : CHEVROLET - CITROEN - PEUGUEOT - FORD - FIAT - RENAULT - VOLKSWAGEN`);
let modelo = Number(prompt(`Por último necesitamos que nos digas el año de fabricación entre 1980 y actualidad`));
let marca = ingresomarca.toUpperCase();

if(modelo < 1990){
    tipo = "Mineral Monogrado"
}
else if(modelo >= 1990 && modelo < 2005){
    tipo = "Mineral Multigrado"
}
else if(modelo >= 2005 && modelo < 2015){
    tipo = "Semisintético"
}
else if(modelo >= 2015 && modelo < 2021){
    tipo = "100% Sintético"
}
else {
    alert("el año que ingresaste no es correcto");
}

if((marca=="CHEVROLET") || (marca=="FORD") || (marca=="VOLKSWAGEN")){
    alert(`El lubricante recomendado por ${marca} para tu auto es YPF ELAION y de tipo ${tipo}.`);    
}
else if(marca=="CITROEN" || (marca=="PEUGUEOT")){
    alert(`El lubricante recomendado por ${marca} para tu auto es TOTAL y de tipo ${tipo}.`);    
}
else if(marca=="FIAT"){
    alert(`El lubricante recomendado por ${marca} para tu auto es PETRONAS SELENIA y de tipo ${tipo}.`);    
}else if(marca=="RENAULT"){
    alert(`El lubricante recomendado por ${marca} para tu auto¿ es ELF y de tipo ${tipo}.`);    
}
else {
    alert(`Lo siento ${nombre}, ingresaste un nombre incompleto o marca inexistente.`)
} 

