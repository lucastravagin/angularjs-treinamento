(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK

  $scope.geo = {}
  
  $http.jsonp("http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK")
    .then((res) => {
      $scope.geo = res.data
    })


}]);





})();
