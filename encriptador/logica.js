//diccionario con los paprametros del desafio
var diccionario = {"a": "ai", "e": "enter", "i": "imes",  "o": "ober", "u": "ufat" };

//funcion ocultar
function ocultar(texto) {
  return texto.replace(/[aeiou]/g, function(match) {
    return diccionario[match];
  });
}

//funcion mostrar
function mostrar(texto) {
  return texto.replace(/enter/g, "e")
  .replace(/imes/g, "i")
  .replace(/ai/g, "a")
  .replace(/ober/g, "o")
  .replace(/ufat/g, "u");
}

//Funcion para resolver
function resolver() {
  var origen = document.getElementById("origen");
  var arreglo= document.getElementById("oculto");
  var texto = origen.value;
    if (texto.trim() === "") {
     return;
   }
    var solucion = ocultar(texto);
    arreglo.value = solucion;
}

//Creamos la funcion resolver y asignacion al boton
function resolverMostrar() {
  var origen = document.getElementById("origen");
  var arreglo = document.getElementById("oculto");
  var texto = origen.value;

  if (texto.trim() === "") {
    return;
  }
  var solucion = mostrar(texto);
  arreglo.value = solucion;
}
//Funcion restablecer
function borrarAreaDeTexto() {
  var arreglo = document.getElementById("oculto");
  var texto = arreglo.value.trim();
  arreglo.value = "";
} 
//Ocultar area de texto
function toggle() {
  setTimeout(() => {
    var texto = document.getElementById("origen").value;
    var tagPasivo = document.getElementById("pasivo");
    var tagActivo = document.getElementById("activo");
    var encriptado = document.getElementById("oculto");
    if (texto == "") {
      tagPasivo.style.display = "block";
      tagActivo.style.display = "none";
    } else {
      tagPasivo.style.display = "none";
      tagActivo.style.display = "block";
      encriptado.value = texto;
    }
  }, 0);
}

