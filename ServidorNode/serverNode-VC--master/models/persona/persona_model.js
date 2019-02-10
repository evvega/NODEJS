 class Persona{
    constructor(nombres, apellidos, edad, telefono_movil, direccion, correo, telefono_local){
       this.nombres=nombres;
       this.apellidos=apellidos; 
       this.edad=edad; 
       this.telefono_movil=telefono_movil; 
       this.direccion=direccion; 
       this.correo=correo;
       this.telefono_local=telefono_local;

    }

    getNombre(){
        return (this.nombres);

    }

    setNombre(nombre){
        this.nombres=nombre;

    }

    getApellidos(){
        return (this.apellidos);

    }

    setApellidos(apellido){
        this.apellidos=apellido;
    }

    getEdad(){
        return (this.edad);

    }

    setEdad(edad){
        this.edad=edad;
    }

    getTelefonoMovil(){
        return (this.telefono_movil);

    }

    setTelefonoMovil(telefono_movil){
        this.telefono_movil=telefono_movil;
    }
    getDireccion(){
        return (this.direccion);

    }

    setDireccion(direccion){
        this.direccion=direccion;
    }

    getCorreo(){
        return (this.correo);

    }

    setCorreo(correo){
        this.correo=correo;
    }

    getTelefonoLocal(){
        return (this.telefono_local);

    }

    setTelefonoLocal(telefono_local){
        this.telefono_local=telefono_local;
    }

}


const con =require("../database")
const mysql = require ("mysql");


let insertPersonDB=(nombre, apellido,edad_per,tele_movil, direcc_per, correo_per, tele_local)=>{
   return new Promise ((resolve,reject)=>{
    console.log("aca estoy");
    var sql = "INSERT INTO Persona (nombres, apellidos, edad, telefono_movil, direccion, correo, telefono_local) VALUES('" + nombre + "', '" +  apellido + "', '"+ edad_per +"', '"+ tele_movil +"', '"+ direcc_per +"', '"+ correo_per +"', '"+ tele_local +"')";
   
    con.query(sql, (err)=> {

           if (err){reject(`you was a problem **Nombre:${nombre}- Apellido:${apellido}**`);}
           resolve(`****The data: Nombre:${nombre}- Apellido:${apellido},  was inserted ****`);
       
     });
     
    })

}



let deletePersonDB=(nombres)=>{


    
}

let consultPersonDB=()=>{
    return new Promise((resolve,reject)=>{
    con.query("SELECT * FROM Persona", function (err, result, fields) {
        console.log("Hola casaa");
        if (err) {reject("you was a problem with the consult")}
        resolve (result)
      });
    })
}



module.exports={
    insertPersonDB,
    deletePersonDB,
    consultPersonDB
    
}




