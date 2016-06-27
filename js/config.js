let config = function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			templateUrl: 'templates/layout.html'
		})
		.state('root.home', {
			url: '/',
			controller: 'HomeCtrl',
			templateUrl: 'templates/home.html'
		})
		.state('root.characters', {
			url: '/characters',
			controller: 'CharactersCtrl',
			templateUrl: 'templates/characters.html'
		})
		.state('root.details', {
			url: '/details/:characterId',
			controller: 'DetailsCtrl',
			templateUrl: 'templates/details.html'
		})
		.state('root.add', {
			url: '/add',
			controller: 'AddCtrl',
			templateUrl: 'templates/add.html'
		})
		.state('root.edit', {
			url: '/edit/:characterId',
			controller: 'EditCtrl',
			templateUrl: 'templates/edit.html'
		})
		.state('root.delete', {
			url: '/delete/:characterId',
			controller: 'DeleteCtrl',
			templateUrl: 'templates/delete.html'

		})
		;

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;