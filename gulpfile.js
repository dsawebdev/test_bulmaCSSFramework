const gulp = require('gulp');
const browserSync = require('browser-sync').create();



gulp.task('js', () => {
  gulp.src([
    'node_modules/typed.js/lib/typed.min.js', 
  ])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
})

gulp.task('serve', function() {
   browserSync.init({
    server: "./src"
   });
   gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve', 'js']);