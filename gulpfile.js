var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// define tasks here
gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')// Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass().on('error', sass.logError))//Converts Sass to CSS with gulp-sass
        .pipe(autoprefixer()) 
        .pipe(gulp.dest('src/css'))
});

gulp.task('watch', ['sass'], function (){
  gulp.watch('src/sass/**/*.scss', ['sass']); 
  gulp.watch('src/*.html'); 
  gulp.watch('src/js/**/*.js'); 
});

gulp.task('default', ['sass', 'watch']);