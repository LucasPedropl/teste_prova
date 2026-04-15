import React from 'react';
import { Topic } from '../../../data/types';
import clsx from 'clsx';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';

interface SidebarProps {
  topics: Topic[];
  selectedTopicId: string;
  onSelectTopic: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export function Sidebar({ topics, selectedTopicId, onSelectTopic, isOpen, setIsOpen, isCollapsed, setIsCollapsed }: SidebarProps) {
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
          "fixed top-0 left-0 z-50 h-screen bg-[#1e1e2e] text-white border-r border-slate-200 transform transition-all duration-300 ease-in-out lg:translate-x-0 lg:static flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isCollapsed ? "w-[260px] lg:w-[80px]" : "w-[260px]"
        )}
      >
        <div className={clsx(
          "p-6 flex items-center text-blue-500 font-extrabold text-[1.2rem] tracking-wide mb-2 transition-all",
          isCollapsed ? "gap-2 lg:justify-center lg:px-0" : "gap-2"
        )}>
          <span className="text-xl shrink-0">📘</span> 
          <span className={clsx("transition-opacity", isCollapsed ? "lg:hidden" : "block")}>STUDYFLOW</span>
        </div>
        
        <div className={clsx(
          "px-6 mb-3 text-slate-500 text-[11px] uppercase tracking-[1px] whitespace-nowrap overflow-hidden transition-opacity",
          isCollapsed ? "lg:hidden" : "block"
        )}>
          Ferramentas
        </div>

        <div className={clsx("px-4 mb-4 transition-all", isCollapsed ? "lg:px-2" : "")}>
          <button
            title={isCollapsed ? "Visualizador de PDF" : undefined}
            onClick={() => {
              onSelectTopic('pdf-viewer');
              setIsOpen(false);
            }}
            className={clsx(
              "w-full flex items-center rounded-md text-left transition-all",
              isCollapsed ? "gap-2 px-3 py-2 lg:justify-center lg:py-3 lg:px-0" : "gap-2 px-3 py-2",
              selectedTopicId === 'pdf-viewer'
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "text-[#cbd5e1] hover:bg-[#2d2d44]"
            )}
          >
            <FileText className="w-5 h-5 shrink-0" />
            <span className={clsx("font-medium truncate transition-opacity", isCollapsed ? "lg:hidden" : "block")}>
              Visualizador de PDF
            </span>
          </button>
        </div>

        <div className={clsx(
          "px-6 mb-3 text-slate-500 text-[11px] uppercase tracking-[1px] whitespace-nowrap overflow-hidden transition-opacity",
          isCollapsed ? "lg:hidden" : "block"
        )}>
          Pasta: /data/topics
        </div>
        
        <nav className={clsx(
          "space-y-1 overflow-y-auto flex-1 font-mono text-[13px] transition-all [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", 
          isCollapsed ? "px-4 lg:px-2" : "px-4"
        )}>
          {topics.map((topic) => (
            <button
              key={topic.id}
              title={isCollapsed ? `${topic.order}. ${topic.title}` : undefined}
              onClick={() => {
                onSelectTopic(topic.id);
                setIsOpen(false);
              }}
              className={clsx(
                "w-full flex items-center rounded-md text-left transition-all",
                isCollapsed ? "gap-2 px-3 py-2 lg:justify-center lg:py-3 lg:px-0" : "gap-2 px-3 py-2",
                selectedTopicId === topic.id
                  ? "bg-blue-500 text-white"
                  : "text-[#cbd5e1] hover:bg-[#2d2d44]"
              )}
            >
              <span className="shrink-0 text-lg">📄</span>
              <span className={clsx("truncate transition-opacity", isCollapsed ? "lg:hidden" : "block")}>
                {topic.id}.ts
              </span>
            </button>
          ))}
        </nav>

        <div className="mt-auto border-t border-[#2d2d44]">
          <div className={clsx(
            "p-4 text-[11px] opacity-50 font-sans whitespace-nowrap overflow-hidden transition-opacity",
            isCollapsed ? "lg:hidden" : "block"
          )}>
            v1.0.0 - Engenharia e Teste
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex w-full p-4 items-center justify-center text-slate-400 hover:text-white hover:bg-[#2d2d44] transition-colors"
            title={isCollapsed ? "Expandir menu" : "Recolher menu"}
          >
            {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
        </div>
      </aside>
    </>
  );
}
