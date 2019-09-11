window.onload = function() {
    document.getElementById("botonNewItem").onclick=addItem
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

    var almacen =[];
    almacen[0]=prompt("¿Dependencia?: ");
    almacen[1]=prompt("¿Armario?: ");
    var nombre=prompt("Nombre del objeto: ");
    var tipo=prompt("Tipo de objeto (H)erramienta, (R)opa, (S)eguridad, (E)quipo, (C)omida: ");
    var fechaCaducidad=prompt("Caducidad (dd.mm.aaaa): ");

    item = Object.create(Items);
    item.init (almacen, nombre, tipo ,arreglarFecha(fechaCaducidad));
    objetos.push (item);
    item.descripcion();
    console.log (objetos[objetos.length-1].lugar);
    console.log (objetos.length);
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