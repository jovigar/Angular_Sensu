
// Controller de AngularJS en formato original
//  AngularJS 1.2. Aproximadamente segun la guía de estilos de John Papa

angular.module("appMain")
.controller("AppController",'AppController')

AppController.$inject =['$scope'];   

  function AppController ($scope) {}  
    this.sTitulo='Curso de AngularJs y Bootstrap'; 
    this.sAutor ='Jose Vicente Garcia-Roves';
    this.inputNombre ="PEPITO";

    console.log(this)

    this.borrar = function () {

        this.inputNombre = '';

        console.info("Sea pulsado el boton"); 
        console.log(this);
    }
})


