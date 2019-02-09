
$(document).ready(function(){
    $("button").click(function(){
        alert("hola");
        $("p").hide();
        var nombre=document.getElementById("nombre").value
        var apellido=document.getElementById("apellido").value
        var edad_per=document.getElementById("edad_per").value
        var tele_movil=document.getElementById("tele_movil").value
        var direcc_per=document.getElementById("direcc_per").value
        var correo_per=document.getElementById("correo_per").value
        var tele_local=document.getElementById("tele_local").value

        $.post( "http://localhost:3000/tryPost", {nombre: nombre, apellido: apellido, edad_per:edad_per, 
        tele_movil:tele_movil,direcc_per:direcc_per,correo_per:correo_per, tele_local:tele_local} );
      });
  });
  
  var inicioParqueo = new Date();
  
  console.log(inicioParqueo)
  
      