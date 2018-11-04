var app = angular.module('appEventos', []);
app.controller('ctrlEventos', function($http,$scope) {
    $scope.eventos = ['hola','chao'];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/EventosByTipo/LLS/1'
      }).then(function successCallback(response) {
          
          $scope.eventos=response.data
          console.log($scope.eventos)
        }, function errorCallback(response) {
            console.log(response)
        });
    
        $scope.getmes = function(mes) {
           if(mes!== undefined){
            switch (mes) {
                case 1:
                    day = "Enero";
                    break;
                case 2:
                    day = "Febrero";
                    break;
                case 3:
                    day = "Marzo";
                    break;
                case 4:
                    day = "Abril";
                    break;
                case 5:
                    day = "Mayo";
                    break;
                case 6:
                    day = "Junio";
                    break;
                    case 7:
                    day = "Julio";
                    break;
                    case 8:
                    day = "Agosto";
                    break;
                    case 9:
                    day = "Septiembre";
                    break;
                    case 10:
                    day = "Octubre";
                    break;
                    case 11:
                    day = "Noviembre";
                    break;
                    case 12:
                    day = "Diciembre";
                    break;
            }
            return day;
           }
        
    }
});

var app = angular.module('app', ['appEventos']);
