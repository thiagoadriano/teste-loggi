#### Visualizar as respostas do questionário [clique aqui](https://github.com/thiagoadriano/teste-loggi/blob/master/perguntas-front-respostas.md)

# Como Usar o TweetStorm
Para usar o TweetStorm é necessário ter:
1. NodeJS instalado 
1. Um terminal de preferencia bash


Dento do diretório do Tweet Storm pelo terminal informe:

```./tweetstormgenerator (parâmetro->texto) (parâmetro->saída)```


**Pode passar dois parâmetros sendo cada um:**
* Parâmetro texto pode ser informado um texto ou um arquivo no formato txt
* No parâmetro saída quando informado pode ser salvo um txt dentro da pasta out

__*Exemplos de chamadas:*__

* Passando um arquivo de texto com saída
  
  ```./tweetstormgenerator text-input.txt --outfile ```


* Passando um arquivo de texto sem saída com isso o resultado ficará visível no terminal
  
  ```./tweetstormgenerator text-input.txt ```



* Passando um texto com saída

  ```./tweetstormgenerator "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de Conteúdo aqui, conteúdo aqui, fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero)." --oufile```



* Passando um texto sem saída com isso o resultado ficará visível no terminal

  ```./tweetstormgenerator "É um fato conhecido de todos que um leitor se distrairá com o conteúdo de texto legível de uma página quando estiver examinando sua diagramação. A vantagem de usar Lorem Ipsum é que ele tem uma distribuição normal de letras, ao contrário de Conteúdo aqui, conteúdo aqui, fazendo com que ele tenha uma aparência similar a de um texto legível. Muitos softwares de publicação e editores de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda em sua fase de construção. Várias versões novas surgiram ao longo dos anos, eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas do gênero)."```