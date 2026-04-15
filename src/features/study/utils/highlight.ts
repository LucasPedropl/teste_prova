export interface Highlight {
  id: string;
  start: number;
  end: number;
  text: string;
}

export function getHighlights(topicId: string): Highlight[] {
  try {
    const saved = localStorage.getItem(`highlights_${topicId}`);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

export function saveHighlight(topicId: string, highlight: Highlight) {
  const highlights = getHighlights(topicId);
  highlights.push(highlight);
  // Sort descending by start offset so that restoring them later
  // doesn't shift the character offsets of subsequent highlights
  highlights.sort((a, b) => b.start - a.start);
  localStorage.setItem(`highlights_${topicId}`, JSON.stringify(highlights));
}

export function removeHighlight(topicId: string, id: string) {
  const highlights = getHighlights(topicId);
  const filtered = highlights.filter(h => h.id !== id);
  localStorage.setItem(`highlights_${topicId}`, JSON.stringify(filtered));
}

export function removeHighlightElements(id: string) {
  const marks = document.querySelectorAll(`mark[data-highlight-id="${id}"]`);
  marks.forEach(mark => {
    const parent = mark.parentNode;
    if (parent) {
      while (mark.firstChild) {
        parent.insertBefore(mark.firstChild, mark);
      }
      parent.removeChild(mark);
    }
  });
}

export function getSelectionOffsets(root: HTMLElement, range: Range) {
  let charIndex = 0;
  let start = 0;
  let end = 0;
  let foundStart = false;
  let foundEnd = false;

  function traverse(node: Node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const len = node.textContent?.length || 0;
      if (!foundStart && node === range.startContainer) {
        start = charIndex + range.startOffset;
        foundStart = true;
      }
      if (!foundEnd && node === range.endContainer) {
        end = charIndex + range.endOffset;
        foundEnd = true;
      }
      charIndex += len;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      for (let i = 0; i < node.childNodes.length; i++) {
        traverse(node.childNodes[i]);
        if (foundStart && foundEnd) break;
      }
    }
  }

  traverse(root);
  
  // If selection was made backwards (right to left), swap start and end
  if (start > end) {
    return { start: end, end: start };
  }
  
  return { start, end };
}

export function restoreHighlights(topicId: string) {
  const root = document.getElementById('topic-content');
  if (!root) return;

  const highlights = getHighlights(topicId);
  highlights.forEach(hl => {
    applyHighlightByOffsets(root, hl.start, hl.end, hl.id);
  });
}

export function applyHighlightByOffsets(root: HTMLElement, start: number, end: number, id: string) {
  let charIndex = 0;
  const textNodesToHighlight: { node: Text, startOffset: number, endOffset: number }[] = [];

  function traverse(node: Node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent || '';
      const len = text.length;
      const nodeStart = charIndex;
      const nodeEnd = charIndex + len;

      if (nodeStart < end && nodeEnd > start) {
        const localStart = Math.max(0, start - nodeStart);
        const localEnd = Math.min(len, end - nodeStart);
        
        if (localStart < localEnd) {
          textNodesToHighlight.push({
            node: node as Text,
            startOffset: localStart,
            endOffset: localEnd
          });
        }
      }
      charIndex += len;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const childNodes = Array.from(node.childNodes);
      for (let i = 0; i < childNodes.length; i++) {
        traverse(childNodes[i]);
      }
    }
  }

  traverse(root);

  // Apply in reverse order to avoid messing up offsets if multiple highlights affect the same text node
  for (let i = textNodesToHighlight.length - 1; i >= 0; i--) {
    const { node, startOffset, endOffset } = textNodesToHighlight[i];
    
    try {
      const range = document.createRange();
      range.setStart(node, startOffset);
      range.setEnd(node, endOffset);
      
      const mark = document.createElement('mark');
      mark.className = 'bg-yellow-200 text-inherit rounded-sm px-[2px] py-[1px] cursor-pointer transition-colors hover:bg-yellow-300';
      mark.dataset.highlightId = id;
      
      range.surroundContents(mark);
    } catch (e) {
      console.error('Failed to highlight text node', e);
    }
  }
}
