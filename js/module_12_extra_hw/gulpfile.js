'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('mt', function (){
    return gulp.src('./main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build'))
});