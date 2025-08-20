import React from 'react';

type InputCardProps = {
  onSubmit: (e: React.FormEvent) => void;
};

export default function InputCard({ onSubmit }: InputCardProps) {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-md bg-cyan-600 text-white p-6 rounded-xl shadow-lg flex flex-col">
      
      <div className="flex-grow">
        <h2 className="font-semibold text-lg mb-1">Hemogasômetro veterinário</h2>
        <p className="text-cyan-100 mb-6">Insira os dados para interpretação:</p>
        
        <div className="bg-slate-50/20 p-4 rounded-lg">
          <h3 className="font-semibold mb-4 text-white">Valores encontrados:</h3>
          <div className="space-y-4">

            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="ph" className="font-medium">pH</label>
              <input
                type="number"
                id="ph"
                name="ph"
                step="0.01"
                className="col-span-2 w-full p-2 rounded-md border-2 border-transparent bg-white/30 focus:bg-white focus:text-slate-800 focus:border-cyan-300 focus:outline-none transition"
                placeholder="Ex: 7,4"
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="pco2" className="font-medium">pCO₂</label>
              <div className="col-span-2 relative">
                <input 
                  type="number" 
                  id="pco2" 
                  name="pco2" 
                  className="w-full p-2 rounded-md border-2 border-transparent bg-white/30 focus:bg-white focus:text-slate-800 focus:border-cyan-300 focus:outline-none transition pr-16"
                  placeholder="Ex: 40,0" 
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-cyan-100 pointer-events-none">mm Hg</span>
              </div>
            </div>

            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="hco3" className="font-medium">HCO₃⁻</label>
              <div className="col-span-2 relative">
                <input 
                  type="number" 
                  id="hco3" 
                  name="hco3" 
                  className="w-full p-2 rounded-md border-2 border-transparent bg-white/30 focus:bg-white focus:text-slate-800 focus:border-cyan-300 focus:outline-none transition pr-16"
                  placeholder="Ex: 24,0" 
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-cyan-100 pointer-events-none">mEq/L</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-white text-cyan-700 font-bold py-3 rounded-lg shadow-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-600 focus:ring-white transition-transform transform hover:scale-105"
      >
        Enviar
      </button>
    </form>
  );
}