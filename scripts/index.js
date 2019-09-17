window.onload = function() {
   // document.getElementById("botonNewItem").onclick=addItem
    document.getElementById("botonSearchItem").onclick=searchItem
    document.getElementById("botonListContainer").onclick=exploreContainer
  };
var ultimoIdItem = 1;
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
}

  function addItem() {

    window.open("insertarObjeto.html");
    
  }
  
  function searchItem() {
      alert("Chequea las travesías que has realizado");
  }
  
  function exploreContainer() {
      alert("Elimina una travesía");
  }
  
  function arreglarFecha(fechaAnt) {
      
    var fechaBuena = new Date(fechaAnt.slice(6, 10),fechaAnt.slice(3,5)-1,fechaAnt.slice(0,2));
    return fechaBuena;

    }