import React, { useEffect } from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
  useEffect(() => {
    const d = document;
    const s = d.createElement("script");
    s.src = "https://snapwidget.com/js/snapwidget.js";
    d.head.append(s);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto mt-[180px] md:mt-32 px-4">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white font-['Orbitron'] mb-4 flex items-center justify-center gap-3">
           <Instagram className="text-cyan-400" />
           Acompanha o nosso dia-a-dia
        </h3>
        <a 
          href="https://www.instagram.com/listaa.aproximarfuturos/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-white transition-colors text-sm tracking-widest uppercase flex items-center justify-center gap-2 group"
        >
          @listaa.aproximarfuturos <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform"/>
        </a>
      </div>
  
      <iframe 
        src="https://snapwidget.com/embed/1113560" 
        className="snapwidget-widget" 
        allowtransparency="true"
        frameBorder="0" 
        scrolling="no" 
        style={{ border: 'none', overflow: 'hidden', width: '100%' }} 
        title="Posts from Instagram"
      ></iframe>
      
      <div className="text-center mt-8">
          <a href="https://www.instagram.com/listaa.aproximarfuturos/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 border border-white/20 rounded-full text-xs text-gray-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all">
              Ver mais publicações
          </a>
      </div>
    </div>
  );
};



export default InstagramFeed;