/*
** <Dev> enviroment is set by defaut
*/

var env = {};

env.dev = {
	'httpPort': process.env.PORT || 4242,
	'httpsPort': process.env.PORT || 4000,
	'envName': 'dev'
};

env.prod = {
	'httpPort': process.env.PORT || 1234,
	'httpsPort': process.env.PORT || 4321,
	'envName': 'prod'
};

var currEnv = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
var envToExp = typeof(env[currEnv]) == 'object' ? env[currEnv] : env.dev;

module.exports = envToExp;