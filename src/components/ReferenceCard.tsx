'use client'; 

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FileText, Loader2 } from 'lucide-react';

export default function ReferenceCard() {
  const [isGuideDownloading, setIsGuideDownloading] = useState(false);
  const [isBibDownloading, setIsBibDownloading] = useState(false);

  const handleGuideDownload = async () => {
    setIsGuideDownloading(true);
    const toastId = toast.loading('Iniciando download do guia...');

    try {
      const response = await axios.get('http://localhost:3333/download/guide', {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Guia_Interpretativo_Hemogasometria.pdf');
      document.body.appendChild(link);
      link.click();

      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast.success('Download do guia concluído!', { id: toastId });

    } catch (error) {
      console.error("Falha no download:", error);
      toast.error('Falha no download do guia.', { id: toastId });
    } finally {
      setIsGuideDownloading(false);
    }
  };

  const handleBibDownload = async () => {
    setIsBibDownloading(true);
    const toastId = toast.loading('Verificando link...');

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.error('Endpoint ainda não configurado.', { id: toastId });
    
    setIsBibDownloading(false);
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-slate-200">
      <h2 className="font-semibold text-lg text-slate-800 mb-4">
        Para auxiliar o estudo, consulte:
      </h2>
      
      <div className="text-sm bg-slate-50 rounded-lg p-4 border border-slate-200">
        <h3 className="font-semibold text-slate-700 mb-2">Valores de referência:</h3>
        <div className="space-y-1">
          <div className="flex justify-between"><span>pH</span> <strong>7,4</strong></div>
          <div className="flex justify-between"><span>pCO₂</span> <strong>40,0 <span className="text-slate-500">mm Hg</span></strong></div>
          <div className="flex justify-between"><span>HCO₃⁻</span> <strong>24,0 <span className="text-slate-500">mEq/L</span></strong></div>
          <div className="flex justify-between"><span>PO₂</span> <strong>80,0 <span className="text-slate-500">mm Hg</span></strong></div>
          <div className="flex justify-between"><span>EB</span> <strong>0 <span className="text-slate-500">mEq/L</span></strong></div>
        </div>
        <p className="text-xs text-slate-500 mt-3">
          OBS: Estes valores são para fins didáticos e podem variar entre laboratórios.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        <button
          onClick={handleGuideDownload}
          disabled={isGuideDownloading || isBibDownloading}
          className="w-full flex items-center justify-center gap-3 p-3 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGuideDownloading ? (
            <Loader2 className="h-5 w-5 text-cyan-600 animate-spin" />
          ) : (
            <FileText className="h-5 w-5 text-cyan-600" />
          )}
          <span className="font-medium text-slate-700">
            {isGuideDownloading ? 'Baixando Guia...' : 'Guia Interpretativo - Hemogasometria'}
          </span>
        </button>

        <button
          onClick={handleBibDownload}
          disabled={isGuideDownloading || isBibDownloading}
          className="w-full flex items-center justify-center gap-3 p-3 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isBibDownloading ? (
            <Loader2 className="h-5 w-5 text-cyan-600 animate-spin" />
          ) : (
            <FileText className="h-5 w-5 text-cyan-600" />
          )}
          <span className="font-medium text-slate-700">
            {isBibDownloading ? 'Buscando...' : 'Bibliografia Básica da Disciplina'}
          </span>
        </button>
      </div>
    </div>
  );
}