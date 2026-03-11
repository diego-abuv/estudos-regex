const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const nome = /Cleberson/
// regex simples para encontrar o nome especificado no banco de dados, armazena o conteúdo do array encontrado.
const nomesEncontrados = banco.match(nome)
console.log(nomesEncontrados)