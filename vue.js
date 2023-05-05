new Vue({
    el: '#eventos',
    data: {
        x: 0,
        y: 0
       
        //contador:0
    },
    methods: {
        mostrarUbicacion: function (evento){
            this.x= evento.clientX;
            this.y= evento.clientY;
        }
       
        /* alerta: function(mensaje){
            alert(mensaje);
        } */
        
               
        /*sumarUno: function (){
            this.contador += 1;
        },
        restarUno: function (){
            this.contador -= 1;
        } */
    }
})