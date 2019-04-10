var gulp = require('gulp');
var watch = require('gulp-watch');


var sass = require('gulp-ruby-sass');
var sass_src_folder = './smacss/**/*.sass';
var sass_dest_folder = './_public/styles';

gulp.task('sass', function(){
  return sass(sass_src_folder)
          .pipe(gulp.dest(sass_dest_folder));
});

gulp.task('watch', function(){
  gulp.watch(sass_src_folder, ['sass']);
});
