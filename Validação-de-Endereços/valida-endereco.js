const fs = require('fs')
const enderecosCsv = './Validação-de-Endereços/enderecos.csv'
const enderecos = fs.readFileSync(enderecosCsv, "utf-8")

const regexEndereco = /^(.*[A-Za-zÀ-ÿ])(, )(\d.*)\2(CEP (\d{5}-\d{3}))/gm

const enderecosCorretos = enderecos.match(regexEndereco)
console.log('Endereços encontrados: ', enderecosCorretos)

// a fazer - documentar regex e implementar retorno de endereços incorretos