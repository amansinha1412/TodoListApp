var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

gulp.task('minify-css',function(){
   return gulp.src('C:/Users/amansinha/Desktop/noob_to_professional/music/music/static/css/*.css')
          .pipe(minifyCSS())
          .pipe(gulp.dest('C:/Users/amansinha/Desktop/noob_to_professional/music/music/static/build/css/'))
});
gulp.task('uglify',function(){
   return gulp.src('C:/Users/amansinha/Desktop/noob_to_professional/music/music/static/js/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('C:/Users/amansinha/Desktop/noob_to_professional/music/music/static/build/js/'))
});

gulp.task('minify',['minify-css','uglify']);
