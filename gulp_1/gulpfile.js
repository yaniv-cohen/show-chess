const gulp = require('gulp');
const clean = require('gulp-clean');

// Copies files
gulp.task('copy', () => {
  return gulp.src(['./src/index.html', './src/favicon.ico', './src/styles.css'])
    .pipe(gulp.dest('./dist'));
});

// Removes files
gulp.task('remove', () => {
  return gulp.src('./dist', { allowEmpty: true }) // allowEmpty lets it work, if './dist' doesn't exist
    .pipe(clean());
});
