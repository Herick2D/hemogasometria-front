'use client'; 

import React, { useState, Fragment } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Dialog, Transition } from '@headlessui/react';
import { FileText, Loader2, Info, X } from 'lucide-react';
import InfoCard from './InfoCard';

export default function ReferenceCard() {
  const [isGuideDownloading, setIsGuideDownloading] = useState(false);
  const [isBibDownloading, setIsBibDownloading] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const openInfoModal = () => setIsInfoModalOpen(true);
  const closeInfoModal = () => setIsInfoModalOpen(false);

  // URL base da API a partir das variáveis de ambiente
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const handleGuideDownload = async () => {
    setIsGuideDownloading(true);
    const toastId = toast.loading('Iniciando download do guia...');

    try {
      const response = await axios.get(`${apiUrl}/download/guide`, {
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
      console.error("Falha no download do guia:", error);
      toast.error('Falha no download do guia.', { id: toastId });
    } finally {
      setIsGuideDownloading(false);
    }
  };

  const handleBibDownload = async () => {
    setIsBibDownloading(true);
    const toastId = toast.loading('Iniciando download das referências...');

    try {
      const response = await axios.get(`${apiUrl}/download/bibliography`, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'referencias.pdf');
      document.body.appendChild(link);
      link.click();

      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);

      toast.success('Download das referências concluído!', { id: toastId });

    } catch (error) {
      console.error("Falha no download das referências:", error);
      toast.error('Falha no download das referências.', { id: toastId });
    } finally {
      setIsBibDownloading(false);
    }
  };

  return (
    <>
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
            {/* <div className="flex justify-between"><span>PO₂</span> <strong>80,0 <span className="text-slate-500">mm Hg</span></strong></div>
            <div className="flex justify-between"><span>EB</span> <strong>0 <span className="text-slate-500">mEq/L</span></strong></div> */}
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
              {isBibDownloading ? 'Baixando...' : 'Referências'}
            </span>
          </button>
        </div>

        <hr className="my-6 border-slate-200" />
        <button 
          onClick={openInfoModal} 
          className="w-full flex items-center justify-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors"
        >
          <Info size={16} />
          <span className="font-medium text-sm">Observação Importante</span>
        </button>
      </div>

      <Transition appear show={isInfoModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeInfoModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="absolute top-4 right-4">
                    <button onClick={closeInfoModal} className="text-slate-400 hover:text-slate-600 transition-colors">
                      <X size={24} />
                    </button>
                  </div>
                  
                  <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-slate-900 flex items-center gap-2">
                    <Info className="h-5 w-5 text-cyan-700" />
                    Observação Importante
                  </Dialog.Title>

                  <div className="mt-4 border-t pt-4">
                    <InfoCard>
                      <p>Para fins didáticos nesta disciplina, serão considerados principalmente os valores de pH, pCO₂ e HCO₃⁻, pois são eles que permitem identificar e classificar os distúrbios ácido–base de forma mais direta.</p>
                      <p>Embora outros parâmetros, como o Excesso de Base (EB) e a pO₂, também sejam fornecidos na hemogasometria e possuam relevância clínica, nesta atividade o foco será mantido nos três indicadores principais.</p>
                      <p>Para aprofundar o estudo, consulte o projeto de monitoria “Guia Interpretativo de Hemogasometria” e a bibliografia recomendada.</p>
                    </InfoCard>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}