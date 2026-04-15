import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { TopicViewer } from './TopicViewer';
import { PdfWorkspace } from './PdfWorkspace';
import { topics } from '../../../data/topics';
import { ChatWidget } from '../../chat/components/ChatWidget';
import clsx from 'clsx';
import { TextHighlighter } from './TextHighlighter';

export function StudyLayout() {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const selectedTopicId = topicId || topics[0].id;
  const selectedTopic = topics.find(t => t.id === selectedTopicId);

  const handleSelectTopic = (id: string) => {
    navigate(`/topic/${id}`);
    setIsSidebarOpen(false);
  };

  return (
    <div className={clsx(
      "h-screen bg-slate-50 flex flex-col lg:grid overflow-hidden text-slate-700 font-sans relative transition-all duration-300",
      isSidebarCollapsed ? "lg:grid-cols-[80px_1fr]" : "lg:grid-cols-[260px_1fr]"
    )}>
      <TextHighlighter />
      {/* Top Navigation Bar (Mobile) */}
      <header className="bg-white border-b border-slate-200 h-16 flex items-center px-4 shrink-0 lg:hidden z-30">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 -ml-2 mr-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-blue-500 text-xl">📘</span>
          <h1 className="font-extrabold text-blue-500 tracking-wide text-lg">
            STUDYFLOW
          </h1>
        </div>
      </header>

      <Sidebar
        topics={topics}
        selectedTopicId={selectedTopicId}
        onSelectTopic={handleSelectTopic}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />
      
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-10 flex flex-col gap-6">
        <div className={clsx("w-full h-full", selectedTopicId !== 'pdf-viewer' && "hidden")}>
          <PdfWorkspace />
        </div>
        <div className={clsx("w-full h-full", selectedTopicId === 'pdf-viewer' && "hidden")}>
          {selectedTopic && <TopicViewer topic={selectedTopic} />}
        </div>
      </main>

      <ChatWidget />
    </div>
  );
}
