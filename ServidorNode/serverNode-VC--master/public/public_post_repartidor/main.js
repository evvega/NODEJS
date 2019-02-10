
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
        var cuenta_type=document.getElementById("cuenta_type").value
        var number_cuenta=document.getElementById("number_cuenta").value
        var licencia_conduccion=document.getElementById("licencia_conduccion").value
        var tipo_trans=document.getElementById("tipo_trans").value
        var puntos=document.getElementById("puntos").value


        $.post( "http://localhost:3000/tryPost", {nombre: nombre, apellido: apellido, edad_per:edad_per, 
        tele_movil:tele_movil,direcc_per:direcc_per,correo_per:correo_per, tele_local:tele_local, cuenta_type:cuenta_type,
        number_cuenta:number_cuenta,licencia_conduccion:licencia_conduccion,tipo_trans:tipo_trans,puntos:puntos
    } );
      });
  });
  
  var inicioParqueo = new Date();
  
  console.log(inicioParqueo)
  
      