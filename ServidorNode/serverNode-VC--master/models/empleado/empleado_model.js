import Persona from "../persona/persona_model";

class Empleado extends Persona{
    constructor(nombres, apellidos, edad, telefono_movil, direccion, correo, telefono_local, horario, tipo_contrato, salario, fecha_ingreso, cargo){
       super(nombres, apellidos, edad, telefono_movil, direccion, correo, telefono_local);
       this.nombres=nombres;
       this.apellidos=apellidos; 
       this.edad=edad; 
       this.telefono_movil=telefono_movil; 
       this.direccion=direccion; 
       this.correo=correo;
       this.telefono_local=telefono_local;
       this.horario=horario;
       this.tipo_contrato=tipo_contrato;
       this.salario=salario;
       this.fecha_ingreso=fecha_ingreso;
       this.cargo=cargo;

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

    getHorario(){
        return (this.horario);

    }

    setHorario(horario){
        this.horario=horario;
    }

    getContrato(){
        return (this.contrato);

    }

    setContrato(contrato){
        this.contrato=contrato;
    }
    getSalario(){
        return (this.salario);

    }

    setSalario(salario){
        this.salario=salario;
    }
    getFecha(){
        return (this.fecha_ingreso);

    }

    setFecha(fecha_ingreso){
        this.fecha_ingreso=fecha_ingreso;
    }
    getCargo(){
        return (this.cargo);

    }

    setCargo(cargo){
        this.cargo=cargo;
    }
}









const con =require("../database")
const mysql = require ("mysql");


let insertEmpleadoDB=(nombre, apellido, edad_per, tele_movil, direcc_per, correo_per, tele_local, horario_em, tipo_contrato_em, salario_em, fecha_ingreso_em, cargo_em)=>{
   return new Promise ((resolve,reject)=>{
    console.log("aca estoy");
    var sql = "INSERT INTO Empleado (nombres, apellidos, edad, telefono_movil, direccion, correo, telefono_local,horario, tipo_contrato, salario, fecha_ingreso, cargo) VALUES('" + nombre + "', '" +  apellido + "', '"+ edad_per +"', '"+ tele_movil +"', '"+ direcc_per +"', '"+
     correo_per +"', '"+ tele_local +"', '"+ horario_em +"', '"+ tipo_contrato_em +"', '"+ salario_em +"', '"+ fecha_ingreso_em +"', '"+ cargo_em +"')";
   
    con.query(sql, (err)=> {

           if (err){reject(`you was a problem **Nombre:${nombre}- Apellido:${apellido}**`);}
           resolve(`****The data: Nombre:${nombre}- Apellido:${apellido},  was inserted ****`);
       
     });
     
    })

}



let deleteEmpleadoDB=(nombres)=>{


    
}

let consultEmpleadoDB=()=>{
    return new Promise((resolve,reject)=>{
    con.query("SELECT * FROM Empleado", function (err, result, fields) {
        console.log("Hola casaa");
        if (err) {reject("you was a problem with the consult")}
        resolve (result)
      });
    })
}



module.exports={
    insertEmpleadoDB,
    deleteEmpleadoDB,
    consultEmpleadoDB
    
}




