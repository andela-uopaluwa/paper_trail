const gulp = require('gulp');
const connect = require('gulp-connect');
const sass = require('gulp-sass');

//TODO: fill in gulp tasks
gulp.task('sass', function() {
  return gulp.src('public/sass/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('public/dist'))
});

gulp.task('sass:watch', function() {
  gulp.watch('public/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
