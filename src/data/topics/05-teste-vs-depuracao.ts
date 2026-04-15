import { Topic } from '../types';

export const topic5: Topic = {
  id: 'teste-vs-depuracao',
  title: 'Teste vs. Depuração e Anatomia do Teste',
  description: 'A diferença entre testar e depurar, e os componentes de um Caso de Teste.',
  order: 5,
  content: `
# Teste vs. Depuração (Debugging): O Abismo Conceitual

Ainda no domínio da semântica operacional, deve-se afastar de forma inegociável o conceito de "Teste" do conceito de "Depuração". Ambos atuam sobre o mesmo código, mas de formas opostas.

- **O Teste de Software** tem o objetivo focado, exclusivo e avaliativo de encontrar critérios matemáticos para construir e aplicar casos de teste que, ao rodarem, revelarão sintomaticamente a presença de falhas (consequências) no sistema. O teste não conserta nada, ele diagnostica a doença.
- **A Depuração (Debugging)**, por sua vez, é uma atividade de investigação algorítmica posterior de nível de código. Dada uma falha que já foi diagnosticada e revelada pelos testes, o programador realiza a depuração para investigar a raiz do mal, rastrear o estado de memória internamente, encontrar a exata linha de código responsável (o Defeito) e efetuar a correção e reescrita algorítmica definitiva do código-fonte. 

> *Testar revela o problema comportamental; depurar arranca o mal pela sua raiz causal.*

---

# Anatomia do Teste: Terminologia, Procedimentos e Casos

Para aplicar a ciência da qualidade sem recorrer à suposição ineficiente, a literatura consolida uma série de termos vitais:

- **Domínio de Entrada $D(P)$:** O conjunto absurdamente vasto, frequentemente infinito, de todos os possíveis valores de dados numéricos e textuais que poderiam ser inseridos no programa.
- **Teste Exaustivo:** Testar todo o universo de $D(P)$ com todas as permutações possíveis (uma impossibilidade financeira e temporal absoluta).
- **Subdomínios:** Fatias amostrais hiper-representativas extraídas do conjunto total para viabilizar o teste.
- **Critério de Teste:** Coleção de regras formais utilizada para balizar a filtragem e extração destes subdomínios.
- **Requisito de Teste:** Elemento estrito, específico, mensurável e observável que a bateria de testes é obrigada a exercitar.
- **Conjunto de Testes ($T$):** Portfólio de casos de teste concebidos.
- **Procedimento de Teste:** O processo global que orquestra tudo (Planejamento, Projeto, Execução e Análise).

## O Caso de Teste: Componentes Constituintes

A unidade atômica e mais granular de documentação e do trabalho de qualidade prático é o **Caso de Teste**. Ele é um roteiro isolado e determinístico de validação. Para ser considerado válido e profissional, deve obrigatoriamente ser composto pelos seguintes atributos formais:

| Componente | Finalidade do Componente |
| :--- | :--- |
| **Título / Descrição** | Identificação contextual clara e inequívoca de qual cenário ou regra de negócio exata será avaliada nesta execução particular. |
| **Pré-condições** | Define o estado estrito, basal e inegociável em que o banco de dados, o usuário logado e as variáveis da máquina devem imperativamente se encontrar antes que as ações interativas do teste sequer comecem a ser performadas (Ex: "O usuário deve possuir R$100 na conta corrente"). |
| **Entradas (Dados de Teste)** | Os valores rigorosos, numéricos, textuais e as injeções exatas de variáveis que alimentarão os formulários e rotinas do sistema. |
| **Procedimento de Execução** | O roteiro e manual passo a passo das ações orgânicas e mecânicas que o testador realizará nas telas e APIs. |
| **Saída Esperada (Oráculo)** | A predição absoluta, documentada e infalível do comportamento, da tela ou do valor numérico que o sistema DEVE obrigatoriamente retornar. A falha só é considerada revelada quando a "Saída Obtida" ao final divergente matematicamente ou visualmente deste "Oráculo" determinado. |
`
};
