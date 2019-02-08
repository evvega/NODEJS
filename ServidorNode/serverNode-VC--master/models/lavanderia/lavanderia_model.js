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

    getCorreo(){
        return (this.correo);

    }

    setCorreo(correo){
        this.correo=correo;
    }

    getTelefonoLocal(){
        return (this.telefono);

    }

    setTelefonoLocal(telefono_local){
        this.telefono=telefono_local;
    }

}
