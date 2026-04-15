import { Topic } from '../types';

export const topic6: Topic = {
  id: 'testes-funcionais',
  title: 'Testes Funcionais (Caixa-Preta)',
  description: 'Foco externo, particionamento em classes de equivalência e análise de valor limite.',
  order: 6,
  content: `
# Testes Funcionais (Caixa-Preta): Foco Externo e Particionamento

A primeira grande técnica clássica e pilar para geração inteligente de subdomínios eficientes repousa sob a vasta teoria dos Testes Funcionais, coloquialmente referenciados e adotados no mercado como testes de **"Caixa-Preta"**.

A premissa metodológica primordial dita que a estrutura mecânica interna da aplicação, seus intrincados algoritmos de busca e as minúcias do código-fonte devem ser completa e deliberadamente ignorados, permanecendo velados e "invisíveis" aos olhos do testador. 

Os cenários lógicos e os dados de teste correspondentes são deduzidos e forjados estritamente com suporte exclusivo na documentação externa e descritiva fornecida pelos engenheiros de requisitos.

A execução da caixa-preta persegue sistematicamente um objetivo estratégico duplo:
1. **Entradas Válidas:** Garantir o cenário ideal, atestando que o sistema é perfeitamente capaz de realizar e concretizar os comandos que foi arquitetado para fazer.
2. **Entradas Inválidas:** Certificar a resiliência orgânica do sistema, garantindo que exceções sejam interceptadas, travadas e adequadamente manipuladas com tratativas amigáveis.

## Critério: Particionamento em Classes de Equivalência

A teoria postula a divisão heurística metódica de todo o infinito domínio das entradas permitidas em intervalos quantitativos e qualitativos infinitamente menores, separados, discretos e disjuntos, batizados de **"Classes de Equivalência"**.

A "Premissa de Ouro" assume que qualquer valor individual numérico ou caracter isolado sorteado de dentro dos limites de uma mesma classe compartilha da mesma eficácia e capacidade de ativar a via algorítmica e revelar falhas. Se um teste com um representante sorteado de uma classe expõe um erro, qualquer outro valor daquele agrupamento produziria idêntica falha.

**Regra Prática:**
- É encorajado que um único roteiro de teste englobe dados válidos pertencentes a múltiplas classes de equivalência válidas num mesmo disparo.
- Entradas anômalas (classes "inválidas") precisam compulsoriamente ser injetadas de forma isolada, em testes únicos separados, para evitar que uma validação de exceção inicial trave o sistema e ofusque outra falha subjacente.

## Critério Adjacente: A Minuciosa Análise do Valor Limite (Boundary Value Analysis)

A esmagadora maioria dos defeitos lógicos concentra-se nas zonas cinzentas de contato, ou seja, nas fronteiras ou limites estreitos absolutos dos intervalos criados pelos dados lógicos.

Esta falha origina-se do simples engano humano de transcrição (ex: usar \`<\` ao invés de \`<=\`). O objetivo deste critério é escanear e bombardear a resiliência restritiva da fronteira com extrema precisão.

A execução exige obediência à **Regra da Tríade Limítrofe** (seleção em três pontos):
1. Um ponto imediatamente abaixo da faixa de fronteira.
2. Um ponto no valor exato da fronteira.
3. Um ponto imediatamente acima da fronteira.

### Exemplo: Sistema Operacional Admissional RH
Se o sistema estipula que a organização não contrata aplicantes de "0 a 15" anos, e admite "Aprendizes" de "16 a 17" anos, a modelagem se converte numa matriz matemática limite rigorosa:

- **Fronteira Basal Inferior (0 a 15):** Testa o "-1" (inválido), o "0" (limite basal), o "15" (limite superior da restrição) e o "16" (salto para a próxima classe).
- **Fronteira Adultez Superior e Fim Vital (18 a 70 e 71 a 120):** Testa o "70" (limite superior do adulto), o "71" (salto para a próxima classe), o "120" (limite biológico) e o "121" (estouro fantasma).

## O Grafo de Causa-Efeito e o Paradoxo Limitante

Quando regras de negócio simples dão espaço para teias de restrições interdependentes monstruosas (*se A e B, então C, mas se A e não D, então E*), o particionamento simplista implode. O **Grafo de Causa-Efeito** atua modelando visualmente a complexidade conectiva do efeito cruzado e combinado.

O grande trunfo da Caixa-Preta é a **Deteção Exclusiva da Omissão**: ela prova que a caixa-preta é superior à caixa-branca para encontrar funcionalidades que foram esquecidas de serem codificadas (omissões).

Contudo, padece do **Ponto Cego de Código Limitante**: a impossibilidade de rastrear o avanço da eletricidade na malha algorítmica. Se o programador inseriu um atalho maligno oculto (ex: \`if (idade == 55)\` faz algo inesperado), a caixa-preta, confiando apenas nas partições, ignoraria essa bomba instalada.
`
};
