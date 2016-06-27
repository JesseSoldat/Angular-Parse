let DeleteCtrl = function($scope, DeleteService, $stateParams, $state){

	let id = $stateParams;
	DeleteService.deleteCharacter(id).then( (res) => {

		setTimeout(function(){
			$state.go('root.characters');
		},2);
		
	});
};

DeleteCtrl.$inject = ['$scope', 'DeleteService', '$stateParams', '$state'];

export default DeleteCtrl;