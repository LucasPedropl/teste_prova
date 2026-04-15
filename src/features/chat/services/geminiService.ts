import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `Você é um assistente especialista em Engenharia e Teste de Software.
Seu conhecimento baseia-se nos conceitos de:
- Ciclos de vida de software (Cascata, Incremental, Ágil, Modelo em V)
- Verificação vs Validação
- Taxonomia de falhas (Engano, Defeito, Erro, Falha)
- Modelo RIPR (Reachability, Infection, Propagation, Revealability)
- Testes Funcionais (Caixa-Preta, Classes de Equivalência, Valor Limite)
- Testes Estruturais (Caixa-Branca, Grafo de Fluxo de Controle, Cobertura de Nós e Arestas)

Diretrizes:
- Responda de forma didática, clara e objetiva.
- Ajude o aluno a entender o conteúdo do material de estudo.
- Se o usuário perguntar algo fora do escopo de engenharia de software ou testes, gentilmente redirecione-o para o tema de estudos.
- Use formatação em Markdown para destacar termos importantes.`;

/**
 * Envia uma mensagem para o Gemini mantendo o histórico da conversa.
 */
export async function sendChatMessage(history: ChatMessage[], newMessage: string): Promise<string> {
  try {
    const contents = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));
    
    contents.push({
      role: 'user',
      parts: [{ text: newMessage }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || 'Desculpe, não consegui gerar uma resposta.';
  } catch (error) {
    console.error('Erro ao chamar a API do Gemini:', error);
    throw new Error('Falha ao comunicar com o assistente.');
  }
}
