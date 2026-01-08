import React from 'react';
import { Clock } from 'lucide-react';
import { SectionTitle } from '../components/Shared';
import { SCHEDULE } from '../data';

const CalendarSection = () => (
  <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto min-h-screen">
    <SectionTitle title="Agenda de Campanha" subtitle="Acompanha o nosso percurso.  (em atualização)" />
    
    <div className="mb-16 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-2xl p-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/5 animate-pulse"></div>
        <h3 className="text-3xl md:text-4xl font-black text-white font-['Orbitron'] mb-2 relative z-10">10 DEZEMBRO</h3>
        <p className="text-xl text-cyan-400 font-bold tracking-widest uppercase relative z-10">DIA DAS ELEIÇÕES</p>
        <p className="text-gray-400 mt-4 text-sm relative z-10">Não deixes que decidam por ti. Vota Lista A.</p>
    </div>

    <div className="mb-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10"></div>
        <span className="text-gray-400 font-['Orbitron'] tracking-wider text-sm uppercase">Campanha Eleitoral • 2 a 8 Dez</span>
        <div className="h-px flex-1 bg-white/10"></div>
    </div>
    
    <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-12">
      {SCHEDULE.map((day, idx) => (
        <div key={idx} className="relative md:ml-12 pl-8 md:pl-0 group">
          <div className="absolute -left-[9px] md:left-auto md:-ml-[41px] top-0 w-5 h-5 rounded-full bg-black border-4 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10 group-hover:scale-125 transition-transform"></div>
          
          <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/10">
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
               <div className="flex flex-col">
                  <span className="text-4xl font-black text-white font-['Orbitron'] leading-none">{day.day}</span>
                  <span className="text-sm font-bold text-cyan-400 uppercase tracking-widest">{day.month}</span>
               </div>
            </div>
            
            <div className="space-y-4">
               {day.events.map((evt, i) => (
                   <div key={i} className="flex gap-4 items-start">
                       <p className="text-gray-200 text-sm font-medium">{evt.desc}</p>
                   </div>
               ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CalendarSection;