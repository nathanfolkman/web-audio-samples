const gulp =          require('gulp');
const concatCss =     require('gulp-concat-css');
const runSequence =   require('run-sequence');

gulp.task('asset-lib', () => {
  return gulp.src('node_modules/lit-html/**/*')
      .pipe(gulp.dest('dist/lit-html/'));
});

gulp.task('asset-style', () => {
  return gulp.src('src/*.css')
    .pipe(concatCss('was-styles.css'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', () => {
  runSequence('asset-lib', 'asset-style');
});