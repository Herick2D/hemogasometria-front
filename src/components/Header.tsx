import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 px-6 py-4 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between gap-6">
        
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="w-20 h-20 bg-white/20 p-2 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <Image
              src="/logo_uff.png"
              alt="Logo da UFF"
              width={64}
              height={64}
            />
          </div>
          <div className="w-20 h-20 bg-white/20 p-2 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <Image
              src="/logo_vet.png"
              alt="Logo da Veterinária"
              width={64}
              height={64}
            />
          </div>
        </div>

        <div className="text-center flex-1">
          <h1 className="text-xl md:text-2xl font-bold leading-tight mb-2">
            Plataforma Interativa Simplificada de Hemogasometria Veterinária
          </h1>
          <h2 className="text-lg md:text-xl font-semibold mb-1 opacity-90">
            Departamento de Patologia e Clínica Veterinária - MCV
          </h2>
          <h3 className="text-base md:text-lg font-medium opacity-80">
            Disciplina: Patologia Clínica Veterinária II
          </h3>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0" style={{ width: '224px' }} aria-hidden="true">
        </div>

      </div>
    </header>
  )
}