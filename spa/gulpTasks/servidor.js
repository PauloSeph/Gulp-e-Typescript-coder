/* Aqui que vai startar(iniciar) o servidor
   E aqui dentro vai ficar monitorando as mudanças dos arquivos,
   para que o servidor mude sempre que um arquivo mudar.
   Tanto servidor de refresh compile os arquivos e jogue na pasta build
   a versão mais nova, como o browser de reload no momento que o arquivo mudar.

*/ 

const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('monitorarMudancas', () => {
    watch('src/**/*.html', () => gulp.start('app.html'))
    watch('src/**/*.scss', () => gulp.start('app.css'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('src/assets/imgs/**/*.*', () => gulp.start('app.imgs'))
   

})


/* 
  Monitorar mudancas vai usar a dependencia gulp-watch
  Vai ficar monitorando os arquivos do disco, sempre que tiver uma mudança ele dispara
 parte do build para que possa ter build mais automotizado possivel.
*/
gulp.task('servidor', ['monitorarMudancas'], () => {
  return gulp.src('build').pipe(webserver({
    livereload: true,
    port: 8080,
    open: true
  }))
})