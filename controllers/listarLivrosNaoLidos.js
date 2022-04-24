const livros = require('../database')
const leia = require('readline-sync')

const listarLivrosNaoLidos = () => {
    resposta1 = leia.question('Deseja listar livros não lidos? S/N ')
    if (resposta1 === "S"){
        let livrosNaoLidos = livros.filter(arr => !arr.leu)
        console.table(livrosNaoLidos)
    } else {
        console.log("Tchauzinho :)")
    }
}

module.exports = listarLivrosNaoLidos