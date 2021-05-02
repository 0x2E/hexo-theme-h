'use strict';

let gulp = require('gulp');
let concat = require('gulp-concat');
let postcss = require('gulp-postcss')

gulp.task('css', function () {
  return gulp.src([
    './src/main.css'
  ])
  .pipe(postcss([
    require('tailwindcss'),
    require('autoprefixer'),
  ]))
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest('./source/css'))
})


// let gulpJsmin = require('gulp-uglify');
// gulp.task('js', function () {
//   return gulp.src([
//     './node_modules/lozad/dist/lozad.min.js',
//     './node_modules/medium-zoom/dist/medium-zoom.min.js'
//   ])
//   .pipe(sourcemaps.init())
//   .pipe(concat('post.min.js'))
//   .pipe(gulpJsmin())
//   .pipe(sourcemaps.write('./'))
//   .pipe(gulp.dest('./source/js/'))
// })
