
# CSS
1. Qual a diferença entre progressive enhancement e graceful degradation? Por que você escolheria um ou outro?
Resposta:
Progressive Enhancement -> É técnica que visa ir colocando funcionalidades aos poucos com o objetivo de a usabilidade atingir todos os browsers. Os mais novos usando as funcionalidades mais recentes e os mais antigos tendo algum fallback para as funcionalidades que não suportam.

Graceful Degradation -> Essa técnica visa alterar projetos que não comtemplam suporte a browser antigos. Onde ela vai retirando funcionalidades e preparando o projeto para conseguir atender tanto a browsers antigos como novos.

No caso da escolha, vai depende em que estado o projeto se encontra. Se estiver iniciando, usa-se o progressive, porém, se este projeto existe e está muito a frente e com deficiência em atender projetos antigos a única opção seria o uso do Graceful Degradation.
O importante a ressaltar é que ambos são estratégias para melhorar a usabilidade em todos os browsers independente de versão dos mesmos.


2. Como centralizar o bloco segundo o desenho abaixo considerando que as medidas da div.outer são indefinidas?
```
 ________________________________________
|                                        |
|  div.outer                             |
|          ________200px______           |
|          |                  |          |
|     100px|  div.inner       |          |
|          |                  |          |
|          |__________________|          |
|                                        |
|                                        |
|________________________________________|
```
Resposta:
Usando conceito de camadas pode colocar ela sobreposta usando 
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

3. Você já usou algum framework de CSS? Qual? Por que?
Resposta:
Sim. Já usei o twitter boostrap e o Foundation. 
Eles me ajudaram a iniciar projetos que precisam ser concluídos em um curto período. Se o projeto não utilizar componentes mais complexos, estes frameworks ajudam por terem muitos componentes comuns pronto para uso.

4. Você já usou algum pré-processador de CSS? Qual? Por que?
Resposta:
Sim. Já usei LESS e SASS.
Até hoje em dia na verdade ainda os uso pois facilitam muito a parte de desenvolvimento com as opção de funções, lopps, mixiins...
Tudo isso agrega um ótimo valor no desenvolvimento de projeto.

5. Você já usou algum pós-processador de JS? Qual? Por que?
Resposta:
Não. Já usei compilers e concatenadores.
Pode ser que o Gulp e o Grunt possa ser um pós-processador por conta de a alteração ser baseada em melhoria e não construção. Neste caso já usei. 

6. Como alinhar horizontalmente um bloco com largura definida?
Pode usar uma das 3 formas
Uma forma é usar
    margin-left: auto; 
    margin-right: auto;

Segunda forma seria usar  
    position: relative;
    left: 50%;
    transform: translateX(-50%);

Terceira forma seria usar flex na div pai
    display: flex;
    justify-content: center;


7. Como você mantem os seletores (classes, ids, etc) de uma base de código que evolui com o tempo? Como faz para remover o que não está sendo usado (e pior, como saber o que está sendo usado)?
Resposta:
Bem delicada essa pergunta. Dou preferência ao uso de classes e as mesmas sendo orientadas a objetos.
Para que isso possa ser contemplado com a ideia de remoção tranquila o css tem que vir sendo construído com padrões para ao que não for usado possa ser retirado.
Quando não, acredito que uma opção seria comentar o que pretende alterar e ver que tipo de estrago aconteceu no projeto e assim buscar nos arquivos o que pode estar usando esta classe e realizar as alterações necessárias.

# Questions
1. Qual a sua experiência com automação de qualidade no front end (ex testes unitários, testes de integração)
Já fui um pouco resistente a questão de ter testes unitários na aplicação mais hoje penso diferente e os aplico quando se tornam viáveis a serem feitos. Os de integração não tenho uma ampla experiencia mais já estive em contato com eles.

1. Qual o bug mais difícil que depurou nos últimos anos?
Resposta:
Trabalhei em um aplicativo mobile que usava o framework7 com VUEJS. Quem desenvolveu inicialmente usou uma arquitetura e no padrão onde baseava-se muito no uso de timeouts tendo como ideia o mesmo conceito errôneo do setImmediate do NodeJS.
Acontecia um problema onde a loja da apple rejeitava sempre que enviamos uma versão para eles, onde a tela inicial hora apareceria hora não.
Ao debbugar o emaranhado de problema pelo padrão escolhido, descobri que para cada card da timeline da tela inicial eram feitas 2 requisições onde uma dependia da outra quase que um JOIN, e quando elas se resolviam montava om objeto que era inserido no array que era o mesmo array que populava a view.
O problema é que se uma dessas requisições não termina-se a tempo ou mesmo não conseguisse completar não gerava o objeto esperado.
O que criaram foi duas promisses encadeadas que retornavam para o array. Quando elas terminavam a tempo por conta dos setTimeous que colocaram a lista montava pois o objeto chegava ao array. Quando não o array era populado por uma promisse que acabava gerando um undefined no índice que o mesmo estava. Quando a view ia montar os dados eis que batia no undefined e era criado a exceção gerando o problema.
Este demorei para achar pois o código era muito problemático e tinha que conseguir encontrar todos os timeouts (que não eram pouco) para ver seus resultados.

1. Tem alguma experiência com programação funcional? Caso tenha, como ela pode ajudar no desenvolvimento de UI?
Sim. Realizo todo o processo baseado nisso o que rende melhor desempenho e precisão nas entregas dos dados.
Quanto mais rápido e preciso melhor.

1. Como você controla dependências? Você usa um gerenciador de pacotes? Qual? Por quê?
Sim. No front já usei RequireJS e SystemJS, porém, pensando no desempenho é mais comum hoje realizar processamento com Gulp ou WebPack para poder juntar os arquivos em um só e entrega-los com gZip e concatenados e minificados ao cliente.
No processo de desenvolvimento uso o npm ou yarn para gerenciar os pacotes localmente antes do processamento do Gulp.

1. Tem alguma experiência com Reactive Programming (rx)? Caso tenha, como ela pode ajudar no desenvolvimento de UI?
Sim. Conheço o conceito e o aplico pois entendo que quando as coisas aconteem rápido se tornam uma ferramenta ótima para soluções. Quando a uma lentidão derivando de um baixo desempenho, teremos clientes insatisfeitos trazendo rejeição ao que apresentamos.