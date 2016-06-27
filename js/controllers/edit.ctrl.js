let EditCtrl = function($scope, EditService, $stateParams) {

	let id = $stateParams.characterId;
	

	$scope.editCharacter = function(obj){
		// console.log(obj);
		// console.log(id);
		EditService.editCharacter(obj, id).then( (res) => {
			alert('You have updated ' + obj.firstName + ' ' + obj.lastName);
		})

	}
};

EditCtrl.$inject = ['$scope', 'EditService', '$stateParams'];

export default EditCtrl;