import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 mt-16">
      <div className="container mx-auto px-6 py-8 flex flex-col items-center">
        
        {/* Divisória */}
        <hr className="w-20 border-t border-slate-200 mb-8" />

        {/* Container logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          
          {/* Logo 65 Anos UFF */}
          <a
            href="https://www.uff.br/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar o site da UFF"
            className="group"
          >
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center p-2 ring-1 ring-slate-200 shadow-sm group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <Image 
                src="/logo_65_anos_uff.png" 
                alt="Logo comemorativo de 65 Anos da UFF" 
                width={60} 
                height={60}
                className="object-contain"
              />
            </div>
          </a>

          {/* Logo LabHUVET */}
          <a
            href="https://huvet.uff.br/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar o site do HUVET"
            className="group"
          >
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center p-2 ring-1 ring-slate-200 shadow-sm group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <Image 
                src="/logo_labhuvet.png" 
                alt="Logo do Laboratório do Hospital Veterinário (LabHUVET)" 
                width={60} 
                height={60} 
                className="object-contain"
              />
            </div>
          </a>

        </div>

        <p className="text-xs text-slate-500 mt-8 text-center">
          © 2025 Projeto de Monitoria - Departamento de Patologia e Clínica Veterinária.
          <br /> 
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}