"use strict";
var form = document.getElementById("numeros"),
    salida = document.getElementById("salida");

form.addEventListener("submit", procesa, false);
form["limpiar"].addEventListener("click", limpiar, false);

function procesa(numero) {
    parImpar(form["numero"].value);
}

function parImpar(numero) {
    let mensaje = "";
    if (numero % 2 == 0) {
        mensaje = "El número " + numero + " es Par";
    } else {
        mensaje = "El número " + numero + " es Impar";
    }
    salida.value = mensaje;
}

function limpiar() {
    salida.value = "";
    form["numero"].value = "";
}