let HomeService = function($http, PARSE) {

	let url = PARSE.URL + 'classes/images';

	this.getImages = function() {
		return $http({
			url: url,
			headers: PARSE.CONFIG.headers,
			method: 'GET',
			cache: true
		});
	}

};

HomeService.$inject = ['$http', 'PARSE'];

export default HomeService;