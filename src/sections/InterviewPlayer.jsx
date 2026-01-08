import React, { useState, useEffect, useRef } from 'react';
import { Headphones, ExternalLink, Loader } from 'lucide-react';

const InterviewPlayer = () => {
  const [audioSrc, setAudioSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const audioRef = useRef(null);
  const AUDIO_URL = "https://api.rum.pt/api/podcast/692efc859b03e05c7c2cf505/download";

  useEffect(() => {
    const fetchAudio = async () => {
      setIsLoading(true);
      try {
        // Faz o fetch do áudio como um blob
        const response = await fetch(AUDIO_URL);
        const blob = await response.blob();
        // Cria um URL para o blob, que pode ser usado no <audio>
        const url = URL.createObjectURL(blob);
        setAudioSrc(url);
      } catch (error) {
        console.error("Failed to fetch audio:", error);
        // Se falhar, usa o URL original como fallback
        setAudioSrc(AUDIO_URL);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAudio();

    // Limpa o URL do blob quando o componente é desmontado para libertar memória
    return () => {
      if (audioSrc && audioSrc.startsWith('blob:')) {
        URL.revokeObjectURL(audioSrc);
      }
    };
  }, []); // O array vazio garante que isto corre apenas uma vez

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 px-4 animate-fade-in-up">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-500">
        
        {/* Efeito de fundo */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-all"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
          
          {/* Ícone */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
            <Headphones className="text-white w-8 h-8 md:w-10 md:h-10 animate-pulse-slow" />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">RUM</span>
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">Entrevista</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white font-['Orbitron'] mb-1">
              A Voz da Lista A
            </h3>

            <p className="text-gray-400 text-sm">
              Ouve a entrevista do candidato Luís Miguel Guedes à Rádio Universitária do Minho.
            </p>
          </div>
        </div>

        {/* Player Audio */}
        <div className="mt-6 w-full bg-[#05051a]/50 rounded-lg p-2 border border-white/5 min-h-[56px] flex items-center justify-center">
          {isLoading ? (
            <div className="flex items-center gap-2 text-cyan-400">
              <Loader className="animate-spin" size={16} />
              <span className="text-sm font-medium">A carregar áudio...</span>
            </div>
          ) : (
            <audio
              ref={audioRef}
              controls
              preload="auto"
              className="w-full h-10"
              style={{ filter: "invert(1) hue-rotate(180deg)" }}
              src={audioSrc}
            >
              O teu browser não suporta o elemento de áudio.
            </audio>
          )}
        </div>

        <div className="mt-4 text-center md:text-right">
          <a
            href="https://www.rum.pt/shows/eleicoes-aauminho-2025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:text-cyan-400 transition-colors flex items-center justify-center md:justify-end gap-1"
          >
            Ver mais em RUM.pt <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InterviewPlayer;
