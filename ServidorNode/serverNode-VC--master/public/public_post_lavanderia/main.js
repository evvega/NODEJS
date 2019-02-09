
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

        $.post( "http://localhost:3000/tryPostLava", {nit_lav: nit, razon_social_lav: razon_social, direccion_lav:direccion, 
        telefono_lav:telefono,latitud_lav:latitud,longitud_lav:longitud, horario_lav:horario} );
      });
  });
  
  var inicioParqueo = new Date();
  
  console.log(inicioParqueo)
  
      