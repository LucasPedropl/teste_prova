import { Topic } from '../types';

export const topic3: Topic = {
  id: 'testes-funcionais',
  title: 'Testes Funcionais (Caixa-Preta)',
  description: 'Critérios de Particionamento em Classes de Equivalência e Análise do Valor Limite.',
  order: 3,
  content: `
# Testes Funcionais: Particionamento em Classes de Equivalência e Análise do Valor Limite

Os Testes Funcionais, coloquialmente referenciados como testes de **"Caixa-Preta"**, baseiam-se na premissa de que a estrutura mecânica interna da aplicação e o código-fonte devem ser ignorados. Os cenários lógicos são deduzidos estritamente com suporte na documentação externa e requisitos.

Para garantir eficiência sem precisar testar todas as entradas possíveis do universo (teste exaustivo), utilizamos critérios matemáticos e lógicos para selecionar os melhores casos de teste.

## 1. Critério: Particionamento em Classes de Equivalência

A teoria postula a divisão heurística metódica de todo o domínio das entradas permitidas em intervalos quantitativos e qualitativos separados, discretos e disjuntos, batizados de **"Classes de Equivalência"**.

A premissa fundamental assume que qualquer valor individual sorteado de dentro dos limites de uma mesma classe compartilha da mesma eficácia e capacidade de revelar falhas. Se um teste com um representante de uma classe expõe um erro, assume-se que qualquer outro valor daquele agrupamento produziria idêntica falha.

**Regras Práticas de Particionamento:**
- **Classes Válidas:** Representam as entradas que o sistema deve aceitar e processar corretamente. É encorajado que um único roteiro de teste englobe dados válidos pertencentes a múltiplas classes de equivalência válidas num mesmo disparo.
- **Classes Inválidas:** Representam entradas anômalas ou exceções. Precisam compulsoriamente ser injetadas de forma isolada, em testes únicos separados, para evitar que uma validação de exceção inicial trave o sistema e ofusque outra falha subjacente.

## 2. Critério: Análise do Valor Limite (Boundary Value Analysis)

A esmagadora maioria dos defeitos lógicos concentra-se nas zonas cinzentas de contato, ou seja, nas fronteiras ou limites estreitos absolutos dos intervalos criados pelo Particionamento em Classes de Equivalência.

Esta falha origina-se frequentemente do simples engano humano de transcrição (ex: usar \`<\` ao invés de \`<=\`). O objetivo deste critério é escanear e bombardear a resiliência restritiva da fronteira com extrema precisão.

A execução exige obediência à **Regra da Tríade Limítrofe** (seleção em três pontos para cada fronteira):
1. Um ponto imediatamente abaixo da faixa de fronteira.
2. Um ponto no valor exato da fronteira.
3. Um ponto imediatamente acima da fronteira.

### Exemplo Prático de Valor Limite
Se um sistema estipula que um campo aceita valores de **10 a 50**:

- **Fronteira Inferior (10):** 
  - Imediatamente abaixo: \`9\` (Inválido)
  - Valor exato: \`10\` (Válido)
  - Imediatamente acima: \`11\` (Válido)
- **Fronteira Superior (50):**
  - Imediatamente abaixo: \`49\` (Válido)
  - Valor exato: \`50\` (Válido)
  - Imediatamente acima: \`51\` (Inválido)

Através da união do Particionamento em Classes de Equivalência com a Análise do Valor Limite, o engenheiro de testes consegue cobrir o sistema de forma robusta e matematicamente otimizada, sem precisar testar todos os números possíveis.
`
};
