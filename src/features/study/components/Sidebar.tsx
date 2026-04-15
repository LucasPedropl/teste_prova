import React from 'react';
import { Topic } from '../../../data/types';
import clsx from 'clsx';

interface SidebarProps {
  topics: Topic[];
  selectedTopicId: string;
  onSelectTopic: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({ topics, selectedTopicId, onSelectTopic, isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed top-0 left-0 z-50 h-screen w-[260px] bg-[#1e1e2e] text-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6 flex items-center gap-2 text-blue-500 font-extrabold text-[1.2rem] tracking-wide mb-2">
          <span>📘</span> STUDYFLOW
        </div>
        
        <div className="px-6 mb-3 text-slate-500 text-[11px] uppercase tracking-[1px]">
          Pasta: /data/topics
        </div>
        
        <nav className="px-4 space-y-1 overflow-y-auto flex-1 font-mono text-[13px]">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => {
                onSelectTopic(topic.id);
                setIsOpen(false);
              }}
              className={clsx(
                "w-full flex items-center gap-2 px-3 py-2 rounded-md text-left transition-colors",
                selectedTopicId === topic.id
                  ? "bg-blue-500 text-white"
                  : "text-[#cbd5e1] hover:bg-[#2d2d44]"
              )}
            >
              <span className="shrink-0">📄</span>
              <span className="truncate">{topic.id}.ts</span>
            </button>
          ))}
        </nav>

        <div className="p-6 mt-auto text-[11px] opacity-50 font-sans">
          v1.0.0 - Engenharia e Teste
        </div>
      </aside>
    </>
  );
}
