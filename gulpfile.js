'use strict';

// Include gulp
var gulp = require('gulp');

// Include Our Plugins
require('./gulp/javascripts.js')(gulp);
require('./gulp/css.js')(gulp);
require('./gulp/dev.js')(gulp);
require('./gulp/img.js')(gulp);

//tasks aliases
gulp.task('server', ['watch']);
gulp.task('default', ['less', 'scripts']);
