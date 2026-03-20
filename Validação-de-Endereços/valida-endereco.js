const fs = require('fs')

const enderecosCsv = './Validação-de-Endereços/enderecos.csv'
const enderecos = fs.readFileSync(enderecosCsv, "utf-8")

const linhas = enderecos.split(/\r?\n/);

// Regex separadas
const regexMatch = /^(.*[A-Za-zÀ-ÿ])(, )(\d.*)\2(CEP (\d{5}-\d{3}))$/gm;
const regexTest = /^(.*[A-Za-zÀ-ÿ])(, )(\d.*)\2(CEP (\d{5}-\d{3}))$/; // Usada na função .test() para validar cada linha individualmente, não precisa das flags 'g' e 'm' porque será testada linha por linha

/*
    Explicação das regex:
    - ^: Início da string
    - (.*[A-Za-zÀ-ÿ]): Captura o nome da rua (qualquer caractere seguido por uma letra)
    - (, ): Captura a vírgula e o espaço
    - (\d.*): Captura o número do endereço
    - \2: Referência ao segundo grupo de captura (a vírgula e o espaço)
    - (CEP (\d{5}-\d{3})): Captura "CEP" formato XXXXX-XXX (5 digitos, hífen, 3 dígitos)
    - $: Fim da string
    - g: Flag para buscar todas as ocorrências
    - m: Flag para tratar a string como múltiplas linhas
*/

const enderecosCorretos = enderecos.match(regexMatch) // Usa match para encontrar todos os endereços que correspondem à regex (endereços corretos)

const invalidos = linhas.filter(linha => !regexTest.test(linha)); // Encontra os endereços inválidos usando filter e testa cada linha com a regex (se a linha não corresponder à regex, é considerada inválida)

console.log('Endereços encontrados:', enderecosCorretos)
console.log('Endereços inválidos:', invalidos)