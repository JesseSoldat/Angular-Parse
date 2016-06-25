import angular from 'angular';
import 'angular-ui-router';


import $ from 'jquery';
import _ from 'underscore';

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
	;
