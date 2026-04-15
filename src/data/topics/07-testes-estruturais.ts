import { Topic } from '../types';

export const topic7: Topic = {
  id: 'testes-estruturais',
  title: 'Testes Estruturais (Caixa-Branca)',
  description: 'O domínio algorítmico intenso, Grafo de Fluxo de Controle e critérios de cobertura.',
  order: 7,
  content: `
# Testes Estruturais (Caixa-Branca): O Domínio Algorítmico Intenso

Revertendo todos os paradigmas cegos discutidos anteriormente, as métricas e táticas empregadas na validação orgânica do software conhecidas como **Testes Estruturais** assumem acesso pleno, irrestrito e agressivo à lógica de implementação originária e ao código fonte analítico. 

Se os testes de Caixa-Preta se preocupam com o que o sistema *deveria* fazer de acordo com o manual, os testes de Caixa-Branca atestam visceralmente o que o software *realmente e fisicamente faz* no processamento dos nós e das teias obscuras do seu código.

A missão é derivar métricas matemáticas e equações de malha para traçar rotas exatas, atestando que estruturas procedimentais cruciais, decisões bifurcadas lógicas (IF/ELSE) e ciclos fechados (Loops) foram imperiosamente submetidos a carga lógica de processamento. Trata-se de erradicar o Ponto Cego da caixa-preta.

## A Teoria em Prática Limitante: O Grafo de Fluxo de Controle (GFC)

Para não desferir cegamente golpes computacionais, o arquiteto mapeia, rebaixa e transforma todo bloco e laço de programação complexa numa malha linear exata chamada **GFC (Grafo de Fluxo de Controle)**. 

Sua constituição formal atende por $GFC=(N,E,s)$:

- **Nó de Fluxo Lógico e Processamento Matemático ($N$):** Define os blocos coesos de comandos unitários. Se o fluxo entra num nó, ele executará todas as instruções ali dentro até sair, sem desvios no meio (exceto em laços iterativos como \`while\`, \`for\`).
- **Arestas Condutivas Transitórias e Matemáticas ($E$ ou Arcos):** Constituem os traços que forçam o transplante de estado e fluxo. É a flecha que parte do fundo de um nó isolado rumo à origem do próximo pilar sucessor.

## Critérios de Execução Matemáticos: All-Nodes e All-Edges

Para gerir o emaranhado, a Caixa-Branca impõe ramificações de abrangência e métricas de paragem matemáticas formais:

| Critério Estrutural de Paragem | Função Matemático-Analítica e Desdobramentos |
| :--- | :--- |
| **Critério Todos-Nós (All-Nodes / Statement Coverage)** | Exige que o esquadrão tático construa um portfólio de testes que consiga obrigar o fluxo interno a cruzar cada um dos blocos indivisíveis de nós catalogados na modelagem. Significa que todo trecho de instrução codificada seja lido ao menos numa passada veloz. |
| **Critério Todas-Arestas (All-Edges / Branch Coverage)** | O salto evolutivo drástico exige que não bastam as instâncias dos blocos, mas sim cobrir todas e quaisquer linhas abstrativas isoladas e ramificações conectivas de decisões. Cruzando os polos positivos e obrigatoriamente a bifurcação do desvio negativo (o \`else\` invisível, o bypass do \`if\`). |

### Exemplo Didático
Um código diz:
\`\`\`c
if (nota >= 7) { 
  imprimir("Aprovado"); 
} 
imprimir("Fim da avaliação");
\`\`\`

- **Nó 1:** A bifurcação \`if\`.
- **Nó 2:** O polo interno \`Aprovado\`.
- **Nó 3:** A foz terminal \`Fim\`.

Um estudante atira um "8" como teste. A malha corre Nó 1 -> Nó 2 -> Nó 3. Ele acabou de tocar 100% de todo bloco puramente unitário (Todos-Nós). Contudo, há a aresta abstrata e invisível lógica do bypass (quando a nota é menor que 7). Ela não transacionou. 

Para domar "Todas as Arestas", um segundo ataque é necessário, disparando a nota 4 e viajando do pilar 1 direto para a foz 3, sem tocar o 2.
`
};
