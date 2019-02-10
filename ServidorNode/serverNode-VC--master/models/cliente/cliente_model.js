import Persona from "../persona/persona_model";

class Cliente extends Persona{
    constructor(nombres, apellidos, edad, telefono_movil, direccion, correo, telefono_local, medio_pago, numero_tarjeta, 
        codigo_csc, estado){ 
            super(nombres, apellidos, edad, telefono_movil, direccion, correo, telefono_local);
            this.nombres=nombres;
            this.apellidos=apellidos; 
            this.edad=edad; 
            this.telefono_movil=telefono_movil; 
            this.direccion=direccion; 
            this.correo=correo;
            this.telefono_local=telefono_local;
            this.medio_pago=medio_pago;
            this.numero_tarjeta=numero_tarjeta;
            this.codigo_csc=codigo_csc;
            this.estado=estado;        
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
    
    getMedioPago(){
        return (this.medio_pago);
    }

    setMedioPago(medio_pago){
        this.medio_pago = medio_pago;
    }
    getNumeroTarjeta(){
        return (this.numero_tarjeta);
    }

    setNumeroTarjeta(numero_tarjeta){
        this.numero_tarjeta = numero_tarjeta;
    }
    getCodigo(){
        return (this.codigo_csc);
    }

    setCodigo(codigo_csc){
        this.codigo_csc = codigo_csc;
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


let insertClienteDB=(nombre, apellido,edad_per,tele_movil, direcc_per, correo_per, tele_local,pago_medio, numero_tj,codigo, estado)=>{
   return new Promise ((resolve,reject)=>{
    console.log("aca estoy");
    var sql = "INSERT INTO Cliente (nombres, apellidos, edad, "
        "telefono_movil, direccion, correo, telefono_local, medio_pago, numero_tarjeta,codigo_csc, estado ) VALUES('" + nombre + 
    "', '" +  apellido + "', '"+ edad_per +"', '"+ tele_movil +"', '"+ direcc_per +"', '"+ correo_per +"', '"+ tele_local +"', '"+ pago_medio +"', '"+ numero_tj 
    +"', '"+ codigo +"', '"+ estado+"')";
   
    con.query(sql, (err)=> {

           if (err){reject(`you was a problem **Nombre:${nombre}- Apellido:${apellido}**`);}
           resolve(`****The data: Nombre:${nombre}- Apellido:${apellido},  was inserted ****`);
       
     });
     
    })

}



let deleteClienteDB=(nombres)=>{


    
}

let consultClienteDB=()=>{
    return new Promise((resolve,reject)=>{
    con.query("SELECT * FROM Cliente", function (err, result, fields) {
        console.log("Hola casaa");
        if (err) {reject("you was a problem with the consult")}
        resolve (result)
      });
    })
}



module.exports={
    insertClienteDB,
    deleteClienteDB,
    consultClienteDB
    
}

