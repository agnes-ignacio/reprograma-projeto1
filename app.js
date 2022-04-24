const leia = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarRecomendados = require('./controllers/listarRecomendados')

let resposta = leia.question(`
=============== Menu ===============
1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de páginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Buscar livros não lidos

5 - SAIR

Digite um numero (1-5):
`)

switch (resposta) {
    case "1":
        buscarLivros()
        break
    case "2":
        listarLivrosNaoLidos()
        break
    case "3":
        listarLivrosOrdenados()
        break
    case "4":
        listarRecomendados()
        break
    case "5":
        console.log("Tchauzinho :)")
        break
}