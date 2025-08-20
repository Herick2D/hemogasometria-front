import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Loader2, AlertTriangle, CheckCircle2, X } from 'lucide-react';
import { IAnalysisResult } from '@/types/analysis.types';

type ResultModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  error: string | null;
  result: IAnalysisResult | null;
};

export default function ResultModal({ isOpen, onClose, isLoading, error, result }: ResultModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute top-4 right-4">
                  <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                    <X size={24} />
                  </button>
                </div>
                
                {isLoading && (
                  <div className="flex flex-col items-center justify-center py-8">
                    <Loader2 className="h-12 w-12 text-cyan-500 animate-spin mb-4" />
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-slate-700">Analisando dados...</Dialog.Title>
                  </div>
                )}

                {error && (
                  <div className="py-4">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-8 w-8 text-red-500" />
                      <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-red-700">Erro na Análise</Dialog.Title>
                    </div>
                    <p className="mt-4 text-sm text-red-600 bg-red-50 p-3 rounded-md">{error}</p>
                  </div>
                )}
                
                {result && (
                  <div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-8 w-8 text-green-500" />
                      <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-slate-800">Resultado da Análise</Dialog.Title>
                    </div>
                    <div className="mt-4 space-y-3 text-slate-700 border-t pt-4">
                      <div>
                        <p className="text-sm text-slate-500">Diagnóstico:</p>
                        <p className="font-bold text-lg text-cyan-700">{result.diagnosis}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Distúrbio Primário:</p>
                        <p>{result.primaryDisturbance}</p>
                      </div>
                      {result.compensatoryDisturbance && (
                        <div>
                          <p className="text-sm text-slate-500">Compensação:</p>
                          <p>{result.compensatoryDisturbance}</p>
                        </div>
                      )}
                      <div className="pt-2">
                        <p className="text-sm text-slate-500">Detalhes:</p>
                        <p className="text-sm">{result.details}</p>
                      </div>
                    </div>
                  </div>
                )}

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}