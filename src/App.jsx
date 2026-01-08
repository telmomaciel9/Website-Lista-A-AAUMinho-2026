import React, { useState, useEffect } from 'react';
import { Home, Users, FileText, Calendar, MessageSquare, HelpCircle, Menu, X, Mail, MapPin, Instagram } from 'lucide-react';

// Componentes
import { Logo, NavItem } from './components/Shared';
import HomeSection from './sections/HomeSection';
import TeamSection from './sections/TeamSection';
import ManifestoSection from './sections/ManifestoSection';
import CalendarSection from './sections/CalendarSection';
import SuggestionsSection from './sections/SuggestionsSection';
import ScrollToTop from './components/ScrollToTop';
import FaqSection from './sections/FaqSection';
import { TEAM_MEMBERS } from './data/index.jsx'; // Importação para pre-load

// ==========================================
// LAYOUT PRINCIPAL (App)
// ==========================================

const ROUTE_MAP = {
  home: '/',
  team: '/equipa',
  manifesto: '/manifesto',
  calendar: '/agenda',
  suggestions: '/sugestoes',
  faqs: '/duvidas',
};

export default function App() {
  
  const getInitialTab = () => {
    if (typeof window !== 'undefined') {
      try {
        const currentPath = window.location.pathname;
        // Encontra a chave (nome da aba) correspondente ao caminho atual
        return Object.keys(ROUTE_MAP).find(key => ROUTE_MAP[key] === currentPath) || 'home';
      } catch (e) {
          console.warn("Failed to read initial path:", e);
      }
    }
    return 'home';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
    
    const path = ROUTE_MAP[tab] || '/';
    
    try {
        window.history.pushState({}, '', path);
    } catch (e) {
        console.warn("Navigation update failed:", e);
    }
    
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const handlePopState = () => {
      setActiveTab(getInitialTab());
    };
    window.addEventListener('popstate', handlePopState);
    
    const preloadImages = () => {
      TEAM_MEMBERS.forEach((member) => {
        const img = new Image();
        img.src = member.img;
      });
    };
    setTimeout(preloadImages, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'team': return <TeamSection />;
      case 'manifesto': return <ManifestoSection />;
      case 'calendar': return <CalendarSection />;
      case 'suggestions': return <SuggestionsSection />;
      case 'faqs': return <FaqSection />;
      default: return <HomeSection setPage={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#05051a] font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Orbitron:wght@400;700;900&display=swap');
      `}</style>

      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || activeTab !== 'home' ? 'bg-[#05051a]/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div onClick={() => handleNavigation('home')} className="z-50 relative cursor-pointer">
             <Logo />
          </div>

          <div className="hidden xl:flex items-center gap-1">
            <NavItem active={activeTab === 'home'} onClick={() => handleNavigation('home')} icon={Home} label="Início" />
            <NavItem active={activeTab === 'team'} onClick={() => handleNavigation('team')} icon={Users} label="Equipa" />
            <NavItem active={activeTab === 'manifesto'} onClick={() => handleNavigation('manifesto')} icon={FileText} label="Manifesto" />
            <NavItem active={activeTab === 'calendar'} onClick={() => handleNavigation('calendar')} icon={Calendar} label="Agenda" />
            <NavItem active={activeTab === 'faqs'} onClick={() => handleNavigation('faqs')} icon={HelpCircle} label="Como Votar" />
            <NavItem active={activeTab === 'suggestions'} onClick={() => handleNavigation('suggestions')} icon={MessageSquare} label="Sugestões" />
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="xl:hidden text-white z-50">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#05051a] z-40 flex flex-col items-center justify-center gap-8 xl:hidden">
            <button onClick={() => handleNavigation('home')} className="text-2xl font-['Orbitron'] text-white">INÍCIO</button>
            <button onClick={() => handleNavigation('team')} className="text-2xl font-['Orbitron'] text-white">EQUIPA</button>
            <button onClick={() => handleNavigation('manifesto')} className="text-2xl font-['Orbitron'] text-white">MANIFESTO</button>
            <button onClick={() => handleNavigation('calendar')} className="text-2xl font-['Orbitron'] text-white">AGENDA</button>
            <button onClick={() => handleNavigation('faqs')} className="text-2xl font-['Orbitron'] text-white">COMO VOTAR</button>
            <button onClick={() => handleNavigation('suggestions')} className="text-2xl font-['Orbitron'] text-white">SUGESTÕES</button>
        </div>
      )}

      <main className="min-h-screen">
        {renderContent()}
      </main>

      <footer className="bg-black border-t border-white/10 py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-6 text-gray-500 max-w-sm">
              Lista candidata à direção da AAUMinho para o mandato de 2026. 
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-['Orbitron'] mb-4 uppercase tracking-wider">Contactos</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer"><Mail size={16}/> listaa.aauminho26@gmail.com</li>
              <li className="flex items-center gap-2 hover:text-cyan-400 cursor-pointer"><MapPin size={16}/> Universidade do Minho</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold font-['Orbitron'] mb-4 uppercase tracking-wider">Segue-nos</h4>
            <div className="flex justify-start">
              <a href="https://www.instagram.com/listaa.aproximarfuturos/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-cyan-500 transition-all duration-300">
                <Instagram size={24} className="text-white group-hover:text-black transition-colors" />
                <span className="text-white font-medium tracking-wide group-hover:text-black transition-colors">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-600 text-xs">
          © 2025 Lista A - Aproximar Futuros. Todos os direitos reservados.
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}