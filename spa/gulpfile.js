// Esse será o arquivo principal das tasks
const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require ('run-sequence')

/*
   Aqui vamos importar os outros 3 arquivos que são parte do meu build
   poderia ter passado tudo aqui colocado todos tasks em um arquivo, 
   mas para deixar mais organizado usamos outros 3 arquivos.
   Então arquivo app.js, deps.js, servidor.js - Eles fazem parte do mesmo build
   seram importados para esse arquivo principal.
*/ 
require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')


// No arquivo Json tem um script - "start": "gulp",  "build": "gulp --production"
// Quando usado npm start ele executa o gulp (No caso ignorando deps e app)
// E quando executar npm build ele vai executar o gulp --production

// Podendo usar o run-sequence para executar na sequencia passada
// ou gulp.start
gulp.task('default', () => {
    if(util.env.production) {
        // sequence('deps', 'app')
        gulp.start('deps', 'app')
    } else {
        // sequence('deps', 'app', 'servidor')
        gulp.start('deps', 'app', 'servidor')
    }
})