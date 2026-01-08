import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import InstagramFeed from '../components/InstagramFeed';
import InterviewPlayer from '../sections/InterviewPlayer';
import Countdown from '../components/Countdown';
import DebatePlayer from "../sections/DebatePlayer";

const HomeSection = ({ setPage }) => (
  <div className="relative min-h-screen flex flex-col pt-24 md:pt-32 pb-20 overflow-hidden">
    
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse z-0 pointer-events-none"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>

    <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
      <div className="inline-block px-4 py-1 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm tracking-widest uppercase font-bold">
        Eleições AAUMinho 2025
      </div>
      <Countdown />

      <div className="flex flex-col items-center w-fit mx-auto mb-6">
          <img 
            src="/LogoCortado.png" 
            alt="Logo Lista A" 
            className="w-full mb-2 animate-fade-in-up object-contain max-h-32" 
          />
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200 font-['Orbitron'] tracking-tight drop-shadow-[0_0_15px_rgba(0,200,255,0.2)] leading-none text-center">
            APROXIMAR<br />
            <span className="text-white">FUTUROS</span>
          </h1>
      </div>
      
      <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light px-2">
        Uma candidatura feita de estudantes para estudantes. Inovação, proximidade e a defesa intransigente dos teus direitos.
      </p>

      <div className="flex flex-col items-center mb-16 w-full max-w-2xl">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full mb-6">
          <button 
            onClick={() => setPage('manifesto')}
            className="group relative px-8 py-4 bg-cyan-500 text-black font-bold text-lg rounded-none skew-x-[-10deg] hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] w-full md:w-auto"
          >
            <div className="skew-x-[10deg] flex items-center justify-center gap-2">
              LER O MANIFESTO
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          
          <button 
            onClick={() => setPage('team')}
            className="group px-8 py-4 border border-white/20 text-white font-bold text-lg rounded-none skew-x-[-10deg] hover:bg-white/5 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm w-full md:w-auto"
          >
            <div className="skew-x-[10deg]">
              CONHECER A EQUIPA
            </div>
          </button>
        </div>

        <button 
          onClick={() => setPage('suggestions')}
          className="group px-8 py-4 bg-white/5 border border-cyan-500/30 text-cyan-400 font-bold text-lg rounded-none skew-x-[-10deg] hover:bg-cyan-500/10 hover:border-cyan-500 hover:text-white transition-all duration-300 w-full md:w-auto"
        >
          <div className="skew-x-[10deg] flex items-center justify-center gap-2">
            <MessageSquare size={20} />
            DEIXA A TUA SUGESTÃO
          </div>
        </button>
      </div>

      {/* ENTREVISTA RUM ADICIONADA AQUI */}
      <InterviewPlayer />

      {/* DEBATE FACEBOOK */}
      <DebatePlayer />

{/*
      <div className="relative w-full max-w-4xl mx-auto group">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="/Equipa.jpeg" 
            alt="Equipa Lista A" 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05051a]/40 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </div>
*/}
      <InstagramFeed />

    </div>
  </div>
);

export default HomeSection;