const gulp = require('gulp')


// Por padrão a task é o default
gulp.task('default', () => {
    gulp.start('copiar', 'fim') // vai chamar o copiar e o fim
})

// antes de copiar passamos um array como parametro que terá dois pré requisitos
// ou seja, antes de executar o copiar ele vai rodar o antes1 e antes2.
gulp.task('copiar', ['antes1', 'antes2'], () => {
    console.log('Copiar!!!!')
})

// para isso temos que criar outras duas tarefas(task), no caso antes 1 e o antes 2
gulp.task('antes1', () => {
    console.log('Antes 1!!!!')
})

gulp.task('antes2', () => {
    console.log('Antes 2!!!!')
})

// E finalmente a tarefa fim, onde vai encerrar
gulp.task('fim', () => {
    console.log('fim')
})


