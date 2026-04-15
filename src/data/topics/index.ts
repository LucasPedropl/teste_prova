import { topic1 } from './01-conceitos-basicos';
import { topic2 } from './02-casos-requisitos-criterios';
import { topic3 } from './03-testes-funcionais';
import { topic4 } from './04-testes-estruturais';
import { Topic } from '../types';

export const topics: Topic[] = [
  topic1,
  topic2,
  topic3,
  topic4,
].sort((a, b) => a.order - b.order);
