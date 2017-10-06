
// Controller de AngularJS en formato  
//  a AngularJS 1.2. Según la guia de stilos de John PaPa


// Inyectamos el scope unicamente para mostrarlo por consol
AppController.$inject =['$scope'];          // nombres de los elementos que quiero injectar
function AppController ($scope){ 
    this.sTitulo='Curso de AngularJs y Bootstrap'; 
    this.sAutor ='Jose Vicente Garcia-Roves';
    this.inputNombre ="PEPITO";

    console.log(this)
    console.log($scope)

    this.borrar = function () {

        this.inputNombre = '';

        console.info("Sea pulsado el boton"); 
        console.log(this);
    }
}


angular.module("appMain",[]).controller("AppController",AppController)


/*(function() {
    'use strict';
})();
*/
/*
angular
.module('Module')
.component('Component', {
    template:'htmlTemplate',
    //templateUrl: 'templateUrl',
    controller: ControllerController,
    controllerAs: '$ctrl',
    bindings: {
        Binding: '=',
    },
});

ControllerController.$inject = ['dependency1'];
function ControllerController(dependency1) {
var $ctrl = this;
*/


////////////////
/*
$ctrl.$onInit = function() { };
$ctrl.$onChanges = function(changesObj) { };
$ctrl.$onDestroy = function() { };  
}*/


//.controller()  se pueden poner mas controller si queremos o necesitamos

//angular.module("appMain")  -->     // no instancia el modulo

//ng-init="sTitulo='Curso de AngularJs y Bootstrap'; sAutor ='Jose Vicente Garcia-Roves' "
