let EditCtrl = function($scope, EditService, $stateParams, $state) {

	let id = $stateParams.characterId;
	

	$scope.editCharacter = function(obj){
		EditService.editCharacter(obj, id).then( (res) => {
			$scope.character = {};

			console.log('You have updated ' + obj.firstName + ' ' + obj.lastName);
            
        	$state.go('root.characters');


		})

	}
};

EditCtrl.$inject = ['$scope', 'EditService', '$stateParams', '$state'];

export default EditCtrl;