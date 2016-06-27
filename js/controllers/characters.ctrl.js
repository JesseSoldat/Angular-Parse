let CharactersCtrl = function ($scope, CharactersService) {
	// $scope.lannisters = ['Jaime', 'Cersei', 'Tyrion'];
	

	CharactersService.getCharacters().then( (res) => {
		
		$scope.characters = res.data.results;
		

	});



};

CharactersCtrl.$inject = ['$scope', 'CharactersService'];

export default CharactersCtrl;