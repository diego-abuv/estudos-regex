import requests
import re

url = "exemplo.com"  # Substitua pelo URL do site que deseja analisar
response = requests.get(url)
html_content = response.text

pattern = r'<(h[1-2])[^>]*>(.*?)<\/(h[1-2])>'

headings = re.findall(pattern, html_content, re.DOTALL)
for heading in headings:
    print(heading)

    
# Regex usada:
# pattern = r'<(h[1-2])[^>]*>(.*?)<\/(h[1-2])>'

# <(h[1-2])
#   Corresponde à abertura de uma tag de heading.
#   - h[1-2] permite apenas <h1> ou <h2>.
#   - O valor capturado (h1 ou h2) é armazenado no grupo 1.

# [^>]*
#   Corresponde a qualquer sequência de caracteres que NÃO seja '>'.
#   Isso permite capturar atributos opcionais dentro da tag,
#   como por exemplo: <h1 class="titulo">.

# >
#   Fecha a tag de abertura.

# (.*?)
#   Captura o conteúdo interno do heading (grupo 2).
#   - .*  corresponde a todos os tipos de caracteres.
#   - ?   torna a correspondência não gananciosa (lazy),
#         ou seja, captura o menor trecho possível até a próxima parte da regex.

# <\/(h[1-2])>
#   Corresponde à tag de fechamento do heading.
#   - <\/  indica o início da tag de fechamento. Usamos '\' para pegar o literal da barra '/'.
#   - (h[1-2]) captura novamente h1 ou h2 (grupo 3).
#   Isso garante que estamos fechando um heading do mesmo tipo.