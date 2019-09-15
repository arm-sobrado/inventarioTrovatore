window.onload = function() {
  var donde;  
  document.getElementById("botonA1").onclick=addItem(donde);
  document.getElementById("botonA2").onclick=addItem(donde);
  };

// Tengo que conseguir que al hacer click en el botón A1, se envíe como parámetro "A1"
// a una función "addItem" genérica. Para evitar hacer "addItemA1", "aadItemA2", etc.


/* var ultimoIdItem = 1;
var objetos = [];  
var Items = {
     
      // Inicializa el objeto inventariado
      init: function (almacen, nombre, tipo, caducidad) {
        this.idItem = ultimoIdItem;
        this.almacen = almacen;
        ultimoIdItem++;
        this.nombre = nombre;
        this.inicial = nombre.slice(0,1);
        this.tipo = tipo;
        this.caducidad = caducidad;
    },
    // Inicializa la travesia
    descripcion: function () {
        alert("El objeto " + this.nombre + " es " + this.tipo + " está guardado en: " + this.almacen[0] + this.almacen[1] + ", tiene caducidad " + this.caducidad.toDateString());
    },
} */

  function addItem(almacen) {

    var nombre=prompt("Nombre del objeto: ");

    console.log (nombre + " en " + almacen);
  }
  