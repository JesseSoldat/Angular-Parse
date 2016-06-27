let DeleteService = function($http, PARSE) {

	let url = PARSE.URL + 'classes/Characters';


	this.deleteCharacter = function(obj) {
		let id = obj.characterId
		console.log(id);
		return $http.delete(url + '/' + id, PARSE.CONFIG)
	
	}
};

DeleteService.$inject = ['$http', 'PARSE'];

export default DeleteService;