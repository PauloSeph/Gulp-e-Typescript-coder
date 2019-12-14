// Esse arquivo será as dependencias que preciso para aplicação
// por exemplo as fonts

// Também definir as estruturas basicas

const gulp = require('gulp')
const uglifycss = require ('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.css', 'deps.fonts'])



gulp.task('deps.css', () => {
    return gulp.src([
        'node_modules/font-awesome/css/font-awesome.min.css'
    ])
        .pipe(uglifycss({"uglyComments": false}))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
})
 
// copiando as fonts que estão dentro do font-awesome para a pasta build
// vai pegar todos arquivos que estão dentro do caminho passado da pasta fonts
gulp.task('deps.fonts', () => {
    return gulp.src(['node_modules/font-awesome/fonts/*.*'])
    .pipe(gulp.dest('build/assets/fonts'))
})