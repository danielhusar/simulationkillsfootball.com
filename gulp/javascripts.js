'use strict';

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var insert = function (obj, index, item) {
  obj.splice(index, 0, item);
};

module.exports = function(gulp, jsFiles){

  //lint javascript
  var lintFiles = jsFiles.slice(0);
  lintFiles.push('public/js/app/init.js');

  gulp.task('lint', function () {
    return gulp.src(lintFiles).pipe(jshint()).pipe(jshint.reporter(stylish));
  });

  gulp.task('scripts', function () {
    gulp.src(scriptFiles)
      .pipe(concat('app.js'))
      .pipe(rename('app.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('public/js/app'));
  });

};
