const gulp = require('gulp'),
    mincss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin')

const src = './src/',
    dist = './example/'


function minJS() {
  return gulp.src(src+'index.js')
  .pipe(uglify())
  .pipe(gulp.dest(dist));
}


function minCSS() {
  return gulp.src(src+'index.css')
  .pipe(mincss())
  .pipe(gulp.dest(dist));
}


function minHtml() {
  return gulp.src(src+'index.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest(dist))
}

function defaultTask(cb) {
  gulp.watch(['./src/*.js','./src/*.css','./src/*.html' ], function(cb) {
    minJS()
    minCSS()
    minHtml()
    cb()
  });
}



exports.default = defaultTask