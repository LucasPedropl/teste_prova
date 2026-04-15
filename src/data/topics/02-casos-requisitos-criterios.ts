import { Topic } from '../types';

export const topic2: Topic = {
  id: 'casos-requisitos-criterios',
  title: 'Casos, Requisitos e Critérios',
  description: 'Definições de casos de teste, requisitos, critérios e sua relação com falhas e defeitos.',
  order: 2,
  content: `
# Casos de Teste, Requisito de Teste e Critério de Teste

Para aplicar a ciência da qualidade de software de forma sistemática, a literatura consolida uma série de termos vitais que estruturam a atividade de teste.

## Definições Fundamentais

- **Critério de Teste:** É uma coleção de regras formais ou diretrizes utilizadas para balizar a filtragem e extração de subdomínios de teste. O critério define *como* os testes devem ser selecionados (ex: cobrir todos os comandos, cobrir todas as classes de equivalência).
- **Requisito de Teste:** É um elemento estrito, específico, mensurável e observável que a bateria de testes é obrigada a exercitar para satisfazer um Critério de Teste. Se o critério é "cobrir todas as linhas de código", cada linha de código individual é um requisito de teste.
- **Caso de Teste:** É a unidade atômica e mais granular do trabalho de qualidade prático. Trata-se de um roteiro isolado e determinístico de validação composto por entradas, condições de execução e resultados esperados.

### A Anatomia do Caso de Teste

Um Caso de Teste profissional deve obrigatoriamente ser composto pelos seguintes atributos:

| Componente | Finalidade do Componente |
| :--- | :--- |
| **Pré-condições** | Define o estado basal em que o sistema deve se encontrar antes da execução do teste. |
| **Entradas (Dados de Teste)** | Os valores rigorosos que alimentarão o sistema durante o teste. |
| **Procedimento de Execução** | O roteiro passo a passo das ações que o testador realizará. |
| **Saída Esperada (Oráculo)** | A predição absoluta do comportamento que o sistema DEVE retornar. |

---

# Relação entre Casos de Teste e Falha/Defeito: O Mecanismo RIPR

A relação entre a execução de um caso de teste e a revelação de anomalias no software é o cerne da atividade de validação. Para que um caso de teste consiga transitar por toda a cadeia de processamento e revelar a existência de um defeito oculto, a teoria exige o cumprimento dos quatro postulados estritos do **Modelo RIPR**.

Estes passos devem ocorrer em rigorosa ordem sequencial durante a execução do programa em memória:

| Passo do Modelo RIPR | Descrição e Mecanismo |
| :--- | :--- |
| **Reachability (Alcance)** | O conjunto de dados de entrada injetado pelo caso de teste deve garantir que o fluxo de execução do programa alcance fisicamente, toque e processe a linha exata de código onde o **Defeito** inerte reside. Se o código não é lido, o defeito jamais acorda. |
| **Infection (Infecção)** | Apenas processar a linha não é suficiente. A lógica ali executada deve obrigatoriamente corromper o estado interno do software, alterando as variáveis de forma anômala e transformando o defeito estático num estado de **Erro** dinâmico ativo em memória. |
| **Propagation (Propagação)** | Este estado interno infectado (a variável com valor errado) precisa ser forte o suficiente para viajar intacto pelas próximas camadas lógicas. Ele não pode ser inadvertidamente reescrito, mascarado ou corrigido por lógicas posteriores do programa antes de impactar um ponto de saída. |
| **Revealability (Revelabilidade)** | O erro, tendo propagado e sobrevivido até a saída, deve poder ser concretamente observado e constatado como uma **Falha** pelo testador, divergindo da "Saída Esperada" (Oráculo) documentada no caso de teste. |

Portanto, a relação é direta e mecânica: **Casos de Teste são projetados para forçar o Alcance e a Infecção de Defeitos internos, garantindo a Propagação do Erro até a Revelação de uma Falha externa.** O teste diagnostica a presença do defeito através da observação da falha, validando o modelo RIPR.
`
};
