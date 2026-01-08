import React from 'react';
import { Laptop, ExternalLink, Lock } from 'lucide-react';
import { SectionTitle } from '../components/Shared';

const FaqSection = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto min-h-screen">
      <SectionTitle title="VOTAÇÃO ELETRÓNICA" subtitle="Tudo o que precisas de saber para o dia 10." />
      
      <div className="space-y-4">

        {/* VOTAÇÃO ONLINE */}
        <div className="w-full max-w-4xl mx-auto mt-20 px-4">
          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-8 md:p-10 relative overflow-hidden text-center">

            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-400/5 blur-3xl -z-10"></div>

            {/* Header */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4 border border-cyan-500/30 animate-pulse">
                <Laptop className="text-cyan-400 w-8 h-8" />
              </div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                O voto é 100% online, simples e seguro. Exerce o teu direito a partir de qualquer lugar, usando o teu telemóvel ou computador.
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">

              {/* 1 */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2 text-cyan-400 font-bold">
                  <span className="bg-cyan-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                  Aceder
                </div>
                <p className="text-sm text-gray-400">Entra na plataforma de voto oficial da UMinho.</p>
              </div>

              {/* 2 */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2 text-cyan-400 font-bold">
                  <span className="bg-cyan-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                  Autenticar
                </div>
                <p className="text-sm text-gray-400">Usa as tuas credenciais de aluno habituais.</p>
              </div>

              {/* 3 */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2 text-cyan-400 font-bold">
                  <span className="bg-cyan-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">3</span>
                  Processo Eleitoral
                </div>
                <p className="text-sm text-gray-400">Entra no processo eleitoral dos orgãos sociais da AAUMinho.</p>
              </div>

              {/* 4 */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2 text-cyan-400 font-bold">
                  <span className="bg-cyan-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">4</span>
                  Eleição da Direção
                </div>
                <p className="text-sm text-gray-400">Seleciona para votar na Direção da AAUMinho.</p>
              </div>

              {/* 5 */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2 text-cyan-400 font-bold">
                  <span className="bg-cyan-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">5</span>
                  Votar
                </div>
                <p className="text-sm text-gray-400">Escolhe a Lista A e confirma a tua escolha.</p>
              </div>

              {/* 6 */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2 text-cyan-400 font-bold">
                  <span className="bg-cyan-500/20 w-6 h-6 rounded-full flex items-center justify-center text-xs">6</span>
                  Confirmar votação
                </div>
                <p className="text-sm text-gray-400">
                  Efetua a validação do voto com o código que recebes por SMS ou e-mail.
                </p>
              </div>

            </div>

            {/* Button */}
            <a 
              href="https://evotum.uminho.pt/pt/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-cyan-500 text-black font-bold text-lg px-8 py-4 rounded hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
            >
              ACEDER À PLATAFORMA DE VOTO
              <ExternalLink size={20} />
            </a>
            
            {/* Footer */}
            <p className="text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
              <Lock size={10} /> eVotUM - Sistema de Votação eletrónica da Universidade do Minho
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FaqSection;
