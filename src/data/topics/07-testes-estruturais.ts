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

## Exemplos Visuais de Grafos de Fluxo de Controle

Abaixo, ilustramos como as estruturas clássicas de programação são mapeadas para Grafos de Fluxo de Controle, com a narração passo a passo do que ocorre em cada linha.

<div class="flex flex-col my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
<div class="flex flex-col lg:flex-row gap-8 items-center w-full">
<div class="flex-1 w-full">
<h3 class="mt-0 mb-4 text-blue-600">1. Estrutura Condicional (IF / ELSE)</h3>
<pre><code class="language-c">if (x > 0) {
    y = 1;  // Nó 2
} else {
    y = -1; // Nó 3
}
z = 2;      // Nó 4</code></pre>
</div>
<div class="flex-1 flex justify-center">
<svg width="200" height="250" viewBox="0 0 200 250" style="font-family: sans-serif;">
<defs>
<marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
</marker>
</defs>
<circle cx="100" cy="30" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="35" text-anchor="middle" fill="#1e293b" font-weight="bold">1</text>
<circle cx="50" cy="100" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="50" y="105" text-anchor="middle" fill="#1e293b" font-weight="bold">2</text>
<circle cx="150" cy="100" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="150" y="105" text-anchor="middle" fill="#1e293b" font-weight="bold">3</text>
<circle cx="100" cy="170" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="175" text-anchor="middle" fill="#1e293b" font-weight="bold">4</text>
<line x1="90" y1="42" x2="58" y2="88" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
<text x="65" y="60" fill="#22c55e" font-size="12" font-weight="bold">V</text>
<line x1="110" y1="42" x2="142" y2="88" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
<text x="135" y="60" fill="#ef4444" font-size="12" font-weight="bold">F</text>
<line x1="58" y1="112" x2="90" y2="158" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
<line x1="142" y1="112" x2="110" y2="158" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>
</svg>
</div>
</div>
<div class="mt-6 text-[15px] text-slate-700 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
<strong>Entendendo o Grafo:</strong> O fluxo começa no <strong>Nó 1</strong>, onde a condição <code>x > 0</code> é avaliada. Se a condição for Verdadeira (V), o código entra no bloco do IF e o fluxo desvia para a esquerda, executando o <strong>Nó 2</strong> (<code>y = 1</code>). Se a condição for Falsa (F), o código entra no bloco ELSE, desviando para a direita e executando o <strong>Nó 3</strong> (<code>y = -1</code>). Independentemente do caminho escolhido, ambos os fluxos convergem no final para o <strong>Nó 4</strong> (<code>z = 2</code>), que é a instrução logo após a estrutura condicional.
</div>
</div>

<div class="flex flex-col my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
<div class="flex flex-col lg:flex-row gap-8 items-center w-full">
<div class="flex-1 w-full">
<h3 class="mt-0 mb-4 text-blue-600">2. Estrutura de Repetição (WHILE)</h3>
<pre><code class="language-c">while (x > 0) { // Nó 1
    x--;        // Nó 2
}
z = 2;          // Nó 3</code></pre>
</div>
<div class="flex-1 flex justify-center">
<svg width="200" height="200" viewBox="0 0 200 200" style="font-family: sans-serif;">
<defs>
<marker id="arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
</marker>
</defs>
<circle cx="100" cy="50" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="55" text-anchor="middle" fill="#1e293b" font-weight="bold">1</text>
<circle cx="100" cy="130" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="135" text-anchor="middle" fill="#1e293b" font-weight="bold">2</text>
<circle cx="180" cy="50" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="180" y="55" text-anchor="middle" fill="#1e293b" font-weight="bold">3</text>
<line x1="100" y1="66" x2="100" y2="114" stroke="#64748b" stroke-width="2" marker-end="url(#arrow2)"/>
<text x="110" y="95" fill="#22c55e" font-size="12" font-weight="bold">V</text>
<path d="M 84 130 Q 40 130 40 90 Q 40 50 84 50" fill="none" stroke="#64748b" stroke-width="2" marker-end="url(#arrow2)"/>
<line x1="116" y1="50" x2="164" y2="50" stroke="#64748b" stroke-width="2" marker-end="url(#arrow2)"/>
<text x="140" y="40" fill="#ef4444" font-size="12" font-weight="bold">F</text>
</svg>
</div>
</div>
<div class="mt-6 text-[15px] text-slate-700 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
<strong>Entendendo o Grafo:</strong> O laço <code>while</code> começa no <strong>Nó 1</strong> testando a condição <code>x > 0</code>. Se for Verdadeira (V), o fluxo desce para o corpo do laço no <strong>Nó 2</strong> (<code>x--</code>). A característica principal do laço é a linha curva à esquerda: após executar o Nó 2, o fluxo <strong>retorna obrigatoriamente</strong> ao Nó 1 para testar a condição novamente, criando um ciclo. Quando a condição finalmente se torna Falsa (F), o fluxo quebra o ciclo e salta para a direita, indo direto para o <strong>Nó 3</strong> (<code>z = 2</code>).
</div>
</div>

<div class="flex flex-col my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
<div class="flex flex-col lg:flex-row gap-8 items-center w-full">
<div class="flex-1 w-full">
<h3 class="mt-0 mb-4 text-blue-600">3. Estrutura de Repetição (FOR)</h3>
<pre><code class="language-c">for (int i=0; i<5; i++) {
    // 1: i=0
    // 2: i<5
    // 4: i++
    y++; // Nó 3
}
z = 2;   // Nó 5</code></pre>
</div>
<div class="flex-1 flex justify-center">
<svg width="250" height="250" viewBox="0 0 250 250" style="font-family: sans-serif;">
<defs>
<marker id="arrow3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
</marker>
</defs>
<circle cx="100" cy="30" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="35" text-anchor="middle" fill="#1e293b" font-weight="bold">1</text>
<circle cx="100" cy="100" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="105" text-anchor="middle" fill="#1e293b" font-weight="bold">2</text>
<circle cx="100" cy="170" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="175" text-anchor="middle" fill="#1e293b" font-weight="bold">3</text>
<circle cx="40" cy="135" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="40" y="140" text-anchor="middle" fill="#1e293b" font-weight="bold">4</text>
<circle cx="180" cy="100" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="180" y="105" text-anchor="middle" fill="#1e293b" font-weight="bold">5</text>
<line x1="100" y1="46" x2="100" y2="84" stroke="#64748b" stroke-width="2" marker-end="url(#arrow3)"/>
<line x1="100" y1="116" x2="100" y2="154" stroke="#64748b" stroke-width="2" marker-end="url(#arrow3)"/>
<text x="110" y="140" fill="#22c55e" font-size="12" font-weight="bold">V</text>
<line x1="86" y1="162" x2="54" y2="143" stroke="#64748b" stroke-width="2" marker-end="url(#arrow3)"/>
<line x1="54" y1="127" x2="86" y2="108" stroke="#64748b" stroke-width="2" marker-end="url(#arrow3)"/>
<line x1="116" y1="100" x2="164" y2="100" stroke="#64748b" stroke-width="2" marker-end="url(#arrow3)"/>
<text x="140" y="90" fill="#ef4444" font-size="12" font-weight="bold">F</text>
</svg>
</div>
</div>
<div class="mt-6 text-[15px] text-slate-700 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
<strong>Entendendo o Grafo:</strong> O laço <code>for</code> é desmembrado em várias partes. O <strong>Nó 1</strong> é a inicialização (<code>i=0</code>), que ocorre apenas uma vez. O fluxo desce para o <strong>Nó 2</strong>, que é a condição (<code>i<5</code>). Se Verdadeira (V), o fluxo vai para o corpo do laço no <strong>Nó 3</strong> (<code>y++</code>). Após executar o corpo, o fluxo sobe pela esquerda para o <strong>Nó 4</strong>, que é o incremento (<code>i++</code>), e de lá volta para o Nó 2 para testar a condição novamente. Quando a condição se torna Falsa (F), o laço termina e o fluxo vai para a direita, alcançando o <strong>Nó 5</strong> (<code>z = 2</code>).
</div>
</div>

<div class="flex flex-col my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
<div class="flex flex-col lg:flex-row gap-8 items-center w-full">
<div class="flex-1 w-full">
<h3 class="mt-0 mb-4 text-blue-600">4. Estrutura de Múltipla Escolha (SWITCH)</h3>
<pre><code class="language-c">switch(x) { // Nó 1
    case 1: 
        y = 1; break; // Nó 2
    case 2: 
        y = 2; break; // Nó 3
    default: 
        y = 0;        // Nó 4
}
z = 2;                // Nó 5</code></pre>
</div>
<div class="flex-1 flex justify-center">
<svg width="250" height="250" viewBox="0 0 250 250" style="font-family: sans-serif;">
<defs>
<marker id="arrow4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
</marker>
</defs>
<circle cx="125" cy="30" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="125" y="35" text-anchor="middle" fill="#1e293b" font-weight="bold">1</text>
<circle cx="50" cy="100" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="50" y="105" text-anchor="middle" fill="#1e293b" font-weight="bold">2</text>
<circle cx="125" cy="100" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="125" y="105" text-anchor="middle" fill="#1e293b" font-weight="bold">3</text>
<circle cx="200" cy="100" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="200" y="105" text-anchor="middle" fill="#1e293b" font-weight="bold">4</text>
<circle cx="125" cy="180" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="125" y="185" text-anchor="middle" fill="#1e293b" font-weight="bold">5</text>
<line x1="114" y1="42" x2="61" y2="88" stroke="#64748b" stroke-width="2" marker-end="url(#arrow4)"/>
<line x1="125" y1="46" x2="125" y2="84" stroke="#64748b" stroke-width="2" marker-end="url(#arrow4)"/>
<line x1="136" y1="42" x2="189" y2="88" stroke="#64748b" stroke-width="2" marker-end="url(#arrow4)"/>
<line x1="61" y1="112" x2="114" y2="168" stroke="#64748b" stroke-width="2" marker-end="url(#arrow4)"/>
<line x1="125" y1="116" x2="125" y2="164" stroke="#64748b" stroke-width="2" marker-end="url(#arrow4)"/>
<line x1="189" y1="112" x2="136" y2="168" stroke="#64748b" stroke-width="2" marker-end="url(#arrow4)"/>
</svg>
</div>
</div>
<div class="mt-6 text-[15px] text-slate-700 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
<strong>Entendendo o Grafo:</strong> O <strong>Nó 1</strong> avalia o valor da variável <code>x</code>. A partir dele, o fluxo se ramifica em múltiplas direções possíveis simultaneamente, como um leque. Se <code>x == 1</code>, vai para o <strong>Nó 2</strong>. Se <code>x == 2</code>, vai para o <strong>Nó 3</strong>. Se não for nenhum dos casos previstos, cai no bloco <code>default</code> (<strong>Nó 4</strong>). O comando <code>break</code> presente em cada <code>case</code> faz com que, após a execução do bloco correspondente, o fluxo salte diretamente para o fim da estrutura, convergindo todos no <strong>Nó 5</strong> (<code>z = 2</code>).
</div>
</div>

<div class="flex flex-col my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
<div class="flex flex-col lg:flex-row gap-8 items-center w-full">
<div class="flex-1 w-full">
<h3 class="mt-0 mb-4 text-blue-600">5. Estrutura de Repetição (DO-WHILE)</h3>
<pre><code class="language-c">do {
    x--;        // Nó 1
} while(x > 0); // Nó 2
z = 2;          // Nó 3</code></pre>
</div>
<div class="flex-1 flex justify-center">
<svg width="200" height="250" viewBox="0 0 200 250" style="font-family: sans-serif;">
<defs>
<marker id="arrow5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
</marker>
</defs>
<circle cx="100" cy="50" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="55" text-anchor="middle" fill="#1e293b" font-weight="bold">1</text>
<circle cx="100" cy="130" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="135" text-anchor="middle" fill="#1e293b" font-weight="bold">2</text>
<circle cx="100" cy="210" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="215" text-anchor="middle" fill="#1e293b" font-weight="bold">3</text>
<line x1="100" y1="66" x2="100" y2="114" stroke="#64748b" stroke-width="2" marker-end="url(#arrow5)"/>
<path d="M 84 130 Q 40 130 40 90 Q 40 50 84 50" fill="none" stroke="#64748b" stroke-width="2" marker-end="url(#arrow5)"/>
<text x="50" y="95" fill="#22c55e" font-size="12" font-weight="bold">V</text>
<line x1="100" y1="146" x2="100" y2="194" stroke="#64748b" stroke-width="2" marker-end="url(#arrow5)"/>
<text x="110" y="175" fill="#ef4444" font-size="12" font-weight="bold">F</text>
</svg>
</div>
</div>
<div class="mt-6 text-[15px] text-slate-700 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
<strong>Entendendo o Grafo:</strong> Diferente do <code>while</code> comum, o <code>do-while</code> garante que o corpo do laço seja executado <strong>pelo menos uma vez</strong> antes de qualquer teste. O fluxo entra direto no <strong>Nó 1</strong> (<code>x--</code>). Só depois ele desce para o <strong>Nó 2</strong>, onde a condição <code>x > 0</code> é avaliada. Se for Verdadeira (V), o fluxo faz a curva à esquerda e sobe de volta para o Nó 1. Se for Falsa (F), o laço é quebrado e o fluxo desce direto para o <strong>Nó 3</strong> (<code>z = 2</code>).
</div>
</div>

<div class="flex flex-col my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
<div class="flex flex-col lg:flex-row gap-8 items-center w-full">
<div class="flex-1 w-full">
<h3 class="mt-0 mb-4 text-blue-600">6. Condições Aninhadas (IF dentro de IF)</h3>
<pre><code class="language-c">if (x > 0) {      // Nó 1
    if (y > 0) {  // Nó 2
        z = 1;    // Nó 3
    }
}
w = 2;            // Nó 4</code></pre>
</div>
<div class="flex-1 flex justify-center">
<svg width="250" height="280" viewBox="0 0 250 280" style="font-family: sans-serif;">
<defs>
<marker id="arrow6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b" />
</marker>
</defs>
<circle cx="100" cy="30" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="35" text-anchor="middle" fill="#1e293b" font-weight="bold">1</text>
<circle cx="100" cy="100" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="105" text-anchor="middle" fill="#1e293b" font-weight="bold">2</text>
<circle cx="100" cy="170" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="175" text-anchor="middle" fill="#1e293b" font-weight="bold">3</text>
<circle cx="100" cy="240" r="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
<text x="100" y="245" text-anchor="middle" fill="#1e293b" font-weight="bold">4</text>
<line x1="100" y1="46" x2="100" y2="84" stroke="#64748b" stroke-width="2" marker-end="url(#arrow6)"/>
<text x="85" y="70" fill="#22c55e" font-size="12" font-weight="bold">V</text>
<path d="M 116 30 Q 200 30 200 135 Q 200 240 116 240" fill="none" stroke="#64748b" stroke-width="2" marker-end="url(#arrow6)"/>
<text x="180" y="60" fill="#ef4444" font-size="12" font-weight="bold">F</text>
<line x1="100" y1="116" x2="100" y2="154" stroke="#64748b" stroke-width="2" marker-end="url(#arrow6)"/>
<text x="85" y="140" fill="#22c55e" font-size="12" font-weight="bold">V</text>
<path d="M 116 100 Q 160 100 160 170 Q 160 240 116 240" fill="none" stroke="#64748b" stroke-width="2" marker-end="url(#arrow6)"/>
<text x="145" y="130" fill="#ef4444" font-size="12" font-weight="bold">F</text>
<line x1="100" y1="186" x2="100" y2="224" stroke="#64748b" stroke-width="2" marker-end="url(#arrow6)"/>
</svg>
</div>
</div>
<div class="mt-6 text-[15px] text-slate-700 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
<strong>Entendendo o Grafo:</strong> Este grafo ilustra IFs aninhados (um dentro do outro), que também representam como o computador lê condições compostas com <code>&&</code> (AND lógico). O <strong>Nó 1</strong> testa a primeira condição (<code>x > 0</code>). Se for Falsa (F), ele faz um "curto-circuito": pula todo o resto fazendo uma curva longa pela direita e vai direto para o <strong>Nó 4</strong>. Se for Verdadeira (V), ele desce para o <strong>Nó 2</strong>, que testa a segunda condição (<code>y > 0</code>). Se o Nó 2 for Falso (F), ele também faz uma curva pela direita e pula para o Nó 4. Apenas se ambas as condições forem Verdadeiras é que o fluxo alcança o <strong>Nó 3</strong> (<code>z = 1</code>), descendo em seguida para o Nó 4.
</div>
</div>

## Critérios de Execução Matemáticos: All-Nodes e All-Edges

Para gerir o emaranhado, a Caixa-Branca impõe ramificações de abrangência e métricas de paragem matemáticas formais:

| Critério Estrutural de Paragem | Função Matemático-Analítica e Desdobramentos |
| :--- | :--- |
| **Critério Todos-Nós (All-Nodes / Statement Coverage)** | Exige que o esquadrão tático construa um portfólio de testes que consiga obrigar o fluxo interno a cruzar cada um dos blocos indivisíveis de nós catalogados na modelagem. Significa que todo trecho de instrução codificada seja lido ao menos numa passada veloz. |
| **Critério Todas-Arestas (All-Edges / Branch Coverage)** | O salto evolutivo drástico exige que não bastam as instâncias dos blocos, mas sim cobrir todas e quaisquer linhas abstrativas isoladas e ramificações conectivas de decisões. Cruzando os polos positivos e obrigatoriamente a bifurcação do desvio negativo (o \`else\` invisível, o bypass do \`if\`). |
`
};
