'use strict';
pptpApp.controller('baseController', ['$scope','$http',function($scope,$http) {
	
	$scope.foo = "hola mundo";

	$scope.Quesions = [{text:'primera'},{text:'segunda'}]
	
	$scope.tipoGrupo = [{text:'Grupo Local',id:1},{text:'Grupo Territorial',id:2},{text:'Grupo de Proy. Territorial',id:3}]

	$scope.valid = false;
	
	$scope.saveGroup = function(){
		console.log($scope.tipos_grupo)
		console.log($scope.survey)
		if ($scope.group.fecha > 10)
			$scope.valid = true
		else
			$scope.valid = false;
		$http.get('ajax/guardar.jsp?nombre='+$scope.group.nombreGrupo,{}).then(function(response){
			console.log(response.hizo);
			$scope.mensajeResultado = "éxito amigos! lo lograron";
		},function(errorCallback){
			$scope.mensajeResultado =" me equivoqué y somos malos";
			console.log(errorCallback);
		})
	}

	$scope.myDate = new Date();

	$scope.maxDate = new Date(
		$scope.myDate.getFullYear(),
		$scope.myDate.getMonth(),
		$scope.myDate.getDate()
	);

	$scope.minDate = new Date("December 01, 2016 01:15:00");

	console.log($scope.maxDate)




	$scope.allStates=[{"estado_id":1,"nombre":"Veracruz","slug":"veracruz"},
		{"estado_id":2,"nombre":"Chiapas","slug":"chiapas"},
		{"estado_id":3,"nombre":"Oaxaca","slug":"oaxaca"},
		{"estado_id":4,"nombre":"Puebla","slug":"puebla"},
		{"estado_id":5,"nombre":"Estado de México","slug":"edomex"}]




}]);

pptpApp.config(['$mdDateLocaleProvider', function($mdDateLocaleProvider) {
	$mdDateLocaleProvider.months = ['enero', 'febrero', 'marzo', 'abril', 'mayo','junio','julio','agosto','septiembre', 'octubre', 'noviembre','diciembre'];
	$mdDateLocaleProvider.shortMonths = ['ene', 'feb', 'mar', 'abr', 'may','jun','jul','ago','sep', 'oct', 'nov','dic'];
	$mdDateLocaleProvider.days = ['lunes', 'martes', 'miércoles','jueves','viernes','sábado','domingo'];
	$mdDateLocaleProvider.shortDays = ['lu', 'ma', 'mi','ju','vi','sa','do'];

	$mdDateLocaleProvider.formatDate = function(date) {
		return date ? moment(date).format('DD-MM-YYYY') : '';
	};

	
}]);

