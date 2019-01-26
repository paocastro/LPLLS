var app = angular.module('appEventos', []);
app.controller('ctrlEventos', function ($http, $scope) {
    $scope.eventos = [];

    $http({
        method: 'GET',
        url: 'http://localhost:5002/PageController/getEventos/LLS/EVE'
    }).then(function successCallback(response) {

        if (response.data.Respuesta.EVENTOS !== undefined) {
            var eventos = JSON.stringify(response.data.Respuesta)
            eventos = eventos.split('@').join('')
            eventos = JSON.parse(eventos)
            //var desired = eventos.replace(/[^\w\s]/gi, '')
            //response.data.Respuesta.EVENTOS=eventos
            if (eventos.EVENTOS.length === undefined) {
                $scope.eventos = new Array(eventos.EVENTOS);
            } else {
                $scope.eventos = eventos.EVENTOS;
            }

        }
        console.log($scope.eventos)
    }, function errorCallback(response) {
        console.log(response)
    });

    $scope.getHora = function (fecha) {
        console.log(fecha)
        var hora;
        var minutos;
        var time= fecha.substring(11, 16);
        hora= time.substring(0,2)
        minutos=time.substring(3,6)
        console.log(minutos)
        if(parseInt(hora)>12){
            hora=parseInt(hora)-12;
            time= hora + ":" + minutos + " P.M"
        }else{
            time= hora + ":" + minutos + " A.M"
        }
        
        return time;
        //var time = fecha.toLocaleTimeString();
        
    }
    $scope.getmes = function (mes) {
        
        if (mes !== undefined) {
            switch (mes) {
                case "1":
                    return "Enero";
                    break;
                case "2":
                    return "Febrero";
                    break;
                case "3":
                    return "Marzo";
                    break;
                case "4":
                    return "Abril";
                    break;
                case "5":
                    return "Mayo";
                    break;
                case "6":
                    return "Junio";
                    break;
                case "7":
                    return "Julio";
                    break;
                case "8":
                    return "Agosto";
                    break;
                case "9":
                    return "Septiembre";
                    break;
                case "10":
                    return "Octubre";
                    break;
                case "11":
                    return "Noviembre";
                    break;
                case "12":
                    return "Diciembre";
                    break;
                    
            }
           
        }

    }
});

var app = angular.module('app', ['appEventos']);
