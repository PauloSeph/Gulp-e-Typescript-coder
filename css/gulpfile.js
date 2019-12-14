const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require ('gulp-uglifycss')
const concat = require('gulp-concat')

// Definindo a task, mas antes de tudo vamos pegar o arquivo index.html e jogar dentro
// da pasta build que será definida.
// Então antes de executar o default ele vai copiarHtml.
gulp.task('default', ['copiarHtml'], () => {
    gulp.src('src/sass/index.scss') 
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({"uglyComments": true}))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))

})

gulp.task('copiarHtml', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})

