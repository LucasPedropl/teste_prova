import React, { useEffect, useState } from 'react';
import { Highlighter } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { getSelectionOffsets, saveHighlight, applyHighlightByOffsets } from '../utils/highlight';
import { topics } from '../../../data/topics';

export function TextHighlighter() {
  const { topicId } = useParams<{ topicId: string }>();
  const activeTopicId = topicId || topics[0].id;
  
  const [menuPos, setMenuPos] = useState<{ x: number, y: number } | null>(null);
  const [selectionRange, setSelectionRange] = useState<Range | null>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const selection = window.getSelection();
      const root = document.getElementById('topic-content');
      
      if (selection && selection.toString().trim().length > 0 && root && root.contains(selection.anchorNode)) {
        e.preventDefault();
        setMenuPos({ x: e.clientX, y: e.clientY });
        setSelectionRange(selection.getRangeAt(0).cloneRange());
      } else {
        setMenuPos(null);
        setSelectionRange(null);
      }
    };

    const handleClick = () => {
      if (menuPos) {
        setMenuPos(null);
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
    };
  }, [menuPos]);

  const applyHighlight = () => {
    if (!selectionRange) return;
    
    const root = document.getElementById('topic-content');
    if (!root) return;

    const { start, end } = getSelectionOffsets(root, selectionRange);
    
    if (start !== end) {
      saveHighlight(activeTopicId, {
        id: Date.now().toString(),
        start,
        end,
        text: selectionRange.toString()
      });
      
      applyHighlightByOffsets(root, start, end);
    }
    
    window.getSelection()?.removeAllRanges();
    setMenuPos(null);
    setSelectionRange(null);
  };

  if (!menuPos) return null;

  return (
    <div 
      className="fixed z-50 bg-white border border-slate-200 shadow-lg rounded-md overflow-hidden py-1 min-w-[160px]"
      style={{ top: menuPos.y, left: menuPos.x }}
    >
      <button 
        onClick={applyHighlight}
        className="flex items-center gap-3 px-4 py-2 hover:bg-slate-100 text-slate-700 text-sm w-full text-left transition-colors"
      >
        <Highlighter className="w-4 h-4 text-yellow-500" />
        <span className="font-medium">Destacar Texto</span>
      </button>
    </div>
  );
}
