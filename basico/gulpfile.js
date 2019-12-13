const gulp = require('gulp')


// Por padrão a task é o default
gulp.task('default', () => {
    gulp.start('copiar', 'fim') // vai chamar o copiar e o fim
})

// antes de copiar passamos um array como parametro que terá dois pré requisitos
// ou seja, antes de executar o copiar ele vai rodar o antes1 e antes2.
// Dentro de uma task fazendo as operacoes serem executadas.
// Começando pelo gulp.src que será os arquivos que irão ser trabalhados
// no caso vamos pegar os arquivos da pastaA arquivo1.txt e arquivo2.txt
// .pepe(gulp.dest('pastaB')) será o que faremos com os arquivos, que terá o 
// dest(destino) para pasta b


gulp.task('copiar', ['antes1', 'antes2'], () => {
    gulp.src('pastaA/**/*.txt')
    // .pipe(transformacao1())
    // .pipe(transformacao2())
    .pipe(gulp.dest('pastaB'))
})



// para isso temos que criar outras duas tarefas(task), no caso antes 1 e o antes 2
gulp.task('antes1', () => {
    console.log('Antes 1!!!!')
})

gulp.task('antes2', () => {
    console.log('Antes 2!!!!')
})


// pode fazer uma task que quando executada ela vai executar antes as duas
// outras funcoes, fim1 e fim2

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('fim 1!')
})
gulp.task('fim2', () => {
    console.log('fim 2!')
})






