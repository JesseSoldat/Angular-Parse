let AddService = function($http, PARSE) {

	let url = PARSE.URL + 'classes/Characters';

	let Character = function(obj) {
		this.firstName = obj.firstName;
		this.lastName = obj.lastName;
		this.url = obj.url;
	};
	this.addCharacter = function(obj) {
		let ch = new Character(obj);
		return $http.post(url, ch, PARSE.CONFIG);
	}

};
AddService.$inject = ['$http', 'PARSE'];

export default AddService;