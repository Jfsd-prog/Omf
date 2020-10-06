const gulp       = require("gulp");
const sass       = require("gulp-sass");
const cleanCSS   = require("gulp-clean-css");
const browerSync = require("browser-sync");
const concat     = require("gulp-concat");

function style(){
  return gulp.src("./src/**/*.scss")
    .pipe(sass())
    .pipe(concat('style.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./www/css'));
}

function watch(){
  browerSync.init({
    server: {
      baseDir : "./www"
    }
  });
  gulp.watch("./src/**/*.scss", style);
  gulp.watch("./www/").on("change", browerSync.reload);
}

exports.style = style;
exports.watch = watch;