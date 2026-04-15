import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Topic } from '../../../data/types';
import { GoogleSearch } from '../../search/components/GoogleSearch';

interface TopicViewerProps {
  topic: Topic;
}

export function TopicViewer({ topic }: TopicViewerProps) {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 border-b-2 border-slate-200 pb-4">
        <div className="flex-1">
          <div className="text-[13px] text-slate-500 mb-2">data / topics / {topic.id}.ts</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight">
            {topic.order}. {topic.title}
          </h1>
        </div>
        <div className="w-full sm:w-auto shrink-0">
          <GoogleSearch />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-8 flex flex-col">
        <div className="font-bold text-[14px] text-blue-500 uppercase mb-4 flex justify-between">
          <span>Conteúdo Didático</span>
        </div>
        <p className="text-[15px] leading-relaxed text-slate-700 mb-6">
          {topic.description}
        </p>

        <div className="prose prose-slate prose-base sm:prose-lg max-w-none prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-a:text-blue-500 hover:prose-a:text-blue-600 prose-table:border-collapse prose-th:bg-slate-50 prose-th:p-3 sm:prose-th:p-4 prose-td:p-3 sm:prose-td:p-4 prose-td:border-t prose-th:border-t prose-th:border-slate-200 prose-td:border-slate-200 overflow-x-auto">
          <Markdown remarkPlugins={[remarkGfm]}>
            {topic.content}
          </Markdown>
        </div>
      </div>
    </div>
  );
}
