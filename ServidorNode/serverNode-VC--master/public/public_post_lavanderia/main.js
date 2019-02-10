
$(document).ready(function(){
    $("button").click(function(){
        alert("hola");
        $("p").hide();
        var nit=document.getElementById("nit").value
        var razon_social=document.getElementById("razon_social").value
        var direccion=document.getElementById("direccion").value
        var telefono=document.getElementById("telefono").value
        var latitud=document.getElementById("latitud").value
        var longitud=document.getElementById("longitud").value
        var horario=document.getElementById("horario").value

        $.post( "http://localhost:3000/tryPostLava", {nit: nit, razon_social: razon_social, direccion:direccion, 
        telefono:telefono,latitud:latitud,longitud:longitud, horario:horario} );
      });
  });
  
  var inicioParqueo = new Date();
  
  console.log(inicioParqueo)
  
      