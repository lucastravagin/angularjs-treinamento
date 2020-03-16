var app = angular.module('universidadeApp', [])


app.controller('professorCtrl', function($scope)  {
	$scope.professor = profesorData;
	$scope.editando = {}
	$scope.mostrarCaixa = false

	$scope.EditarProfessor = () => {
		angular.copy($scope.professor, $scope.editando)
		$scope.mostrarCaixa = true
	}

	$scope.SalvarProfessor = () => {
		angular.copy($scope.editando, $scope.professor)
		// $scope.professor = $scope.editando
		 $scope.editando = {}
		 $scope.mostrarCaixa = false
	}

	$scope.Cancelar = () => {
		$scope.editando = {}
		$scope.mostrarCaixa = false
	}
})

var profesorData = {
	nome: "Lucas Travagin Pereira",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	idade: 22,
	foto: "img/juancarlos.jpg"
}