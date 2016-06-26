let AddCtrl = function ($scope, AddService) {

$scope.addCharacter = (obj) => {
	AddService.addCharacter(obj).then( (res) => {
		
		alert('You Created ' + obj.firstName + " " + obj.lastName)
		$scope.character = {};
	})
};


};

AddCtrl.$inject = ['$scope', 'AddService'];

export default AddCtrl;