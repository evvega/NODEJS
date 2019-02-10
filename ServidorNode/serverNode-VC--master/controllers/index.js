const mysql = require ("mysql");
const express = require("express");
const appServer=express();

const con =require("../models/database")
const modelPerson =require("../models/persona/persona_model")
const modelLavanderia =require("../models/lavanderia/lavanderia_model")
const modelRepartidor =require("../models/repartidor/repartidor_model")
const modelCliente =require("../models/cliente/cliente_model")
const modelTraza =require("../models/traza/traza_model")
const modelPrenda =require("../models/prenda/prenda_model")
const modelEmpleado =require("../models/empleado/empleado_model")


const path = require("path");
const static =require ("static");


const sendFiles=require("../main") 

const  getData=(req,res,next)=>{
    res.send("HolaDesdeControlador")    
}

const sirveJson=(req,res,next)=>{
    res.json([{
        "Nombre_Persona":"Stiven Rojas",
        "Codigo_Persona":123456
    },{
        "Nombre_Persona":"Emily Ratakwosky",
        "Codigo_Persona":567

    }])
}



const dataPet=(req,res,next)=>{
    
  
    }


// PERSONA
const consultaData = async()=>{
       let resultConsultPerson=await modelPerson.consultPersonDB();
       return resultConsultPerson;

}

const contrInsertDataPer = async(nombre, apellido,edad_per,tele_movil, direcc_per, correo_per, tele_local)=>{
     let resultInsertPerson=await modelPerson.insertPersonDB(nombre, apellido,edad_per,tele_movil, direcc_per, correo_per, tele_local);
     return resultInsertPerson;

}

// LAVANDERIA

const consultaDataLavanderia = async()=>{
    let resultConsultLavanderia=await modelLavanderia.consultLavanderiaDB();
    return resultConsultLavanderia;

 }

const contrInsertDataLavanderia = async()=>{
  let resultInsertLavanderia=await modelLavanderia.insertLavanderiaDB();
  return resultInsertLavanderia;

}

// REPARTIDOR

const consultaDataRepartidor = async()=>{
    let resultConsultRepartidor=await modelRepartidor.consultRepartidorDB();
    return resultConsultRepartidor;

 }

const contrInsertDataRepartidor = async()=>{
  let resultInsertRepartidor=await modelRepartidor.insertLavanderiaDB();
  return resultInsertRepartidor;

}

// CLIENTE

const consultaDataCliente = async()=>{
    let resultConsultCliente=await modelCliente.consultClienteDB();
    return resultConsultCliente;

 }

const contrInsertDataCliente = async()=>{
  let resultInsertCliente=await modelCliente.insertClienteDB();
  return resultInsertCliente;

}

// TRAZABILIDAD

const consultaDataTrazabilidad = async()=>{
    let resultConsultTrazabilidad=await modelTraza.consultTrazabilidadDB();
    return resultConsultTrazabilidad;

 }

const contrInsertDataTraza = async()=>{
  let resultInsertTraza=await modelTraza.insertTrazabilidadDB();
  return resultInsertTraza;

}


// PRENDA

const consultaDataPrenda = async()=>{
    let resultConsultPrenda=await modelPrenda.consultPrendaDB();
    return resultConsultPrenda;

 }

const contrInsertDataPrenda = async()=>{
  let resultInsertPrenda=await modelPrenda.insertPrendaDB();
  return resultInsertPrenda;

}


// EMPLEADO

const consultaDataEmpleado = async()=>{
    let resultConsultEmpleado=await modelEmpleado.consulEmpleadoDB();
    return resultConsultEmpleado;

 }

const contrInsertDataEmpleado = async()=>{
  let resultInsertEmpleado=await modelEmpleado.insertEmpleadoDB();
  return resultInsertEmpleado;

}


module.exports={
    getData,
    dataPet,
    consultaData,
    sirveJson,
    contrInsertDataPer,
    contrInsertDataLavanderia,
    consultaDataLavanderia,
    consultaDataRepartidor,
    contrInsertDataRepartidor,
    consultaDataCliente,
    contrInsertDataCliente,
    consultaDataTrazabilidad,
    contrInsertDataTraza,
    contrInsertDataPrenda,
    consultaDataPrenda,
    consultaDataEmpleado,
    contrInsertDataEmpleado
}