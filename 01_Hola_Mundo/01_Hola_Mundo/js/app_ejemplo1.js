
// Controller de AngularJS en formato original
// anterior a AngularJS 1.2

angular.module("appMain",[]).controller("AppController",function($scope){ 
    $scope.sTitulo='Curso de AngularJs y Bootstrap'; 
    $scope.sAutor ='Jose Vicente Garcia-Roves';
    $scope.inputNombre ="PEPITO";  

    console.log($scope)

    $scope.borrar = function () {

        $scope.inputNombre = '';

        console.info("Sea pulsado el boton"); 
        console.log($scope);
    }
})



//.controller()  se pueden poner mas controller si queremos o necesitamos

//angular.module("appMain")  -->     // no instancia el modulo

//ng-init="sTitulo='Curso de AngularJs y Bootstrap'; sAutor ='Jose Vicente Garcia-Roves' "
