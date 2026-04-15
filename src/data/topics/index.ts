import { topic1 } from './01-ciclos-de-vida';
import { topic2 } from './02-verificacao-validacao';
import { topic3 } from './03-taxonomia-causalidade';
import { topic4 } from './04-mecanismo-ripr';
import { topic5 } from './05-teste-vs-depuracao';
import { topic6 } from './06-testes-funcionais';
import { topic7 } from './07-testes-estruturais';
import { topic8 } from './08-conclusao';
import { Topic } from '../types';

export const topics: Topic[] = [
  topic1,
  topic2,
  topic3,
  topic4,
  topic5,
  topic6,
  topic7,
  topic8,
].sort((a, b) => a.order - b.order);
