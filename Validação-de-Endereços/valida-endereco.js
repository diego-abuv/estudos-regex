const fs = require('fs')
const enderecosCsv = './Validação-de-Endereços/enderecos.csv'
const enderecos = fs.readFileSync(enderecosCsv, "utf-8")

const regexEndereco = /^(.*[A-Za-zÀ-ÿ])(, )(\d.*)\2(CEP (\d{5}-\d{3}))/gm
/*
    Explicação da regex:
    - ^: Início da linha
    - (.*[A-Za-zÀ-ÿ]): Captura o nome da rua (qualquer caractere seguido por uma letra)
    - (, ): Captura a vírgula e o espaço
    - (\d.*): Captura o número do endereço
    - \2: Referência à segunda captura (a vírgula e o espaço)
    - (CEP (\d{5}-\d{3})): Captura o CEP no formato 12345-678 (5 digitos, hífen, 3 dígitos)
    - $: Fim da linha
*/

const linhas = enderecos.split('\n'); // Divide o conteúdo do arquivo em linhas

// Encontra os endereços corretos usando a regex
const enderecosCorretos = enderecos.match(regexEndereco)
console.log('Endereços encontrados: ', enderecosCorretos)

// Encontra os endereços inválidos usando filter e testa cada linha com a regex (se a linha não corresponder à regex, é considerada inválida)
const invalidos = linhas.filter(linha => !regexEndereco.test(linha));
console.log('Endereços inválidos: ', invalidos)

