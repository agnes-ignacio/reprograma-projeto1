const livros = require('../database')
const leia = require('readline-sync')

const buscarLivros =  () => {
   let resposta1 = leia.question('Deseja pesquisar por categoria? S/N').toUpperCase()
    if (resposta1 === "S"){
        let categorias = livros.map( (arr) => arr.categoria)
        console.table(categorias)
      let resposta2 = leia.question('Digite a categoria que deseja pesquisar.').toLowerCase()
        let listaPorCategoria = livros.filter((arr) => arr.categoria === resposta2)
        console.table(listaPorCategoria)
    } else {
        console.log("Tchauzinho :)")
    }
}

module.exports = buscarLivros