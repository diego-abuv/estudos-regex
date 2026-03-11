const fs = require('fs');
const bancoCsv = 'database.csv';
const banco = fs.readFileSync(bancoCsv, 'utf-8')//.split('\n').slice(1);

const regexTelefone = /\(\d+\)\s\d+-\d+/g
// regex para encontrar telefones no formato (XX) XXXXX-XXXX

const telefonesEncontrados = banco.match(regexTelefone);
// usa match() para comparar o banco com a regex e retorna um array com os telefones encontrados

console.log(telefonesEncontrados);