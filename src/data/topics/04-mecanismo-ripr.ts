import { Topic } from '../types';

export const topic4: Topic = {
  id: 'mecanismo-ripr',
  title: 'O Mecanismo RIPR e a Testabilidade',
  description: 'Os quatro postulados do Modelo RIPR e os pilares da testabilidade.',
  order: 4,
  content: `
# O Mecanismo RIPR e a Testabilidade

Entender a cadeia de falhas é vital, mas para que o analista consiga gerar um caso de teste poderoso o suficiente, capaz de transitar por toda essa cadeia de processamento e revelar a existência de um defeito oculto, a teoria exige o cumprimento dos quatro postulados estritos do **Modelo RIPR**. 

Estes passos devem ocorrer em rigorosa ordem sequencial durante a execução do programa em memória:

## Passos do Modelo RIPR

| Passo do Modelo RIPR | Descrição e Mecanismo |
| :--- | :--- |
| **Reachability (Alcance)** | O conjunto de dados de entrada injetado pelo testador deve garantir que o fluxo de execução do programa alcance fisicamente, toque e processe a linha exata de código onde o defeito inerte reside. Se o código não é lido pelo computador, o defeito jamais acorda. |
| **Infection (Infecção)** | Apenas processar a linha não é suficiente. A lógica ali executada deve obrigatoriamente corromper o estado interno do software, alterando as variáveis de forma anômala e transformando o defeito estático num estado de erro dinâmico ativo em memória. |
| **Propagation (Propagação)** | Este estado interno infectado (a variável com valor errado) precisa ser forte o suficiente para viajar intacto pelas próximas camadas lógicas e fluxo de dados. Ele não pode ser inadvertidamente reescrito, sobrescrito, mascarado ou corrigido por lógicas posteriores do programa antes de impactar um ponto de saída. |
| **Revealability (Revelabilidade)** | O erro, tendo propagado e sobrevivido até a saída, deve poder ser concretamente observado, constatado e comparado pelo testador. Se a falha ocorre mas é guardada num arquivo de log remoto que o testador não tem acesso, a revelabilidade falhou. |

## Testabilidade

A capacidade técnica e prática de verificar o sucesso do modelo RIPR no dia a dia da profissão depende de um atributo de qualidade de arquitetura conhecido como **Testabilidade**. 

Um sistema não testável é inútil. A testabilidade é sustentada por dois pilares fundamentais de engenharia:

1. **Observabilidade:** É a propriedade que dita que o estado interno, as variáveis transientes e as saídas consolidadas do software devem ser transparentes, consultáveis e perfeitamente visíveis ao longo da execução do teste, permitindo que o humano avalie o que ocorre nos bastidores.
2. **Controlabilidade:** É a capacidade arquitetural de forçar, controlar e manipular livremente as entradas de dados e as variáveis de ambiente, garantindo assim que o testador consiga direcionar o software artificialmente para cenários específicos e caminhos lógicos extremos.
`
};
