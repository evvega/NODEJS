class Lavanderia{
    constructor(nit, razon_social, direccion, telefono, latitud, longitud, horario){
       this.nit=nit;
       this.razon_social=razon_social; 
       this.direccion=direccion; 
       this.telefono=telefono;  
       this.latitud=latitud; 
       this.longitud=longitud;
       this.horario=horario;

    }

    getNit(){
        return (this.nit);

    }

    setNit(nit){
        this.nit=nit;

    }

    getRazonSocial(){
        return (this.razon_social);

    }

    setRazonSocial(razon_social){
        this.razon_social=razon_social;
    }

    getLatitud(){
        return (this.latitud);

    }

    setLatitud(latitud){
        this.latitud=latitud;
    }

    getLongitud(){
        return (this.longitud);

    }

    setLongitud(longitud){
        this.il=longitud;
    }
    getDireccion(){
        return (this.direccion);

    }

    setDireccion(direccion){
        this.direccion=direccion;
    }

    getHorario(){
        return (this.horario);

    }

    setHorario(horario){
        this.horario=horario;
    }

    getTelefonoLocal(){
        return (this.telefono);

    }

    setTelefonoLocal(telefono_local){
        this.telefono=telefono_local;
    }

}

const con =require("../database")
const mysql = require ("mysql");

let insertLavanderiaDB=(nit_lav, razon_social_lav, direccion_lav, telefono_lav, latitud_lav, longitud_lav, horario_lav)=>{
   return new Promise ((resolve,reject)=>{
       var sql = "INSERT INTO Lavanderia (nit, razon_social, direccion, telefono, latitud, longitud, horario) VALUES('" + nit_lav + "', '" +  razon_social_lav + "', '"+ direccion_lav +"', '"+ telefono_lav +"', '"+ longitud_lav +"', '"+ latitud_lav +"', '"+ horario_lav +"')";
       con.query(sql, (err)=> {
           if (err){reject(`you was a problem **Nit:${nit}- Razon social:${razon_social}**`);}
           resolve(`****The data: Nit:${nit}- Razon social:${razon_social},  was inserted ****`);
       
     });
     
    })

}


let deleteLavanderiaDB=(nombres)=>{


    
}

let consultLavanderiaDB=()=>{
    return new Promise((resolve,reject)=>{
    con.query("SELECT * FROM Lavanderia", function (err, result, fields) {
        if (err) {reject("you was a problem with the consult")}
        resolve (result)
      });
    })
}



module.exports={
    insertLavanderiaDB,
    deleteLavanderiaDB,
    consultLavanderiaDB
    
}




