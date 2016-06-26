let HomeCtrl = function ($scope, HomeService) {
	
	HomeService.getImages().then ( (res) => {
		$scope.images = res.data.results;
		console.log($scope.images);
	})
};

HomeCtrl.$inject = ['$scope', 'HomeService'];

export default HomeCtrl;

