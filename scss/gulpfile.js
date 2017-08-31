/**
 * Created by vnepo on 028 28.08.2017.
 */

var gulp = require('gulp'),
    del = require('del'),
    concat = require('gulp-concat'),
    min = require('gulp-uglify'),
    sass = require('gulp-sass'),
    size = require('gulp-size'),
    sourcemaps = require('gulp-sourcemaps'),
    browser = require("browser-sync").create();

var paths = {
    js : './js/**/*.js',
    jsdir : './js',
    script : './scripts/**/*.js',
    scss : [
        './scss/**/*.scss',
        '!scss/**/*_scsslint_tmp*.scss'
    ],
    cssdir : './css',
    html: './**/*.html'
};

gulp.task('clean', function () {
    del.sync([
        paths.jsdir,
        paths.cssdir
    ]);
});