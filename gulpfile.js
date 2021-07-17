const gulp = require('gulp'),
    mincss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin')

const src = './src/', dist = './docs/'


function minJS() {
  return gulp.src(src+'index.js')
  .pipe(uglify())
  .pipe(gulp.dest(dist))
  .pipe(gulp.dest('./'));
}


function minCSS() {
  return gulp.src(src+'index.css')
  .pipe(mincss())
  .pipe(gulp.dest(dist))
  .pipe(gulp.dest('./'));
}


function minHtml() {
  return gulp.src(src+'index.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest(dist))
}

const defaultTask = gulp.task('default', function(done) {
  minJS()
  minCSS()
  minHtml()
  done()
});


exports.default = defaultTask