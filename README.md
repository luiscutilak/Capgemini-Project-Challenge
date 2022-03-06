# Capgemini-Project-Challenge
<h1 align="center">
    <a href="https://pt-br.reactjs.org/">:checkered_flag:Capgemini Challenge:checkered_flag:</a>
</h1>
<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=%20FINISHED&color=GREEN&style=for-the-badge"/>
</p>

<h1 align="center">Olá 👋, sou Luis Fernando Cutilak</h1>
<h3 align="center"># Desafio de Programação - Academia Capgemini</h3>

# 📂 Acesso ao projeto:

Você pode acessar o código fonte do projeto inicial <a href="https://github.com/luiscutilak/Capgemini-Project-Challenge.git" target="_blank"> clicando aqui </a> ou baixá-lo.


# 🛠️ Abrir e rodar o projeto:

Após baixar o projeto, você pode abrir com o VisualStudioCode ou qualquer editor de código fonte. Para isso, na tela, clique em abrir arquivo e acesse o arquivo baixado. Se estiver zipado não esqueça de extrair na sua pasta. No editor fonte é só rodar os códigos de sua preferência.



<p> <strong>Questão 01</strong> <p>

A mediana de uma lista de números é basicamente o elemento que se encontra no meio da lista após a ordenação. Dada uma lista de números com um número ímpar de elementos, desenvolva um algoritmo que encontre a mediana.

Exemplo:

Entrada:

arr = [9, 2, 1, 4, 6]

Saída:
4

# Resolução:

 Função que vai encontrar a mediana do array passado pelo usuário.

 Declaramos a variável middle que é atribuído a ela onde se encontra o index do item do meio do array. 

 Classificamos o array em ordem crescente com o método .sort(). Foi usado spread [...arr] para preservarmos o array original.

 Então é retornado o calculo da função e  imposta a condição utilizando operador ternário, se o comprimento do array for ímpar retorne o numero do meio, caso contrário retorne a média dos dois números do meio. 

<strong> Questão 02 </strong>
               
Dado um vetor de inteiros n e um inteiro qualquer x. Construa um algoritmo que determine o número de elementos pares do vetor que tem uma diferença igual ao valor de x.

Exemplo:

Entrada:

n = [1, 5, 3, 4, 2]


Saída:

3


Explicação:

Existem 3 pares de inteiros no vetor com uma diferença de 2: [5, 3], [4, 2] e [3, 1].

# Resolução:
Utilizado, método de repetição for-loop, onde foi percorrido o array de numeros, e colocado a condição da estrutura da repetição, onde se a condição verdadeira é armazenado cada resultado do loop na variavel.

<strong> Questão 03 </strong>

Um texto precisa ser encriptado usando o seguinte esquema. Primeiro, os espaços são removidos do texto. Então, os caracteres são escritos em um grid, no qual as linhas e colunas tem as seguintes regras:

<=linha<=coluna<=

Considere T, como o tamanho do texto.
Se certifique de que linhas x colunas >= .
Se múltiplos grids satisfazem as condições, escolha aquele com a menor área.
Escreva um algoritmo que ao receber uma string s, mostre a mensagem encriptada de acordo com as regras descritas.

Exemplos:


Exemplo 1)

Entrada:

s = tenha um bom dia


Saída:

taoa eum nmd hbi


Explicação:

Depois de remover os espaços, a string tem 13 caracteres.  está entre 3 e 4, então a string é rescrita na forma de um grid com 4 linhas e 4 colunas:

tenh
aumb
omdi
a

        O resultado é obtido ao mostrar os caracteres de cada coluna, com um espaço entre as colunas de texto. A mensagem encriptada é obtida ao mostrar os caracteres de cada linha com um espaço entre as colunas.


Exemplo 2)

Entrada:

s = ola mundo


Saída:

omd luo an


Explicação:

        Depois de remover os espaços a string tem 8 caracteres.  está entre 2 e 3, então a string é reescrita na forma de um grid com 3 linhas e 3 colunas:

ola

mun

do


# Resolução:
 Primeiro foi retirado todos os espaços em branco com a função replace e métodos RegExp e armazenado em uma variável.
 
 Próximo passo separamos a string em um array, usando a função .match() também com RegExp para manipularmos com o loop for.
 
 No primeiro for é feita  a iteração sobre as strings, e no segundo for ele separa os caracteres para codificar a nova string.
 
 Esse processo é é filtrado novamente pela função .join() onde a string é retornada para forma de string com espaços vazios.



<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> </p>


<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/linkedin.com/in/luis-fernando-cutilak-6a2a10106" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="linkedin.com/in/luis-fernando-cutilak-6a2a10106" height="30" width="40" /></a>
<a href="https://instagram.com/fcutilak" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="fcutilak" height="30" width="40" /></a>
<a href="https://www.hackerrank.com/luiscutilak@gmail.com" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="luiscutilak@gmail.com" height="30" width="40" /></a>
</p>

