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
		.state('root.add', {
			url: '/add',
			controller: 'AddCtrl',
			templateUrl: 'templates/add.html'
		});

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;