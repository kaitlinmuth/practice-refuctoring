global.argv = require('minimist')(process.argv.slice(2));

require('babel-register');
require('./tools/tasks/Gulpfile');
