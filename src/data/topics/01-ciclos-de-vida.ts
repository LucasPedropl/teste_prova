import { Topic } from '../types';

export const topic1: Topic = {
  id: 'ciclos-de-vida',
  title: 'Ciclos de Vida do Software',
  description: 'A inserção estratégica dos testes nos diferentes modelos de desenvolvimento.',
  order: 1,
  content: `
# Ciclos de Vida do Software e a Inserção Estratégica dos Testes

O teste de software não ocorre de forma isolada em um vácuo procedimental, tampouco é uma etapa jogada ao acaso ao final de um projeto. Ele deve acompanhar simbioticamente os modelos de desenvolvimento adotados pela engenharia de software, adaptando-se às necessidades temporais e processuais.

A estrutura exata de como, onde e quando o software é submetido a testes depende inteiramente do ciclo de vida escolhido para a concepção do produto.

## Modelos Arquiteturais de Desenvolvimento

| Modelo de Ciclo de Vida | Dinâmica de Desenvolvimento e Inserção de Testes |
| :--- | :--- |
| **Modelo em Cascata (Waterfall)** | Trata-se de uma abordagem clássica e sequencial. O desenvolvimento flui em estágios rígidos de cima para baixo. A sequência engloba a Definição de Requisitos, seguida pelo Projeto do Software e culminando na Implementação. Somente a partir deste ponto os testes dinâmicos são introduzidos formalmente, primeiramente através do Teste de Unidades, avançando para a Integração e Teste do Sistema como um todo, finalizando com a Operação e Manutenção. |
| **Modelo Incremental** | Neste modelo evolutivo, o sistema não é desenvolvido nem entregue de uma única vez. A partir de uma descrição ou esboço primário, o software entra num ciclo de Especificação, Desenvolvimento e Validação, construindo partes graduais (versões intermediárias) até que se alcance, iterativamente, a versão final do produto. |
| **Prototipação** | Consiste num ciclo altamente iterativo projetado para alinhar as expectativas antes da codificação pesada. Inicia-se com a obtenção de requisitos essenciais e a elaboração de um projeto rápido, resultando na construção imediata de um protótipo executável. Este protótipo é então avaliado (testado) ativamente junto ao cliente, permitindo refinamentos sucessivos iterativos. |
| **Metodologias Ágeis (Scrum)** | O paradigma ágil dilui a atividade de teste de forma contínua em ciclos de desenvolvimento extremamente curtos, denominados Sprints. Partindo de uma lista mestre (Product Backlog), tarefas são alocadas (Sprint Backlog). Durante as Sprints de uma a quatro semanas, com acompanhamento de 24 horas, o desenvolvimento e os testes ocorrem concorrentemente, gerando incrementos de trabalho finalizado (Finished Work) contínuo. |

## O Modelo em V

Além dessas metodologias de fluxo de trabalho, a teoria da qualidade baseia-se amplamente no **"Modelo em V"**. 

Este modelo demonstra didaticamente a forte ligação lógica, causal e espelhada entre as fases de construção arquitetural e as fases de teste de um sistema. 

- As etapas do **lado esquerdo do "V"** (análise de requisitos e projeto arquitetural) correspondem diretamente, no **lado direito oposto do "V"**, à concepção e execução dos testes equivalentes (testes de aceitação, sistema e integração). 
- Isso ilustra profundamente que os níveis de teste são, na realidade, mecanismos de verificação concebidos desde o primeiro dia para espelhar, auditar e validar as etapas de design de software que as antecederam, operando como uma malha de segurança estrutural.
`
};
