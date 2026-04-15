import React, { useState, useRef } from 'react';
import { Upload, FileText, X, Info } from 'lucide-react';

export function PdfWorkspace() {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
      setFileName(file.name);
    } else {
      alert('Por favor, selecione um arquivo PDF válido.');
    }
  };

  const handleClear = () => {
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    setPdfUrl(null);
    setFileName('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] max-w-6xl mx-auto flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 border-b-2 border-slate-200 pb-4 shrink-0">
        <div className="flex-1">
          <div className="text-[13px] text-slate-500 mb-2">ferramentas / visualizador-pdf</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-tight">
            Visualizador de PDF
          </h1>
        </div>
      </div>

      {!pdfUrl ? (
        <div className="flex-1 bg-white border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center p-8 text-center hover:bg-slate-50 transition-colors">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
            <FileText className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Anexe seu material em PDF</h2>
          <p className="text-slate-500 max-w-md mb-8">
            Faça upload de um arquivo PDF para ler, pesquisar e fazer anotações diretamente no navegador.
          </p>
          <input
            type="file"
            accept="application/pdf"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
            id="pdf-upload"
          />
          <label
            htmlFor="pdf-upload"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
          >
            <Upload className="w-5 h-5" />
            Selecionar Arquivo PDF
          </label>
        </div>
      ) : (
        <div className="flex-1 bg-white border border-slate-200 rounded-xl flex flex-col overflow-hidden shadow-sm">
          <div className="bg-slate-50 border-b border-slate-200 p-3 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-slate-700 truncate max-w-[200px] sm:max-w-md">{fileName}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 bg-slate-200 px-3 py-1.5 rounded-md mr-2">
                <Info className="w-4 h-4" />
                Use as ferramentas nativas do navegador para destacar e salvar.
              </div>
              <button
                onClick={handleClear}
                className="text-slate-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors flex items-center gap-2"
                title="Fechar PDF"
              >
                <X className="w-5 h-5" />
                <span className="hidden sm:inline text-sm font-medium">Fechar</span>
              </button>
            </div>
          </div>
          <div className="flex-1 w-full h-full bg-slate-100">
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0`}
              className="w-full h-full border-none"
              title="Visualizador de PDF"
            />
          </div>
        </div>
      )}
    </div>
  );
}
