const app = Vue.createApp({
    data() {
        return {
            
            nombreUsuario: "Jane Done", 
            email: "jane_doe@email.com",
            fechaNacimiento:"01/05/1996",
            telefono: "918-936-9585",
            cuidad:"Tokyo, Japón",
            trabajo: "Lawn N",
            botonSeguir: "Seguir",
            botonMeGusta: "Me gusta",
            cantidadMeGusta: 200,
            usuario: "",
            mensajeIngreso:"",
            mensajeComentarios: "",
            comentarios: [],
            ingresoComentario: false,
            comentario: ""
           
        
        }

    },
    
    methods: {
        cambiarEstado() {
            if (this.botonSeguir === "Seguir") {
                this.botonSeguir = "Dejar de Seguir";
            } else {
                this.botonSeguir = "Seguir";
            }
        
    },

    DarMeGusta() {
            
        if(this.botonMeGusta==="Me gusta"){
            this.botonMeGusta="No me gusta";
            this.cantidadMeGusta++;
        }
        else{
            this.botonMeGusta="Me gusta";
            this.cantidadMeGusta--;
        }

    },

    logear() {
        if (this.usuario === "") {
            this.mensajeIngreso = "por favor logearse";
            this.ingresoComentario = false;
        } else {
            this.mensajeIngreso = "";
            this.ingresoComentario = true;
            localStorage.setItem("usuario", this.usuario);
        }
    },

    dejarComentario() {
        if (!this.ingresoComentario) {
            this.mensajeComentarios = "por favor logearse";
            this.mensajeUsuario = "";
            return;
        }

        if (this.comentario === "") {
            this.mensajeComentarios = "por favor ingresar comentario";
            this.mensajeUsuario = "";
            return;
        }

        this.mensajeComentarios = "";
        this.mensajeUsuario = "";
        this.comentarios.push({ usuario: this.usuario, comentario: this.comentario, fixed: false });
        this.comentario = "";
        },
        eliminar(index) {
        this.comentarios.splice(index, 1);
        }
    },
    mounted() {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
        this.usuario = usuario;
        this.ingresoComentario = true;
    }
}



});

app.mount("#app")