var argv = require('yargs').argv;

global.Promise = require('bluebird').Promise;

var config = require('./sorc.config');
config.env = argv._[0];

require('sorc')(config, 'Server');