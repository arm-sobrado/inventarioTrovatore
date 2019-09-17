window.onload = function() {
  document.getElementById("botonA1").onclick=this.addItem
  document.getElementById("botonA2").onclick=this.addItem
  document.getElementById("botonA3").onclick=this.addItem
  document.getElementById("botonA4").onclick=this.addItem
  document.getElementById("botonA5").onclick=this.addItem
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


function addItem() {

  var nombre=prompt("Nombre del objeto: ");
  alert ("El objeto " + nombre + "está en " + this.id.slice(5,7));

}
