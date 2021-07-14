const livros = require("./database");
//console.log(livros)

//pegar o input
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja Buscar um livro? S/N')

//Captura do input
//If S, mostra categorias e pergunta quaa categoria a pessoa escolhe
if (entradaInicial.toLocaleUpperCase()==='S') {
    console.log('Essas são as categorias disponíveis:');
    console.log('Produtividade e Estilo de Vida','/ Matemática','/Tecnologia',' /Romance');
    const entradaCategoria=readline.question("Qual categoria voce deseja?");
    const retorno = livros.filter(x => x.categoria === entradaCategoria)
    console.table(retorno)

}
//If  Mostra todos os livros pela ordem crescente de num de paginas
else{
    console.log("Essas são todos os livros disponíveis")
    const livrosOrdenados=livros.sort((a,b)=>b.paginas-a.paginas)
    //const livrosOrdenados=livros.sort()
    
    console.table(livrosOrdenados)
}


