import React from 'react';
import { Video, ExternalLink } from 'lucide-react';

const DebatePlayer = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-12 px-4 animate-fade-in-up">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">

        {/* Fundo blur animado */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl group-hover:bg-blue-600/10 transition-all"></div>

        {/* Cabeçalho com ícone e texto */}
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-700 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
            <Video className="text-white w-8 h-8 md:w-10 md:h-10 animate-pulse-slow" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">
                Facebook
              </span>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">
                Vídeo
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white font-['Orbitron'] mb-1">
              Debate das listas candidatas
            </h3>
            <p className="text-gray-400 text-sm">Vê ou revê o confronto de ideias.</p>
          </div>
        </div>

        {/* Player do Facebook */}
        <div className="mt-6 w-full aspect-video bg-[#05051a]/50 rounded-lg border border-white/5 relative overflow-hidden">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1343854033592337%2F&width=500&show_text=false&show_controls=true&height=281&appId"
            width="100%"
            height="100%"
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen="true"
            title="Debate Presidencial"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default DebatePlayer;
