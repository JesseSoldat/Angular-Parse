let EditService = function($http, PARSE) {

	let url = PARSE.URL + 'classes/Characters';

	this.editCharacter = function(obj, id) {
		return $http.put(url + '/' + id, obj, PARSE.CONFIG);
	};
};

EditService.$inject = ['$http', 'PARSE'];

export default EditService;