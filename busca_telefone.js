const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf-8')//.split('\n').slice(1);

const regexTelefone = /\(\d{2}\)\s\d{4,5}-\d{4}/g
// regex para encontrar telefones em formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX, onde o número tem 4 ou 5 dígitos antes do hífen

const telefonesEncontrados = banco.match(regexTelefone);
// usa match() para comparar o banco com a regex e retorna um array com os telefones encontrados

console.log(telefonesEncontrados);

const patternCel = /\(\d{2}\)\s\d{5}-\d{4}/g
// regex para encontrar celulares no formato (XX) XXXXX-XXXX, onde o número tem 5 dígitos antes do hífen
const matchCelulares = banco.match(patternCel);
console.log(matchCelulares);