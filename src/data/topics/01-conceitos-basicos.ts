import { Topic } from '../types';

export const topic1: Topic = {
  id: 'conceitos-basicos',
  title: 'Engano, Defeito, Erro e Falha',
  description: 'Compreendendo a cadeia de causalidade e os conceitos fundamentais de anomalias em software.',
  order: 1,
  content: `
# Conceitos sobre Engano, Defeito, Erro e Falha

A compreensão técnica sobre problemas em software exige a internalização rigorosa de uma taxonomia sequencial denominada **Cadeia de Causalidade**. 

Para que um programa falhe aos olhos de um usuário, uma sequência etiológica exata de eventos distintos e interconectados deve obrigatoriamente ocorrer. Esta sequência distingue quatro conceitos e palavras-chave vitais: Engano, Defeito, Erro e Falha.

## Termos Taxonômicos

| Termo Taxonômico | Definição Didática, Função e Mecanismo de Ação |
| :--- | :--- |
| **1. Engano (Mistake)** | É a raiz inicial de todo problema. Trata-se da ação humana, orgânica, falível e cognitiva que produz um resultado incorreto. Ocorre puramente na mente ou na coordenação motora do indivíduo durante a fase de concepção. Exemplo: um desenvolvedor interpretando mal uma regra de negócio ou cometendo um erro de digitação na sintaxe. O Engano é o ato biológico falho. |
| **2. Defeito (Fault)** | É a consequência inerte e estática do engano. A anomalia física injetada pela ação humana, que passa a residir de forma dormente no artefato de software (código-fonte, instrução SQL, etc.). No jargão corporativo, este é o "bug" residente. Ele existe fisicamente no arquivo do sistema, mas não causa danos enquanto o arquivo não for executado. |
| **3. Erro (Error)** | Diferente do defeito estático, o Erro é um fenômeno puramente dinâmico. Consiste em um estado interno incorreto que passa a existir ativamente na memória (RAM) ou na pilha de execução do sistema em tempo real. O erro só se manifesta à vida quando o processador lê e executa a linha exata de código onde o defeito estático dormia. |
| **4. Falha (Failure)** | É a consequência terminal da cadeia e a ponta visível do iceberg. A falha é a manifestação comportamental externa, visual e incorreta do erro, tornando-se perceptível ao usuário ou ao sistema consumidor. Representa a inabilidade concreta do sistema de realizar a função requerida. |

## Síntese Didática Causal

O programador exausto comete um **Engano** mental ao digitar "+" invés de "-", o que introduz um **Defeito** inerte de soma no código-fonte. 

Ao executar o software, o processador lê o Defeito, o que produz um **Erro** invisível (uma variável em memória calcula um saldo maior ao invés de subtrair). 

Esse Erro se propaga internamente pelo sistema até explodir como uma **Falha** externa visível, onde o aplicativo exibe para o cliente um resultado incorreto.
`
};
