const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime multiplicacion', opts)
    .command('crear', 'Crea multiplicacion', opts)
    .help()
    .argv;

module.exports = {
    argv
}