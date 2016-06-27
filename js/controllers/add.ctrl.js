let AddCtrl = function ($scope, AddService, $state) {

$scope.addCharacter = (obj) => {
	AddService.addCharacter(obj).then( (res) => {
		$scope.character = {};
		
		console.log('You Created ' + obj.firstName + " " + obj.lastName)

        $state.go('root.characters');



	})
};


};

AddCtrl.$inject = ['$scope', 'AddService', '$state'];

export default AddCtrl;