'use strict';

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var insert = function (obj, index, item) {
  obj.splice(index, 0, item);
};

module.exports = function(gulp) {

  gulp.task('lint', function() {
    return gulp.src('public/js/app.js').pipe(jshint()).pipe(jshint.reporter(stylish));
  });

  //lint javascript
  var scriptFiles = [];
  scriptFiles.push('public/js/libraries/jquery.mousewheel.js');
  scriptFiles.push('public/js/libraries/jquery.slidescroll.js');
  scriptFiles.push('public/js/app.js');

  gulp.task('scripts', function() {
    gulp.src(scriptFiles)
      .pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('public/js'));
  });

};
