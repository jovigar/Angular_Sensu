
// Controller de AngularJS 1.5 Tood Motto ES&




  class AppController  {

    constructor ($scope) {             // Lo reservamos para inyeccion de dependencias
           this.$scope = $scope;     // seria prescindible a no ser que quiera usar el $scope para algo    

    }
    $onInit () {              // para variables del programa. Al inicio de la vida del controller se ejecuta onInit

        this.sTitulo='Curso de AngularJs y Bootstrap'; 
        this.sAutor ='Jose Vicente Garcia-Roves';
        this.inputNombre ="PEPITO";
        console.log(this)

    }
 

    borrar () {

        this.inputNombre = '';

        console.info("Sea pulsado el boton"); 
        console.log(this);
    }
}

angular.module("appMain")
.controller("AppController",AppController)

