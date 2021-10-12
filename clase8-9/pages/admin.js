let admin="coder";
let contraseña="coderhouse";
let listaDeLubricantes;
let ciclo;

class Lubricantes {
    constructor({nombre,tipo,precio}){
        this.nombre=nombre;
        this.tipo=tipo;
        this.precio=precio;
    }
}

const comprobarContraseña = () =>{
    let ingresoAdmin=prompt(`Ingrese su nombre de usuario admin`);
    let ingresoConstraseña=prompt(`Ingrese contraseña`);
    if(ingresoAdmin==admin & ingresoConstraseña==contraseña){
        ciclo=true;
    }else{
        ciclo=false;
        alert(`Usuario o contraseña incorrecta, recargue pagina para volver a intentar`)
    }
}
comprobarContraseña();

if(localStorage.getItem("ListaDeLubricantes") == null){
    listaDeLubricantes=[];
    }
    else{
        listaDeLubricantes=JSON.parse(localStorage.getItem("ListaDeLubricantes"));
    }
while(ciclo){
        let nombre=prompt("Nombre del Lubricante");
        let tipo=prompt("Tipo del Lubricante");
        let precio=prompt("Precio del Lubricante");
        let lubricante=new Lubricantes({nombre:nombre,tipo:tipo,precio:precio});
        listaDeLubricantes.push(lubricante);
        localStorage.setItem("ListaDeLubricantes",JSON.stringify(listaDeLubricantes));            ciclo=window.confirm(`Desea agregar un lubricantes mas?`)}

