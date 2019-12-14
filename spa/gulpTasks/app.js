// Nesse arquivo seram todas as tasks relacionado a aplicação (Html, css, js, imgs)

// Definir a estrutura basica

const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')
const htmlmin = require('gulp-htmlmin')

gulp.task('app', ['app.html', 'app.css', 'app.js', 'app.imgs'])


gulp.task('app.html', () => {
    return gulp.src('src/**/*.html')
    .pipe(htmlmin({ collapseInlineTagWhitespace: true}))
    .pipe(gulp.dest('build'))
})

// como no arquivo index/scss tem todos import de todos arquivos do scss nele
// então é so usar pegar um unico arquivo que o resto será referenciado.
gulp.task('app.css', () => {
    return gulp.src('src/assets/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({ "uglyComments": true}))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('build/assets/css'))

})

// so tem um arquivo js.
gulp.task('app.js', () => {
    return gulp.src('src/assets/js/**/*.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build/assets/js'))

})


gulp.task('app.imgs', () => {
    return gulp.src('src/assets/imgs/**/*.*')
    .pipe(gulp.dest('build/assets/imgs'))
})