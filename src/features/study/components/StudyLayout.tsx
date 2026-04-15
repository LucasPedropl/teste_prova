import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { TopicViewer } from './TopicViewer';
import { topics } from '../../../data/topics';

export function StudyLayout() {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(topics[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const selectedTopic = topics.find(t => t.id === selectedTopicId) || topics[0];

  return (
    <div className="h-screen bg-slate-50 flex flex-col lg:grid lg:grid-cols-[260px_1fr] overflow-hidden text-slate-700 font-sans">
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
        onSelectTopic={setSelectedTopicId}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="flex-1 overflow-y-auto p-6 lg:p-10 flex flex-col gap-6">
        <TopicViewer topic={selectedTopic} />
      </main>
    </div>
  );
}
