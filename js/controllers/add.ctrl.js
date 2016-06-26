let AddCtrl = function ($scope) {

$scope.addCharacter = (obj) => {
	console.log(obj);
};


};

AddCtrl.$inject = ['$scope'];

export default AddCtrl;