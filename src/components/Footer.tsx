import Image from 'next/image';
import React from 'react';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 mt-1">
      <div className="container mx-auto px-6 py-6 flex flex-col items-center">
        
        <hr className="w-20 border-t border-slate-200 mb-6" />

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          
          <a
            href="https://www.uff.br/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar o site da UFF"
            className="group"
          >
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center p-2 ring-1 ring-slate-200 shadow-sm group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <Image 
                src="/logo_65_anos_uff.png" 
                alt="Logo comemorativo de 65 Anos da UFF" 
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </a>

          <a
            href="https://huvet.uff.br/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar o site do HUVET"
            className="group"
          >
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center p-2 ring-1 ring-slate-200 shadow-sm group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <Image 
                src="/logo_labhuvet.png" 
                alt="Logo do Laboratório do Hospital Veterinário (LabHUVET)" 
                width={48}
                height={48} 
                className="object-contain"
              />
            </div>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar o site da UFF"
            className="group"
          >
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center p-2 ring-1 ring-slate-200 shadow-sm group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              <Image 
                src="/logo_lamadin.png" 
                alt="Logo comemorativo de 65 Anos da UFF" 
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
          </a>

        </div>

        <div className="mt-8 flex flex-col md:flex-row items-start justify-center gap-x-6 gap-y-4">
          
          <div className="text-center">
            <p className="text-sm font-semibold text-slate-600 mb-3">
              Desenvolvido por:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2">
              <a 
                href="https://www.linkedin.com/in/herick-moreira/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors"
              >
                <Linkedin size={16} />
                <span className="font-medium">Herick Moreira</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/ana-clara-dsi-maciel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-slate-500 hover:text-cyan-600 transition-colors"
              >
                <Linkedin size={16} />
                <span className="font-medium">Ana Clara Maciel</span>
              </a>
            </div>
          </div>

          <div className="hidden md:block h-16 border-l border-slate-300"></div>

          <div className="text-center">
            <p className="text-sm font-semibold text-slate-600 mb-3">
              Orientadores:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-x-2 text-slate-500 text-sm">
              <p className="font-medium">Profa. Dra. Márcia Xavier</p>
              <span className="hidden sm:inline text-slate-300">|</span>
              <p className="font-medium">Prof. Dr. Daniel Macieira</p>
            </div>
          </div>

        </div>

        <p className="text-xs text-slate-500 mt-6 text-center">
          © {new Date().getFullYear()} Projeto de Monitoria - Departamento de Patologia e Clínica Veterinária.
          <br /> 
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}