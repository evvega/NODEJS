
$(document).ready(function(){
    $("button").click(function(){
        alert("hola");
        $("p").hide();
        var nombre_prenda=document.getElementById("nombre_prenda").value
        var descripcion_prenda=document.getElementById("descripcion_prenda").value
        var tamaño_prenda=document.getElementById("tamaño_prenda").value
        var propiedades_prenda=document.getElementById("propiedades_prenda").value
        var estado_prenda=document.getElementById("estado_prenda").value

        $.post( "http://localhost:3000/tryPostLava", {nombre_prenda: nombre_prenda, descripcion_prenda: descripcion_prenda, tamaño_prenda:tamaño_prenda, 
        propiedades_prenda:propiedades_prenda,estado_prenda:estado_prenda} );
      });
  });
  
  var inicioParqueo = new Date();
  
  console.log(inicioParqueo)
  
      