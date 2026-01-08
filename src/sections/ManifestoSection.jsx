import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SectionTitle } from '../components/Shared';
import { MANIFESTO_POINTS } from '../data';

const ManifestoSection = () => {
  // IMPORTANTE: Substitui pelo ID do teu ficheiro do Google Drive.
  // Ex: se o link for https://drive.google.com/file/d/1a2b3c4d5e6f/view, o ID é "1a2b3c4d5e6f".
  const GOOGLE_DRIVE_FILE_ID = "1ZATubou1Bd9Iv49lwdTl-qXTDZ3b9Tol";

  const embedUrl = `https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

  return (
    <div className="pt-32 pb-20 px-4 max-w-6xl mx-auto min-h-screen">
    <SectionTitle title="Manifesto 2025" subtitle="As nossas propostas para construir a academia do futuro. (em atualização)" />
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {MANIFESTO_POINTS.map((section, idx) => (
        <div key={idx} className="bg-gradient-to-b from-white/5 to-transparent p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-900/50 rounded-lg border border-blue-500/30">
              {section.icon}
            </div>
            <h3 className="text-xl font-bold text-white font-['Orbitron']">{section.category}</h3>
          </div>
          <ul className="space-y-4">
            {section.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-300 items-start group">
                <ChevronRight className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    
    {/* PDF Preview Section */}
    <div className="mt-20">
        <h3 className="text-2xl font-bold text-center text-white font-['Orbitron'] mb-8">Consulta o Manifesto Completo</h3>
        <div className="relative w-full h-[80vh] max-h-[800px] bg-black/20 border border-white/10 rounded-xl overflow-hidden shadow-lg hover:border-cyan-500/30 transition-all duration-300">
            <iframe
                src={embedUrl}
                title="Manifesto Lista A"
                width="100%"
                height="100%"
                className="border-0"
            />
        </div>
    </div>

    <div className="mt-16 text-center">
      <a 
        href={downloadUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 border border-cyan-500 text-cyan-400 rounded hover:bg-cyan-500 hover:text-black font-bold transition-all duration-300 uppercase tracking-widest text-sm"
      >
        Descarregar Manifesto Completo (PDF)
      </a>
    </div>
  </div>
  );
};

export default ManifestoSection;