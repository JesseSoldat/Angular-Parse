let DetailsService = function($http, PARSE) {

	let url = PARSE.URL + 'classes/Characters';

	this.getDetails = function(id) {
		return $http({
			url: url + '/' + id,
			headers: PARSE.CONFIG.headers,
			method: 'GET',
			cache: true
		});
	};
};

DetailsService.$inject = ['$http', 'PARSE'];

export default DetailsService;