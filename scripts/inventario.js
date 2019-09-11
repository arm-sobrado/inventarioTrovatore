window.onload = function() {
    document.getElementById("botonNewTravesia").onclick=anadirTravesia
    document.getElementById("botonVerTravesia").onclick=verTravesia
    document.getElementById("botonEliminarTravesia").onclick=eliminarTravesia
  };
var ultimoId = 1;
var singladuras = [];  
var Travesia = {
     
      // Inicializa la travesia
      init: function (fecha, lugar, duracion, distancia) {
        this.idTravesia = ultimoId;
        ultimoId++;
        this.fecha = fecha;
        this.lugar = lugar;
        this.duracion = duracion;
        this.distancia = distancia;
    },
    // Inicializa la travesia
    descripcion: function () {
        alert("La singladura " + this.idTravesia + " del día " + this.fecha.toDateString() + " en " 
        + this.lugar + " duró " + this.duracion + " horas y recorriste " + this.distancia + "millas");
    },
}

  function anadirTravesia() {

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
  
  function verTravesia() {
      alert("Chequea las travesías que has realizado");
  }
  
  function eliminarTravesia() {
      alert("Elimina una travesía");
  }
  
  function arreglarFecha(fechaAnt) {
      
    var fechaBuena = new Date(fechaAnt.slice(6, 10),fechaAnt.slice(3,5)-1,fechaAnt.slice(0,2));
    return fechaBuena;

    }