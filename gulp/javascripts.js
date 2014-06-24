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

  gulp.task('lint', function () {
    return gulp.src(jsFiles).pipe(jshint()).pipe(jshint.reporter(stylish));
  });

  //lint javascript
  var scriptFiles = jsFiles.slice(0);
  scriptFiles.push('public/js/libraries/jquery.mousewheel.js');
  scriptFiles.push('public/js/libraries/jquery.slidescroll.js');

  console.log(scriptFiles);

  gulp.task('scripts', function () {
    gulp.src(scriptFiles)
      .pipe(concat('a.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('public/js'));
  });

};
