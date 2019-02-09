//Este es el archivo principal de las rutas.  

const express = require("express");
const router = express.Router();
const controllers=require("../controllers/index")
const mysql = require ("mysql");
//const path = require('path');



router.get ('/login',controllers.dataPet);

router.get('/pruebaJsonUE',controllers.sirveJson);

router.get('/', controllers.getData);

router.get('/consultarDB', (req,res,next)=>{
    controllers.consultaData().then(result=>{
      res.send(result)
      console.log("**The consult was successful**")
    }).catch(err=>{
        console.log(err)
    })

})


router.post('/tryPost',(req,res,next)=>{
    console.log(req);
    controllers.contrInsertDataPer(req.body.nombre, req.body.apellido, req.body.edad_per, req.body.tele_movil,
        req.body.direcc_per, req.body.correo_per, req.body.tele_local).then(result=>{
        console.log(result)
    }).catch(err=>{
        console.log(err)
    })


})


router.post('/tryPostLava',(req,res,next)=>{
    console.log(req);
    controllers.contrInsertDataLavanderia(req.body.nit_lav, nit.body.razon_social_lav, 
        nit.body.direccion_lav, req.body.telefono_lav, req.body.latitud_lav, 
        req.body.longitud_lav,req.body.horario_lav).then(result=>{
        console.log(result)
    }).catch(err=>{
        console.log(err)
    })
})
    
 

router.get('/tryEjs', (req,res)=>{
    res.render('firstEjs')
    })

    
    






module.exports=router; 