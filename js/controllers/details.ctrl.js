let DetailsCtrl = function($scope, DetailsService, $stateParams) {

	let id = $stateParams.characterId;

	DetailsService.getDetails(id).then( (res) => {
		// console.log(res.data);
		$scope.character = res.data;
	})
};

DetailsCtrl.$inject = ['$scope', 'DetailsService', '$stateParams'];

export default DetailsCtrl;