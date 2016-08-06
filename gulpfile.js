var gulp = require('gulp');
var svgmin = require('gulp-svgmin');

// SVG Minification
gulp.task('default', function() {
  return gulp.src('src/*.svg')
  .pipe(svgmin({
    plugins: [{
      mergePaths: true
    }]
  }))
  .pipe(gulp.dest('dist/'));
});