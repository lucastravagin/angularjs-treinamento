(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  
    $scope.professores = {};



    $http.get('json/profesores.json')
        .then((res) => {
            console.log(res)
            $scope.professores = res.data.profesores
        }).catch((err)=> {
            console.log(err)
        })



}]);





})();
