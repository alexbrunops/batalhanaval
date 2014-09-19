MATC82 - Sistemas Web
Batalha Naval
============

## TO DO ##

- Ranking

============

## REQUISITOS ##

Interface - Inputs de texto
- Aplicar validação nos inputs de texto
- O uso de HTML5 está liberado para validação dos 3 inputs de texto
- Número de linhas - >= 3 e <= 8
- Número de colunas - >= 3 e <= 8
- Número de tentativas - >= 1 e <= 64

Interface - Botões
- Criar
- Gera um tabuleiro novo com base nas configurações do inputs de texto
- Ver ranking
- Abre um ranking com as informações sobre as últimas vitórias
- Limpar ranking
- Apaga todas as informações do ranking para o usuário corrente

￼Interface - Caixa de informações do jogo
- “Parabéns, você venceu!”
- Exibido quando o usuário acerta o submarino
- “Ainda resta(m) N tentativa(s)”
- Exibido quando o usuário inicia o jogo e a cada jogada. A cada clique no tabuleiro o número de tentativas possível é decrementado em 1 (-1)
- “Você perdeu, reinicie o jogo!”
- Exibido quando o usuário esgota todas as tentativas ￼￼￼￼￼￼￼na partida atual

￼Interface - Alerts
- “Você já venceu o jogo!”
- Exibido quando o usuário já venceu o jogo e tenta efetuar uma nova jogada
- “Sua quantidade de tentativas chegou ao fim, reinicie o jogo!”
- Exibido quando o usuário esgotou todas as tentativas e tenta efetuar uma nova jogada
- “Você já atirou aqui!”
- Exibido quando o usuário tenta clicar em uma ￼￼￼￼￼￼￼posição que já foi clicada

￼Interface - Gráficos e Animações
- Casa do tabuleiro
- Cada casa terá uma imagem de fundo para representar o oceano
- Explosão
- Quando o usuário clicar em uma casa do tabuleiro deve ser exibida uma animação de explosão
- Casa desabilitada
- Quando o usuário clica em uma casa do tabuleiro a mesma perde a opacidade dando a impressão de que está desabilitada
- Submarino
- Quando o usuário clicar na casa onde se encontra o submarino, o mesmo deve ser exibido nessa casa

￼Interface - Ranking
- O ranking apresenta um relatório com as informações das partidas que foram vencidas previamente pelo usuário ATUAL
- O usuário ATUAL é definido no momento em que se inicia o jogo em um prompt solicitando o nome do usuário
- O ranking é exibido ao se clicar no botão “Ver Ranking”
- Para fechar o ranking basta clicar no botão “Fechar Ranking”
- Para apagar todas as informações de partidas anteriores do usuário ATUAL basta clicar no botão “Limpar Ranking”
- Enquanto está sendo exibido o ranking, o usuário não poderá interagir com o jogo nem com nenhum dos inputs (exceto o botão “Fechar Ranking”)
- O ranking exibe as seguintes informações para o usuário ATUAL - Data do jogo
- Hora da partida
- Tamanho do tabuleiro
- Número de tentativas até acertar o submarino - Duração da partida em segundos
#CUIDADO 
- O ranking de um usuário não pode ser visto nem apagado por outro usuário
- O ranking deve ser persistido e ficar disponível por 1 ano a contar do primeiro acesso (dica: use cookies)

============

## DICAS ##

- Tente criar funções no código JavaScript para manter o acoplamento baixo e a coesão alta
- Crie uma função para inicializar o tabuleiro
- Crie uma função que responderá a cada clique no tabuleiro
- Crie funções utilitárias quando perceber que há muitas linhas de código que não estão relacionadas com o propósito esperado da função (comparação, ordenação, etc.)
- Crie funções para manipular os cookies que serão usados
- Crie funções para gerenciar a abertura, construção e o fechamento do ranking