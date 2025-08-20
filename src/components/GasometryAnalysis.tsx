'use client'; 

import React, { useState } from 'react';
import axios from 'axios';
import InputCard from './InputCard';
import ReferenceCard from './ReferenceCard';
import ResultModal from './ResultModal';
import { IAnalysisResult } from '@/types/analysis.types';

const API_URL = 'http://localhost:3333/analyze';

export default function GasometryAnalysis() {
  const [result, setResult] = useState<IAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setResult(null);
    setIsModalOpen(true);

    try {
      const formData = new FormData(event.currentTarget as HTMLFormElement);

      const getAndFormatNumber = (fieldName: string): number => {
        const valueAsString = formData.get(fieldName) as string || '';
        const formattedValue = valueAsString.replace(',', '.');
        return Number(formattedValue);
      };

      const patientValues = {
        ph: getAndFormatNumber('ph'),
        pco2: getAndFormatNumber('pco2'),
        hco3: getAndFormatNumber('hco3'),
      };

      const response = await axios.post(API_URL, { patientValues });
      setResult(response.data);

    } catch (err: any) {
      if (axios.isAxiosError(err) && err.response) {
        const apiError = err.response.data.details || err.response.data.error;
        setError(`Erro da API: ${JSON.stringify(apiError)}`);
      } else {
        setError('Não foi possível conectar ao servidor. Verifique sua conexão.');
      }
      console.error('Erro na requisição:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="container mx-auto p-6 flex flex-col lg:flex-row justify-center items-stretch gap-8">
        <InputCard onSubmit={handleSubmit} />
        <ReferenceCard />
      </div>

      <ResultModal
        isOpen={isModalOpen}
        onClose={closeModal}
        isLoading={isLoading}
        error={error}
        result={result}
      />
    </>
  );
}