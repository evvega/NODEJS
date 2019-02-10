import Persona from "../persona/persona_model";

class Repartidor extends Persona{
    constructor(nombres, apellidos, edad, telefono_movil, direccion, correo, telefono_local, tipo_cuenta, numero_cuenta, 
        licencia_conduccion, tipo_transporte, calificacion){ 
            super(nombres, apellidos, edad, telefono_movil, direccion, correo, telefono_local);
            this.nombres=nombres;
            this.apellidos=apellidos; 
            this.edad=edad; 
            this.telefono_movil=telefono_movil; 
            this.direccion=direccion; 
            this.correo=correo;
            this.telefono_local=telefono_local;
            this.tipo_cuenta=tipo_cuenta;
            this.numero_cuenta=numero_cuenta;
            this.licencia_conduccion=licencia_conduccion;
            this.tipo_transporte=tipo_transporte;
            this.calificacion=calificacion;
        
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
    
    getTipoCuenta(){
        return (this.tipo_cuenta);
    }

    setTipoCuenta(tipo_cuenta){
        this.tipo_cuenta = tipo_cuenta;
    }
    getNumeroCuenta(){
        return (this.numero_cuenta);
    }

    setNumeroCuenta(numero_cuenta){
        this.numero_cuenta = numero_cuenta;
    }
    getLicencia(){
        return (this.licencia_conduccion);
    }

    setLicencia(licencia_conduccion){
        this.licencia_conduccion = licencia_conduccion;
    }

    getTipoTransporte(){
        return (this.tipo_transporte);
    }

    setTipoTransporte(tipo_transporte){
        this.tipo_transporte = tipo_transporte;
    }

    getCalificacion(){
        return (this.calificacion);
    }

    setTipoTransporte(calificacion){
        this.calificacion = calificacion;
    }
    
}



const con =require("../database")
const mysql = require ("mysql");


let insertRepartidorDB=(nombre, apellido,edad_per,tele_movil, direcc_per, correo_per, tele_local,cuenta_type, number_cuenta, licencia_conduccion,tipo_trans, puntos)=>{
   return new Promise ((resolve,reject)=>{
    console.log("aca estoy");
    var sql = "INSERT INTO Repartidor (nombres, apellidos, edad, "
        "telefono_movil, direccion, correo, telefono_local, tipo_cuenta, numero_cuenta, licencia_conduccion, tipo_transporte, calificacion) VALUES('" + nombre + 
    "', '" +  apellido + "', '"+ edad_per +"', '"+ tele_movil +"', '"+ direcc_per +"', '"+ correo_per +"', '"+ tele_local +"', '"+ cuenta_type +"', '"+ number_cuenta 
    +"', '"+ licencia_conduccion +"', '"+ tipo_trans +"', '"+ puntos +"')";
   
    con.query(sql, (err)=> {

           if (err){reject(`you was a problem **Nombre:${nombre}- Apellido:${apellido}**`);}
           resolve(`****The data: Nombre:${nombre}- Apellido:${apellido},  was inserted ****`);
       
     });
     
    })

}



let deleteRepartidorDB=(nombres)=>{


    
}

let consultRepartidorDB=()=>{
    return new Promise((resolve,reject)=>{
    con.query("SELECT * FROM Repartidor", function (err, result, fields) {
        console.log("Hola casaa");
        if (err) {reject("you was a problem with the consult")}
        resolve (result)
      });
    })
}



module.exports={
    insertRepartidorDB,
    deleteRepartidorDB,
    consultRepartidorDB
    
}