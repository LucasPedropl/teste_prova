import React, { useEffect, useState } from 'react';
import { Highlighter } from 'lucide-react';

export function TextHighlighter() {
  const [menuPos, setMenuPos] = useState<{ x: number, y: number } | null>(null);
  const [selectionRange, setSelectionRange] = useState<Range | null>(null);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim().length > 0) {
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

    try {
      const mark = document.createElement('mark');
      mark.style.backgroundColor = '#fef08a'; // Tailwind yellow-200
      mark.style.color = 'inherit';
      mark.style.borderRadius = '2px';
      mark.style.padding = '0 2px';
      
      // Try surroundContents first (works if selection is within a single text node)
      selectionRange.surroundContents(mark);
    } catch (e) {
      // Fallback for selections crossing node boundaries
      try {
        const mark = document.createElement('mark');
        mark.style.backgroundColor = '#fef08a';
        mark.style.color = 'inherit';
        mark.style.borderRadius = '2px';
        mark.style.padding = '0 2px';
        
        const contents = selectionRange.extractContents();
        mark.appendChild(contents);
        selectionRange.insertNode(mark);
      } catch (err) {
        console.error("Could not highlight selection", err);
      }
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
