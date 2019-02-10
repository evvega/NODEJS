class Prenda{
    constructor(nombre, descripcion, tamaño, propiedades, estado){ 
            this.nombre=nombre;
            this.descripcion=descripcion; 
            this.tamaño=tamaño; 
            this.propiedades=propiedades; 
            this.estado=estado; 
        
    }

    
    getNombre(){
        return (this.nombre);

    }

    setNombre(nombre){
        this.nombre=nombre;
    }
    
    getDescripcion(){
        return (this.descripcion);
    }

    setDescripcion(descripcion){
        this.descripcion = descripcion;
    }
    getTamaño(){
        return (this.tamaño);
    }

    setTamaño(tamaño){
        this.tamaño = tamaño;
    }
    getPropiedades(){
        return (this.propiedades);
    }

    setPropiedades(propiedades){
        this.propiedades = propiedades;
    }
    getEstado(){
        return (this.estado);
    }

    setEstado(estado){
        this.estado = estado;
    }
}

const con =require("../database")
const mysql = require ("mysql");


let insertPrendaDB=(nombre_prenda, descripcion_prenda, tamaño_prenda, propiedades_prenda, estado_prenda)=>{
   return new Promise ((resolve,reject)=>{
    console.log("aca estoy");
    var sql = "INSERT INTO Prenda (nombre, descripcion, tamaño, propiedades, estado) VALUES('" + nombre_prenda + 
    "', '" +  descripcion_prenda + "', '"+ tamaño_prenda +"', '"+ propiedades_prenda +"', '"+ estado_prenda +"')";
   
    con.query(sql, (err)=> {

           if (err){reject(`you was a problem **Nombre:${nombre_prenda}- Estado:${estado_prenda}**`);}
           resolve(`****The data: Nombre:${nombre_prenda}- Estado:${estado_prenda},  was inserted ****`);
       
     });
     
    })

}



let deletePrendaDB=(nombres)=>{


    
}

let consultPrendaDB=()=>{
    return new Promise((resolve,reject)=>{
    con.query("SELECT * FROM Prenda", function (err, result, fields) {
        console.log("Hola casaa");
        if (err) {reject("you was a problem with the consult")}
        resolve (result)
      });
    })
}



module.exports={
    insertPrendaDB,
    deletePrendaDB,
    consultPrendaDB
    
}