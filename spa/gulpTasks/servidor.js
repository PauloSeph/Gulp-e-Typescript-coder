/* Aqui que vai startar(iniciar) o servidor
   E aqui dentro vai ficar monitorando as mudanças dos arquivos,
   para que o servidor mude sempre que um arquivo mudar.
   Tanto servidor de refresh compile os arquivos e jogue na pasta build
   a versão mais nova, como o browser de reload no momento que o arquivo mudar.

*/ 



const gulp = require('gulp')

gulp.task('monitorarMudancas', () => {

})


/* 
  Monitorar mudancas vai usar a dependencia gulp-watch
  Vai ficar monitorando os arquivos do disco, sempre que tiver uma mudança ele dispara
 parte do build para que possa ter build mais automotizado possivel.
*/
gulp.task('servidor', ['monitorarMudancas'], () => {

})