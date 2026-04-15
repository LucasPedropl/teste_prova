import React from 'react';
import { Search } from 'lucide-react';

export function GoogleSearch() {
  return (
    <form 
      action="https://www.google.com/search" 
      method="GET" 
      target="_blank"
      className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-lg border border-slate-200 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all shadow-sm w-full sm:w-auto"
    >
      <Search className="w-4 h-4 text-slate-400 shrink-0" />
      <input 
        type="text" 
        name="q" 
        placeholder="Pesquisar no Google..." 
        className="bg-transparent border-none outline-none text-sm w-full sm:w-48 text-slate-700 placeholder:text-slate-400"
        required
      />
    </form>
  );
}
