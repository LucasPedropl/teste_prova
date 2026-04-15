import { Topic } from '../types';

export const topic3: Topic = {
  id: 'taxonomia-causalidade',
  title: 'Taxonomia da Causalidade',
  description: 'Compreendendo a cadeia de causalidade: Engano, Defeito, Erro e Falha.',
  order: 3,
  content: `
# A Taxonomia da Causalidade: Engano, Defeito, Erro e Falha

A compreensão técnica e forense sobre problemas em software exige a internalização rigorosa de uma taxonomia sequencial denominada **Cadeia de Causalidade**. 

Profissionais amadores chamam qualquer anomalia de "bug", contudo, a norma ISO/IEC/IEEE estipula que, para que um programa falhe aos olhos de um usuário, uma sequência etiológica exata de eventos distintos e interconectados deve obrigatoriamente ocorrer. Esta sequência distingue quatro conceitos e palavras-chave vitais: Engano, Defeito, Erro e Falha.

## Termos Taxonômicos

| Termo Taxonômico | Definição Didática, Função e Mecanismo de Ação |
| :--- | :--- |
| **1. Engano (Mistake)** | É a raiz inicial de todo problema. Trata-se da ação humana, orgânica, falível e cognitiva que produz um resultado incorreto. Ocorre puramente na mente ou na coordenação motora do indivíduo durante a fase de concepção. Como exemplos clássicos: um desenvolvedor interpretando mal uma regra de negócio escrita num documento longo, ou simplesmente cometendo um erro de digitação (typo) na sintaxe da linguagem de programação por cansaço. O Engano é, por definição, o ato biológico falho. |
| **2. Defeito (Fault)** | É a consequência inerte e estática do engano. A anomalia física injetada pela ação humana, que passa a residir de forma dormente e passiva no artefato de software (seja no código-fonte, numa instrução SQL de banco de dados ou num passo de arquitetura). No jargão corporativo de engenharia, este é o famoso e temido "bug" residente. Ele existe fisicamente no arquivo do sistema, mas não causa danos enquanto o arquivo não for executado. |
| **3. Erro (Error)** | Diferente do defeito estático, o Erro é um fenômeno puramente dinâmico. Consiste em um estado interno incorreto que passa a existir ativamente na memória (RAM) ou na pilha de execução do sistema em tempo real. O Erro é definido matematicamente como a diferença algébrica entre o valor armazenado internamente nas variáveis e o valor que teoricamente deveria estar correto de acordo com as especificações. O erro só se manifesta à vida, nascendo dinamicamente, quando o processador lê e executa a linha exata de código onde o defeito estático dormia. |
| **4. Falha (Failure)** | É a consequência terminal da cadeia e a ponta visível do iceberg. A falha é a manifestação comportamental externa, visual e incorreta do erro, tornando-se perceptível ao usuário, ao cliente ou ao sistema consumidor daquela aplicação. Representa a inabilidade concreta do sistema de realizar a função requerida (por exemplo: exibir a infame "tela azul", congelar a interface, ou devolver o cálculo financeiro de uma fatura com valores subfaturados). |

## Síntese Didática Causal

O programador exausto comete um **Engano** mental ao digitar "+" invés de "-", o que introduz um **Defeito** inerte de soma no código-fonte. 

Ao executar o software do banco, o processador lê o Defeito, o que produz um **Erro** invisível (uma variável em memória calcula um saldo maior ao invés de subtrair o saque). 

Esse Erro se propaga internamente pelo sistema até explodir como uma **Falha** externa visível, onde o aplicativo exibe para o cliente que ele ficou mais rico após realizar um saque em dinheiro vivo.
`
};
