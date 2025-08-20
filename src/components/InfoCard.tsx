import React from 'react';

type InfoCardProps = {
  children: React.ReactNode; 
};

export default function InfoCard({ children }: InfoCardProps) {
  return (
    <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
      {children}
    </div>
  );
}