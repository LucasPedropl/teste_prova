import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { topics } from '../src/data/topics/index';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateLLMsTxt = () => {
  let content = `# Guia de Testes de Software\n\n`;
  content += `Este documento contém o conteúdo completo do guia de testes de software, otimizado para leitura por Inteligências Artificiais (LLMs).\n\n`;

  topics.forEach(topic => {
    content += `## ${topic.title}\n\n`;
    content += `${topic.description}\n\n`;
    content += `${topic.content}\n\n`;
    content += `---\n\n`;
  });

  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.join(publicDir, 'llms.txt'), content, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), content, 'utf-8');
  console.log('llms.txt generated successfully!');
};

generateLLMsTxt();
