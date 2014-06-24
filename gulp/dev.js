'use strict';

var replace = require('gulp-replace');
var express = require('express');
var browser = require('open');
var directory = require('serve-index');

module.exports = function(gulp){

  //watch Files For Changes
  gulp.task('watch', function () {
    var app = express();
    app.use(express.static('./public'));
    app.use(directory('./public'));
    app.listen(8090);
    browser('http://localhost:8090', 'Google Chrome');

    gulp.watch(['less/*.less', 'less/**/*.less', 'less/**/**/*.less', 'less/**/**/**/*.less'], ['less']);
    gulp.watch('public/js/app.js', ['lint']);
  });


};
