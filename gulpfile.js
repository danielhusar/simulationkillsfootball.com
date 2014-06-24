'use strict';

// Include gulp
var gulp = require('gulp');

//js files
var jsFiles = [
  'public/js/app.js'
  ];


// Include Our Plugins
require('./gulp/javascripts.js')(gulp, jsFiles);
require('./gulp/css.js')(gulp);
require('./gulp/dev.js')(gulp, jsFiles);
require('./gulp/img.js')(gulp);

//tasks aliases
gulp.task('server', ['watch']);
gulp.task('default', ['less', 'scripts']);
