export default function ehUmNome(campo) {
    const nome = campo.value
    const patternNome = /^[A-Za-zÀ-ÿ -]{3,30}$/.test(nome)
    console.log(patternNome);

    if (!patternNome) {

        campo.setCustomValidity('Não é um nome válido');
        console.log(`"${nome}" não é um nome válido`)

    }

    return nome
}