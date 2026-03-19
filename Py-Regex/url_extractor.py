import re
## Importando a biblioteca re para trabalhar com expressões regulares.

string = "Visite nosso site em https://www.exemplo.com ou http://www.outroexemplo.com para mais informações."
pattern = r'https?:\/\/[^\s]+'
## Explicação da regex:
# https?
#   Corresponde ao início de uma URL, que pode começar com "http" ou "https".
#:\/\/
#   Corresponde a "://", que é parte da estrutura de uma URL. É necessário usar a barra invertida '\' para escapar os caracteres '/'.
#[^\s]+
#   Corresponde a qualquer sequência de caracteres que não seja um espaço em branco. Isso captura o restante da URL até o próximo espaço ou o final da string.
#   ^ dentro dos colchetes [] indica negação.

urls_encontradas = re.findall(pattern, string)

if urls_encontradas: 
## Caso encontrar, será True, caso contrário, False

    print("URLs encontradas:")
    for index, url in enumerate(urls_encontradas, start=1):
        print(f"{index}: {url}")

    ## Explicação do loop:
    # - index é o numero que o objeto enumerate gera para cada item da lista urls_encontradas.
    # - enumerate(urls_encontradas, start=1) é usado para obter tanto o índice quanto a URL encontrada.
    # - start=1 faz com que a contagem dos índices comece em 1, em vez de 0, para uma apresentação mais amigável. 

else:
    print("Nenhuma URL encontrada.")