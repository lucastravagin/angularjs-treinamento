(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
		
    $scope.lista = ["Lucas Travagin", "Paulo Jose", "Francisco Pereira", "Alexandre Amadeu"]

    $scope.professores = [
        {nome: "Lucas Travagin Pereira", idade: 22, curso: 'ADS'},
        {nome: "Lucas Travagin Pereira", idade: 22, curso: 'ADS'},
        {nome: "Lucas Travagin Pereira", idade: 22, curso: 'ADS'}
    ]

}]);





})();
