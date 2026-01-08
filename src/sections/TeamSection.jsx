import React from 'react';
import { SectionTitle } from '../components/Shared';
import { TEAM_MEMBERS } from '../data';

const TeamSection = () => (
  <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto min-h-screen">
    <SectionTitle title="A Nossa Equipa" subtitle="35 estudantes, uma só missão. Conhece os rostos que vão lutar por ti." />
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {TEAM_MEMBERS.map((member) => (
        <div key={member.id} className="group relative bg-black/40 border border-white/10 overflow-hidden rounded-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]">
          <div className="aspect-[3/4] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
            <img 
              src={member.img} 
              alt={member.name}
              loading="eager"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "/api/placeholder/300/400?text=FOTO"; 
              }}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 z-20">
            <span className={`inline-block px-2 py-1 mb-2 font-bold bg-cyan-500/20 text-cyan-400 rounded border border-cyan-500/20 leading-tight ${
              member.role.length > 25 ? 'text-[10px]' : 'text-xs'
            }`}>
              {member.role}
            </span>
            <h3 className="text-xl font-bold text-white mb-0.5 font-['Orbitron'] leading-tight">{member.name}</h3>
            <p className="text-cyan-400 text-xs font-semibold mb-0 tracking-wide opacity-90">{member.course}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TeamSection;