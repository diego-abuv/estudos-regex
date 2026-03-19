export default function ehUmNome(campo) {
    const nome = campo.value
    const patternNome = /^(?!(.)\1\1)[A-Za-zÀ-ÿ -]{3,30}$/i.test(nome)

    /*
        Docummentação da regex:
        
            ^ - Início da string
            
            (?!.)\1\1 - Negative lookahead para evitar três caracteres iguais consecutivos
            
            [A-Za-zÀ-ÿ -] - Permite letras (incluindo acentos), espaços e hífens
            
            {3,30} - O nome deve ter entre 3 e 30 caracteres
            
            $ - Fim da string
            
            i - Flag para tornar a regex case-insensitive (independente de maiúsculas ou minúsculas)
            
            .test(nome) - Testa se o nome corresponde ao padrão definido pela regex (se nome for aprovado no patternNome, o resultado será true, caso contrário, será false)
    */


    console.log(patternNome);

    if (!patternNome) {

        campo.setCustomValidity('Não é um nome válido');
        console.log(`"${nome}" não é um nome válido`)

    }

    return nome
}