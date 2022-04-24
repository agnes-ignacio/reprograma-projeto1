const livros = require('../database')
const leia = require('readline-sync')

const listarLivrosOrdenados = () => {
    let resposta1 = leia.question('Deseja ordenar livros por número de páginas? S/N ').toUpperCase()
    if (resposta1 === "S"){
        let listaOrdenada = livros.sort((a, b) => a.paginas - b.paginas)
        console.table(listaOrdenada)
    } else {
        console.log("Tchauzinho :)")
    }
}

module.exports = listarLivrosOrdenados