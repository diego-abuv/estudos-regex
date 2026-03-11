const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const CPF = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g
// caracteres: \d{3} - três dígitos, [.-]? - um ponto ou hífen opcional, \d{2} - dois dígitos, g - flag para buscar todas as ocorrências (global)
const CPFsEncontrados = banco.match(CPF)
console.log(CPFsEncontrados)