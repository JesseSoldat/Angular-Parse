import angular from 'angular';
import 'angular-ui-router';
import $ from 'jquery';
import _ from 'underscore';


//Controllers
import HomeCtrl from './controllers/home.ctrl'
import CharactersCtrl from './controllers/characters.ctrl';
import DetailsCtrl from './controllers/details.ctrl';
import AddCtrl from './controllers/add.ctrl';
import EditCtrl from './controllers/edit.ctrl';
import DeleteCtrl from './controllers/delete.ctrl';


//SERVICES
import HomeService from './services/home.service';
import CharactersService from './services/characters.service';
import DetailsService from './services/details.service';
import AddService from './services/add.service';
import EditService from './services/edit.service';
import DeleteService from './services/delete.service';


//CONFIG
import config from './config';

angular
	.module('app', ['ui.router'])
	.constant('PARSE', {
		URL: 'https://api.parse.com/1/',
		CONFIG: {
			headers: {
			 'X-Parse-Application-Id': 'stcwYwBoUL7sIj53Mh2jmzikY3ysNHoleEByhcKY',
	        'X-Parse-REST-API-Key': 'qYKCte8cRt7nzErizmUrPGk3mLh5XhjWautUIc2O'
			}
		}
	})
	.config(config)
	.controller('HomeCtrl', HomeCtrl)
	.controller('CharactersCtrl', CharactersCtrl)
	.controller('DetailsCtrl', DetailsCtrl)
	.controller('AddCtrl', AddCtrl)
	.controller('EditCtrl', EditCtrl)
	.controller('DeleteCtrl', DeleteCtrl)


	.service('HomeService', HomeService)
	.service('CharactersService', CharactersService)
	.service('DetailsService', DetailsService)
	.service('AddService', AddService)
	.service('EditService', EditService)
	.service('DeleteService', DeleteService)
	;
