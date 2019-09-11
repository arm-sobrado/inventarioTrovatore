window.onload = function() {
    document.getElementById("botonNewItem").onclick=addItem
    document.getElementById("botonSearchItem").onclick=searchItem
    document.getElementById("botonListContainer").onclick=exploreContainer
  };
var ultimoIdItem = 1;
var singladuras = [];  
var Items = {
     
      // Inicializa el objeto inventariado
      init: function (almacen,nombre, inicial, tipo, perecedero) {
        this.idItem = ultimoIdItem;
        this.almacen = almacen;
        ultimoId++;
        this.nombre = nombre;
        this.inicial = inicial.slice(0,1);
        this.tipo = tipo;
        this.perecedero = perecedero;
    },
    // Inicializa la travesia
    descripcion: function () {
        alert("La singladura " + this.idTravesia + " del día " + this.fecha.toDateString() + " en " 
        + this.lugar + " duró " + this.duracion + " horas y recorriste " + this.distancia + "millas");
    },
}

  function addItem() {

    var fecha=prompt("Fecha de la travesía: dd.mm.aaaa");
    var lugar=prompt("Lugar de la travesía: ");
    var duracion=prompt("Duracion de la travesía: ");
    var distancia = prompt("Distancia recorrida: ");
    // var cadena = "Travesía realizada el dia: " + fecha + ". Distancia recorrida: " + distancia;
    singladura = Object.create(Travesia);
    singladura.init (arreglarFecha(fecha), lugar, duracion, distancia);
    singladuras.push (singladura);
    singladura.descripcion();
    console.log (singladuras[singladuras.length-1].lugar);
    console.log (singladuras.length);
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