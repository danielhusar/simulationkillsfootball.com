'use strict';

var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');

module.exports = function(gulp){

  //sprites
  gulp.task('sprite', function () {
    var icons = gulp.src('assets/icons/*.png').pipe(spritesmith({
      imgName: 'icons.png',
      imgPath: '../img/icons.png',
      cssName: 'icons.less',
      engine: 'phantomjs',
      algorithm: 'binary-tree',
      cssTemplate: 'css.mustache'
    }));
    icons.img.pipe(gulp.dest('public/img/'));
    icons.css.pipe(gulp.dest('less/base/'));

    var dropdowns = gulp.src('assets/dropdown/*.png').pipe(spritesmith({
      imgName: 'dropdowns.png',
      imgPath: '../img/dropdowns.png',
      cssName: 'dropdowns.less',
      engine: 'phantomjs',
      algorithm: 'top-down',
      cssTemplate: 'css.mustache'
    }));
    dropdowns.img.pipe(gulp.dest('public/img/'));
    dropdowns.css.pipe(gulp.dest('less/base/'));
  });

  gulp.task('imagemin', function () {
    gulp.src('public/img/*.png')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img/'));
  });

};
