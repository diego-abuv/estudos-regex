const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const datas = /\d{2}[/. ]?\d{2}[/. ]?\d{4}$/gm
// regex usa [] como indicação de caracteres possíveis nesta posição, já o $ ao final indica que a expressão deve terminar ali, e nada mais depois, além disso a flag m junto com a flag g indica que a regex deve ser aplicada em múltiplas linhas, e não apenas na ultima linha do texto
const datasEncontradas = banco.match(datas)
console.log(datasEncontradas)
console.log("Quant de datas encontradas: " + datasEncontradas.length)