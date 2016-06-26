let CharactersCtrl = function ($scope, CharactersService) {
	// $scope.lannisters = ['Jaime', 'Cersei', 'Tyrion'];

	CharactersService.getCharacters().then( (res) => {
		$scope.characters = res.data.results;
		console.log($scope.characters);

	});



};

CharactersCtrl.$inject = ['$scope', 'CharactersService'];

export default CharactersCtrl;