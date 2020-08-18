import {util} from "../configuracion/util"
import {c} from "../configuracion/constans";

function cargar() {
    nombre();
}

function nombre() {
    document.getElementsByClassName("display-4").innerHTML=c.name;
}

function validarCi(valor,dto){
    return util.validacionDNI(valor,dto);
}

document.onload=cargar();
