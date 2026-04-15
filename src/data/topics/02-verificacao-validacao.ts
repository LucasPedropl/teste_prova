import { Topic } from '../types';

export const topic2: Topic = {
  id: 'verificacao-validacao',
  title: 'Verificação, Validação e Auditoria',
  description: 'Diferenças conceituais entre verificação e validação, e a importância da auditoria de configuração.',
  order: 2,
  content: `
# Verificação, Validação e Auditoria de Configuração

No vasto campo do controle de qualidade de software, existem duas atividades complementares que possuem propósitos fundamentais distintos, as quais são frequentemente, e erroneamente, utilizadas como sinônimos: **Verificação** e **Validação**. Compreender a diferença conceitual entre ambas é o cerne da formação de um engenheiro de qualidade.

## Verificação

A Verificação foca no processo interno, construtivo e estritamente técnico, respondendo metodologicamente à seguinte pergunta basilar: 

> *"Estamos construindo corretamente o sistema?"*

O seu objetivo primário, a sua função essencial, é determinar e auditar se os artefatos produzidos em uma fase específica de desenvolvimento satisfazem rigorosamente as regras, condições matemáticas e arquiteturas estipuladas na fase imediatamente anterior. 

Trata-se, portanto, de uma ponte de adequação técnica e sintática entre o código fonte gerado e o design previamente concebido. Se o manual dita que um botão deve ser vermelho e arredondado, a verificação atesta unicamente se, no código, os atributos de cor e borda conferem com a instrução.

## Validação

A Validação, em claro e profundo contraste, possui um foco estritamente externo, orgânico e voltado ao valor final percebido. Ela responde à pergunta fundamental de mercado: 

> *"Estamos construindo o sistema correto?"*

Esta etapa ocorre tipicamente ao final do processo de desenvolvimento (ou ao final de uma iteração incremental), com a complexa missão de avaliar se o produto de software executável efetivamente atende às necessidades reais, resolve o problema de negócio e se alinha às expectativas práticas do cliente final para o seu uso pretendido. 

Voltando ao exemplo anterior: a validação não quer saber a cor do botão, ela questiona se o botão realmente precisava existir ou se resolve a jornada do usuário de forma satisfatória.

## Auditoria de Gestão de Configuração de Software (GCS)

Para garantir que ambos os processos ocorram com integridade sistêmica, a documentação gerada e validada deve ser submetida a auditorias corporativas. Um exemplo prático e recorrente na indústria da qualidade é a Auditoria de Gestão de Configuração de Software (GCS). 

Esta prática visa garantir a **"Rastreabilidade"**, uma palavra-chave que descreve a capacidade de ligar inequivocamente um requisito a um código e a um teste.

### Exemplo Prático: Totem Lanchonete Tech
Num cenário avaliado e certificado de um sistema nomeado como "Totem Lanchonete Tech" (auditado em sua versão Baseline v2.0), a auditoria validou com sucesso a rastreabilidade entre três artefatos distintos e interdependentes:
1. Requisitos narrativos de negócio (User Stories) foram perfeitamente traduzidos para desenhos e telas interativas (Wireframes).
2. Estes foram cobertos por cenários de execução analítica (Casos de Teste).
3. Garantiu-se metodologicamente que todas as funcionalidades solicitadas (como "Voz" e "PIX") foram implementadas, validadas e formalizadas. 

A rastreabilidade atesta que nenhum código foi escrito sem um requisito, e nenhum requisito foi entregue sem um teste.
`
};
