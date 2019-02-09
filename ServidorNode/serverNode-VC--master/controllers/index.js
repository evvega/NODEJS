const mysql = require ("mysql");
const express = require("express");
const appServer=express();

const con =require("../models/database")
const modelPerson =require("../models/persona/persona_model")
const modelLavanderia =require("../models/lavanderia/lavanderia_model")
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


    const consultaData = async()=>{
       let resultConsultPerson=await modelPerson.consultPersonDB();
       return resultConsultPerson;

    }

const contrInsertDataPer = async(nombre, apellido,edad_per,tele_movil, direcc_per, correo_per, tele_local)=>{
     let resultInsertPerson=await modelPerson.insertPersonDB(nombre, apellido,edad_per,tele_movil, direcc_per, correo_per, tele_local);
     return resultInsertPerson;

}


const consultaDataLavanderia = async()=>{
    let resultConsultLavanderia=await modelLavanderia.consultLavanderiaDB();
    return resultConsultLavanderia;

 }

const contrInsertDataLavanderia = async()=>{
  let resultInsertLavanderia=await modelLavanderia.insertLavanderiaDB();
  return resultInsertLavanderia;

}






   


module.exports={
    getData,
    dataPet,
    consultaData,
    sirveJson,
    contrInsertDataPer,
    contrInsertDataLavanderia,
    consultaDataLavanderia    
}