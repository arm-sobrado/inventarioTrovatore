window.onload = function() {
  var armario
  document.getElementById("botonA1").onclick=this.addItemA1
  document.getElementById("botonA2").onclick=this.addItemA2
  document.getElementById("botonA3").onclick=this.addItemA3
  document.getElementById("botonA4").onclick=this.addItemA4
  document.getElementById("botonA4").onclick=this.addItemA5
  };

/* var ultimoIdItem = 1;
var objetos = [];  
var Items = {
     
      // Inicializa el objeto inventariado
      init: function (armario, nombre, tipo, caducidad) {
        this.idItem = ultimoIdItem;
        this.armario = armario;
        ultimoIdItem++;
        this.nombre = nombre;
        this.inicial = nombre.slice(0,1);
        this.tipo = tipo;
        this.caducidad = caducidad;
    },
    // Inicializa la travesia
    descripcion: function () {
        alert("El objeto " + this.nombre + " es " + this.tipo + " está guardado en: " + this.armario[0] + this.almacen[1] + ", tiene caducidad " + this.caducidad.toDateString());
    },
} */

function addItemA1() {
 
  armario = "A1";
  addItem();

}

function addItemA2() {
 
  armario = "A2";
  addItem();

}

function addItemA3() {
 
  armario = "A3";
  addItem();

}

function addItemA4() {
 
  armario = "A4";
  addItem();

}

function addItemA5() {
 
  armario = "A5";
  addItem();

}

function addItem() {

  var nombre=prompt("Nombre del objeto: ");

  alert (nombre + " en " + armario);
}
