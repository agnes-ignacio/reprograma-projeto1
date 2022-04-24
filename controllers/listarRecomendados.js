const livros = require('../database')
const leia = require('readline-sync')

const listarRecomendados = () => {
    let resposta1 = leia.question('Deseja listar livros recomendados? S/N ').toUpperCase()
    if (resposta1 === "S"){
        let listaRecomendados = livros.filter(arr => arr.recomenda)
        console.table(listaRecomendados)
    } else {
        console.log("Tchauzinho :)")
    }
}

module.exports = listarRecomendados