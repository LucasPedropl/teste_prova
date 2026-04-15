import React, { useState, useRef } from 'react';
import { Upload, FileText, X, Info, Maximize, Minimize, Plus } from 'lucide-react';
import clsx from 'clsx';

interface PdfFile {
  id: string;
  name: string;
  url: string;
}

export function PdfWorkspace() {
  const [pdfs, setPdfs] = useState<PdfFile[]>([]);
  const [activePdfId, setActivePdfId] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(f => f.type === 'application/pdf');

    if (validFiles.length > 0) {
      const newPdfs = validFiles.map(file => ({
        id: Math.random().toString(36).substring(7),
        name: file.name,
        url: URL.createObjectURL(file)
      }));

      setPdfs(prev => [...prev, ...newPdfs]);
      if (!activePdfId) {
        setActivePdfId(newPdfs[0].id);
      }
    } else if (files.length > 0) {
      alert('Por favor, selecione apenas arquivos PDF válidos.');
    }

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removePdf = (idToRemove: string) => {
    setPdfs(prev => {
      const filtered = prev.filter(p => p.id !== idToRemove);
      if (activePdfId === idToRemove) {
        setActivePdfId(filtered.length > 0 ? filtered[0].id : null);
      }
      return filtered;
    });
    
    const pdfToRemove = pdfs.find(p => p.id === idToRemove);
    if (pdfToRemove) URL.revokeObjectURL(pdfToRemove.url);
  };

  const activePdf = pdfs.find(p => p.id === activePdfId);

  return (
    <div className={clsx(
      "flex flex-col transition-all duration-300 bg-slate-50",
      isFullscreen
        ? "fixed inset-0 z-[100] p-2 sm:p-4"
        : "w-full h-full min-h-[calc(100vh-8rem)] max-w-6xl mx-auto gap-4"
    )}>
      {!isFullscreen && (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 border-b-2 border-slate-200 pb-4 shrink-0">
          <div className="flex-1">
            <div className="text-[13px] text-slate-500 mb-2">ferramentas / visualizador-pdf</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight">
              Visualizador de PDF
            </h1>
          </div>
        </div>
      )}

      {pdfs.length === 0 ? (
        <div className="flex-1 bg-white border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center p-8 text-center hover:bg-slate-50 transition-colors">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
            <FileText className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Anexe seus materiais em PDF</h2>
          <p className="text-slate-500 max-w-md mb-8">
            Faça upload de um ou mais arquivos PDF para ler, pesquisar e fazer anotações diretamente no navegador.
          </p>
          <input
            type="file"
            accept="application/pdf"
            multiple
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
            id="pdf-upload-empty"
          />
          <label
            htmlFor="pdf-upload-empty"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
          >
            <Upload className="w-5 h-5" />
            Selecionar Arquivos PDF
          </label>
        </div>
      ) : (
        <div className="flex-1 bg-white border border-slate-200 rounded-xl flex flex-col overflow-hidden shadow-sm">
          {/* Tabs Header */}
          <div className="bg-slate-100 border-b border-slate-200 p-2 flex justify-between items-center shrink-0 overflow-x-auto">
            <div className="flex items-center gap-2 flex-1 overflow-x-auto no-scrollbar">
              {pdfs.map(pdf => (
                <div
                  key={pdf.id}
                  onClick={() => setActivePdfId(pdf.id)}
                  className={clsx(
                    "group flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all shrink-0 max-w-[200px]",
                    activePdfId === pdf.id
                      ? "bg-white shadow-sm border border-slate-200 text-blue-600"
                      : "hover:bg-slate-200 text-slate-600 border border-transparent"
                  )}
                >
                  <FileText className="w-4 h-4 shrink-0" />
                  <span className="text-sm font-medium truncate select-none">{pdf.name}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removePdf(pdf.id);
                    }}
                    className={clsx(
                      "p-1 rounded-md hover:bg-red-100 hover:text-red-600 transition-colors",
                      activePdfId === pdf.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    )}
                    title="Fechar PDF"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
              
              <input
                type="file"
                accept="application/pdf"
                multiple
                className="hidden"
                ref={fileInputRef}
                onChange={handleFileChange}
                id="pdf-upload-add"
              />
              <label
                htmlFor="pdf-upload-add"
                className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-slate-200 text-slate-500 cursor-pointer transition-colors shrink-0"
                title="Adicionar mais PDFs"
              >
                <Plus className="w-5 h-5" />
              </label>
            </div>

            <div className="flex items-center gap-2 pl-2 border-l border-slate-300 ml-2 shrink-0">
              <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 bg-slate-200 px-3 py-1.5 rounded-md mr-1">
                <Info className="w-4 h-4" />
                Destaque e salve usando o navegador.
              </div>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                title={isFullscreen ? "Sair da Tela Cheia" : "Tela Cheia"}
              >
                {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 w-full h-full bg-slate-200 relative">
            {activePdf ? (
              <iframe
                key={activePdf.id}
                src={`${activePdf.url}#toolbar=1&navpanes=0`}
                className="absolute inset-0 w-full h-full border-none"
                title={`Visualizador de PDF - ${activePdf.name}`}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-slate-400">
                Selecione um PDF para visualizar
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
