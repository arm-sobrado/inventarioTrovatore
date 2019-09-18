window.onload = function() {
  document.getElementById("botonA1").onclick=this.addItem
  document.getElementById("botonA2").onclick=this.addItem
  document.getElementById("botonA3").onclick=this.addItem
  document.getElementById("botonA4").onclick=this.addItem
  document.getElementById("botonA5").onclick=this.addItem
  };

function addItem() {

  var nombre=prompt("Nombre del objeto: ");
  alert ("El objeto " + nombre + " está en " + this.id.slice(5,7));
  return this.id.slice(5,7);
  window.close();

}
