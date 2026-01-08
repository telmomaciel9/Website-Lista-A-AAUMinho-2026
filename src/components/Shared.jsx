import React from 'react';

export const Logo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg shadow-[0_0_15px_rgba(0,255,255,0.5)] border border-cyan-400/30 overflow-hidden">
        <img src="/Logopng.png" alt="Logo Lista A" className="w-full h-full object-contain p-1 relative z-10" />
        <div className="absolute inset-0 bg-cyan-500/20 blur-md group-hover:bg-cyan-400/30 transition-all duration-300"></div>
    </div>
    <div className="flex flex-col">
      <span className="text-white font-bold text-lg tracking-wider font-['Orbitron'] leading-none">LISTA A</span>
      <span className="text-cyan-400 text-[10px] tracking-[0.2em] font-medium">APROXIMAR FUTUROS</span>
    </div>
  </div>
);

export const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Orbitron'] tracking-wide">
      {title}
    </h2>
    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-4"></div>
    <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

export const NavItem = ({ active, onClick, icon, label }) => {
  const Icon = icon;
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
        active 
        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 shadow-[0_0_10px_rgba(0,255,255,0.2)]' 
        : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
    >
      {Icon && <Icon size={16} />}
      <span className="font-medium text-sm uppercase tracking-wide">{label}</span>
    </button>
  );
};