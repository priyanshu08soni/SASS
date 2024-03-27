//gulp
const { src, dest, watch, series } = require('gulp')
//gulp-sass plugin with sass compiler
const sass = require('gulp-sass')(require('sass'))

//initialization function
function buildStyles(){
    return src('index.scss')
           .pipe(sass())
           .pipe(dest('css'));
}
 
//update function
function watchTask(){
    watch(['index.scss'],buildStyles)
}

exports.default = series(buildStyles,watchTask)