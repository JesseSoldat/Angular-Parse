import angular from 'angular';
import 'angular-ui-router';
import $ from 'jquery';
import _ from 'underscore';


//Controllers
import HomeCtrl from './controllers/home.ctrl'
import CharactersCtrl from './controllers/characters.ctrl';
import AddCtrl from './controllers/add.ctrl';
import EditCtrl from './controllers/edit.ctrl';


//SERVICES
import HomeService from './services/home.service';
import CharactersService from './services/characters.service';
import AddService from './services/add.service';
import EditService from './services/edit.service';
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
	.controller('AddCtrl', AddCtrl)
	.controller('EditCtrl', EditCtrl)
	.service('HomeService', HomeService)
	.service('CharactersService', CharactersService)
	.service('AddService', AddService)
	.service('EditService', EditService)
	;
