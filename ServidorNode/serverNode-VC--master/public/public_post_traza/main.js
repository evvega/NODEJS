
$(document).ready(function(){
    $("button").click(function(){
        alert("hola");
        $("p").hide();
        var lavanderia=document.getElementById("lavanderia").value
        var repartidor=document.getElementById("repartidor").value
        var prenda=document.getElementById("prenda").value
        var cliente=document.getElementById("cliente").value
        var date=document.getElementById("date").value
        var action=document.getElementById("action").value
        var reporter=document.getElementById("reporter").value

        $.post( "http://localhost:3000/tryPost", {lavanderia: lavanderia, repartidor: repartidor, prenda:prenda, 
        cliente:cliente,date:date,action:action, reporter:reporter} );
      });
  });
  
  var inicioParqueo = new Date();
  
  console.log(inicioParqueo)
  
      