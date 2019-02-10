class Traza{
    constructor(id_lavanderia, id_repartidor, id_prenda, id_cliente, fecha, accion, reportero){ 
            this.id_lavanderia=id_lavanderia;
            this.id_repartidor=id_repartidor; 
            this.id_prenda=id_prenda; 
            this.id_cliente=id_cliente; 
            this.fecha=fecha; 
            this.accion=accion;
            this.reportero=reportero;
        
    }

    
    getFecha(){
        return (this.fecha);

    }

    setFecha(fecha){
        this.fecha=fecha;
    }
    
    getAccion(){
        return (this.accion);
    }

    setAccion(accion){
        this.accion = accion;
    }
    getReportero(){
        return (this.reportero);
    }

    setReportero(reportero){
        this.reportero = reportero;
    }
}

const con =require("../database")
const mysql = require ("mysql");


let insertTrazabilidadDB=(lavanderia,repartidor, prenda, cliente, date, action, reporter)=>{
   return new Promise ((resolve,reject)=>{
    console.log("aca estoy");
    var sql = "INSERT INTO Traza (id_lavanderia, id_repartidor, id_prenda, id_cliente, fecha, accion, reportero) VALUES('" + lavanderia + 
    "', '" +  repartidor + "', '"+ prenda +"', '"+ cliente +"', '"+ date +"', '"+ action +"', '"+ reporter +"')";
   
    con.query(sql, (err)=> {

           if (err){reject(`you was a problem **Accion:${action}- Reporter:${reporter}**`);}
           resolve(`****The data: Accion:${action}- Reporter:${reporter},  was inserted ****`);
       
     });
     
    })

}



let deleteTrazabilidadDB=(nombres)=>{


    
}

let consultTrazabilidadDB=()=>{
    return new Promise((resolve,reject)=>{
    con.query("SELECT * FROM Traza", function (err, result, fields) {
        console.log("Hola casaa");
        if (err) {reject("you was a problem with the consult")}
        resolve (result)
      });
    })
}



module.exports={
    insertTrazabilidadDB,
    deleteTrazabilidadDB,
    consultTrazabilidadDB
    
}