
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
        var horario_em=document.getElementById("horario_em").value
        var tipo_contrato_em=document.getElementById("tipo_contrato_em").value
        var salario_em=document.getElementById("salario_em").value
        var fecha_ingreso_em=document.getElementById("fecha_ingreso_em").value
        var cargo_em=document.getElementById("cargo_em").value


        $.post( "http://localhost:3000/tryPost", {nombre: nombre, apellido: apellido, edad_per:edad_per, 
        tele_movil:tele_movil,direcc_per:direcc_per,correo_per:correo_per, tele_local:tele_local, horario_em:horario_em,
        tipo_contrato_em:tipo_contrato_em,salario_em:salario_em,fecha_ingreso_em:fecha_ingreso_em,cargo_em:cargo_em
    } );
      });
  });
  
  var inicioParqueo = new Date();
  
  console.log(inicioParqueo)
  
      