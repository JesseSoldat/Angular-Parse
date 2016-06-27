let CharactersService = function($http, PARSE) {

	let url = PARSE.URL + 'classes/Characters';

	this.getCharacters = function() {
		return $http({
			url: url,
			headers: PARSE.CONFIG.headers,
			method: 'GET',
			// cache: true
		});
	}

};

CharactersService.$inject = ['$http', 'PARSE'];

export default CharactersService;