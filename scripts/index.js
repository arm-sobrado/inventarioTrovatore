window.onload = function() {
    document.getElementById("botonNewItem").onclick=addItem
    document.getElementById("botonSearchItem").onclick=searchItem
    document.getElementById("botonListContainer").onclick=exploreContainer
  };
var ultimoIdItem = 0;
var almacenes = [];  
var items = {
     
      // Inicializa el objeto inventariado
    init: function (nombre, armario, tipo, caducidad) {
        this.idItem = ultimoIdItem;
        this.armario = armario;
        this.nombre = nombre;
        this.inicial = nombre.slice(0,1);
        this.tipo = tipo;
        this.caducidad = caducidad;
    },
    // Inicializa la travesia
    descripcion: function () {
        alert("El objeto " + this.nombre + " es " + this.tipo + " está guardado en: "
        + this.armario + ", tiene caducidad " + this.caducidad);
    },
}

  function addItem() {

  var nombre=prompt("Introduce nombre del objeto: ");
  var lugar=prompt("¿Dependencia? A B C D E ");
  var hueco=prompt("¿En qué armario? ");
  var tipo=prompt("¿Qué es? (H)erramienta (E)quipamiento personal (C)ocina (R)epuesto ")
  var caducidad=prompt("¿Caducidad? 0=sin caducidad ")
  
  var nuevoItem = Object.create(items);
  nuevoItem.init(nombre, lugar+hueco, tipo, caducidad);
  nuevoItem.descripcion();
  almacenes[ultimoIdItem]=nuevoItem;
  ultimoIdItem++;
    // window.open("insertarObjeto.html");
  }
  
  function searchItem() {
      alert("Chequea las travesías que has realizado");
      window.open("insertarObjeto.html");
      ultimoIdItem++;
  }
  
  function exploreContainer() {
      alert("Elimina una travesía");
  }
  
  function arreglarFecha(fechaAnt) {
      
    var fechaBuena = new Date(fechaAnt.slice(6, 10),fechaAnt.slice(3,5)-1,fechaAnt.slice(0,2));
    return fechaBuena;

    }