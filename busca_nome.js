const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const nome = /^([A-Za-zÀ-ÿ]+)(?:(\s[A-Za-zÀ-ÿ]+))+/gm
// ^              -> Início da linha (comportamento ativado pela flag 'm').
// ([A-Za-zÀ-ÿ]+) -> Grupo de captura do primeiro nome (letras e acentos).
// (?: ... )+     -> Grupo de não-captura (?:) que agrupa os sobrenomes. O '+' exige um ou mais sobrenomes.
// \s[A-Za-zÀ-ÿ]+ -> Estrutura do sobrenome: um espaço em branco (\s) seguido por letras.
// Resumo: A regex busca nomes completos (Ex: "João Silva"), exigindo ao menos um sobrenome após o primeiro nome.

const nomesEncontrados = banco.match(nome)
console.log(nomesEncontrados)