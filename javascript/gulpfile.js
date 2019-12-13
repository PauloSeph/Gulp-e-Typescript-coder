const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


// Aqui vamos fazer a primeira task, onde vai pegar os arquivos .js e todas subpastas.
// return pode ser usado ou não, porem é bom usar sempre, funcionará do mesmo modo
// que o primeiro exercicio "Basico"
gulp.task('default', () => {
    return gulp.src('src/**/*.js')
    .pipe(babel({
         comments: false,
         presets: ["env"]

    }))
    .pipe(uglify())
    .on('error', function (err) { console.log(err)})
    .pipe(concat('codigo.min.js'))
    .pipe(gulp.dest('build'))
})
