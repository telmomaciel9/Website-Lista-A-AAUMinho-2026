import React, { useState, useEffect } from 'react';
import { Calendar, Users, FileText, Home, Menu, X, ChevronRight, ArrowRight, Instagram, Facebook, Twitter, MapPin, Mail, Sparkles, Clock, ExternalLink, Briefcase, Trophy, Music, Heart, Bus, GraduationCap, Globe, MessageSquare, Send } from 'lucide-react';

// --- DATA MOCKS ---

const TEAM_DATA = [
  { role: "Presidente", name: "Luís Miguel de Lima Guedes", course: "M. Sistemas de Informação" },
  { role: "Presidente-Adjunto Interno", name: "Telmo José Pereira Maciel", course: "M. Engenharia Informática" },
  { role: "Presidente-Adjunta Externa", name: "Sofia Marques Ribas Fernandes", course: "M. Engenharia Biomédica" },
  { role: "Tesoureiro", name: "Guilherme dos Santos Amorim Fernandes", course: "M. Engenharia Biomédica" },
  { role: "Tesoureiro-Adjunto", name: "Murilo Melnek Pedro", course: "M. Gestão de Recursos Humanos" },
  { role: "Secretário Presidência", name: "Bernardo Vieira e Costa", course: "M. Design de Produto e Serviços" },
  { role: "Secretária Direção", name: "Joana Maria Carvalho Carvas", course: "L. Enfermagem" },
  { role: "Vice-Presidente Ação Educativa e Associativismo", name: "João Rodrigues Nunes", course: "L. Direito" },
  { role: "Núcleos", name: "Inês Margarida Pinheiro de Melo", course: "L. Engenharia e Gestão de Sistemas de Informação" },
  { role: "Pedagogia", name: "José Alberto Matos de Melo Ribeiro", course: "L. Engenharia Aeroespacial" },
  { role: "2º e 3º ciclos", name: "Filipa Ferreira Antunes", course: "D. Biomedicina e Ciências da Saúde" },
  { role: "Vice-Presidente Administração", name: "Gonçalo Rodrigues Monteiro", course: "M. Gestão e Negócios" },
  { role: "Logística", name: "Marcos Bernardo da Silva Lobo", course: "L. Engenharia Informática" },
  { role: "Recursos Humanos", name: "Carolina Pinto Maia", course: "M. Engenharia Biomédica" },
  { role: "Vice-Presidente Comunicação", name: "Bruna Nascimento Lima", course: "M. Gestão" },
  { role: "Comunicação", name: "Carolina Cruzeiro da Silva Lança", course: "L. Ciências da Comunicação" },
  { role: "Comunicação", name: "Tiago Fernandes Barros", course: "L. Engenharia e Gestão de Sistemas de Informação" },
  { role: "Comunicação", name: "Leonor Ribeiro Borges", course: "L. Marketing" },
  { role: "Vice-Presidente Cultural e Tradições Académicas", name: "Ana Beatriz Nunes Gato", course: "M. Psicologia do Trabalho e das Organizações" },
  { role: "Cultura", name: "Carolina Pinto da Silva", course: "L. Engenharia Materiais" },
  { role: "Grupos Culturais", name: "Afonso Costa Vieira", course: "L. Engenharia Mecanica" },
  { role: "Tradições Académicas", name: "Vasco Gonçalves Vaz", course: "M. Engenharia Materiais" },
  { role: "Vice-Presidente Desenvolvimento de Carreiras", name: "Lara Regina da Silva Pereira", course: "M. Engenharia Informática" },
  { role: "Emprego", name: "Francisco José Magalhães da Rocha Coelho", course: "L. Engenharia Informática" },
  { role: "Formação", name: "Daniela Sofia Araújo Rodrigues", course: "L. Economia" },
  { role: "Vice-Presidente Desportivo", name: "Mariana Menezes de Azevedo Mota", course: "M. Biotecnologia" },
  { role: "Competição", name: "Manuel Carvalho Dinis de Castro Vieira", course: "L. Engenharia e Gestão de Sistemas de Informação" },
  { role: "Eventos", name: "Marta Moreira Alves", course: "L. Gestão" },
  { role: "Vice-Presidente Recreativo", name: "Maria Inês da Rocha Pinto Gracias Fernandes", course: "L. Engenharia Informática" },
  { role: "Diretor", name: "Isabel Sarmento Araújo", course: "L. Física" },
  { role: "Diretor", name: "Tiago André Gomes Costa", course: "L. Engenharia e Gestão Industrial" },
  { role: "Vice-Presidente Social", name: "Pedro Miguel Sousa Oliveira", course: "M. Psicologia do Trabalho e das Organizações" },
  { role: "Sociedade", name: "Alexandrino Rolandini Borromeu Guterres", course: "L. Direito" },
  { role: "Voluntariado", name: "Lara Machado Oliveira", course: "L. Educação" },
  { role: "Inclusão + Sustentabilidade", name: "Sara Cristina Santos Lopes", course: "Medicina" }
];

const TEAM_MEMBERS = TEAM_DATA.map((member, i) => ({
  id: i + 1,
  name: member.name,
  role: member.role,
  course: member.course,
  img: `/Fotos/${i + 1}.jpeg`
}));

const DEPARTMENTS = [
  "Presidência",
  "Ação Educativa e Associativismo",
  "Administração",
  "Comunicação",
  "Cultural e Tradições Académicas",
  "Desenvolvimento de Carreiras",
  "Desportivo",
  "Recreativo",
  "Social"
];

const MANIFESTO_POINTS = [
  {
    category: "Política Educativa e Representação",
    icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
    items: [
      "Em atualização"
    ]
  },
  {
    category: "Ação Social",
    icon: <Heart className="w-6 h-6 text-cyan-400" />,
    items: [
      "Em atualização"
    ]
  },
  {
    category: "Cultura e Tradição",
    icon: <Music className="w-6 h-6 text-cyan-400" />,
    items: [
      "Em atualização"
    ]
  },
  {
    category: "Desenvolvimento de Carreiras",
    icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
    items: [
      "Em atualização"
    ]
  },
  {
    category: "Desporto e Bem-Estar",
    icon: <Trophy className="w-6 h-6 text-cyan-400" />,
    items: [
      "Em atualização"
    ]
  },
  {
    category: "Recreativo",
    icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
    items: [
      "Em atualização"
    ]
  },
  {
    category: "Administração e Serviços",
    icon: <Bus className="w-6 h-6 text-cyan-400" />,
    items: [
      "Em atualização"
    ]
  },
  {
    category: "Inclusão",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    items: [
      "Em atualização"
    ]
  }
];

const SCHEDULE = [
  {
    day: "02",
    month: "DEZ",
    events: [
      { desc: "Almoço na cantina de Azurém" },
      { desc: "Visita ao Campus de Azurém" },
      { desc: "Reunião com os NSD's de Braga" },
      { desc: "Reunião com os Grupos Culturais de Braga" }
    ]
  },
  {
    day: "03",
    month: "DEZ",
    events: [
      { desc: "Visita à Comissão de Residentes dos Combatentes" },
      { desc: "Visita ao Campus de Couros" },
      { desc: "Visita à Comissão de Residentes de Azurém" },
      { desc: "Festa do Autocolante nos Bares Universitários" }
    ]
  },
  {
    day: "04",
    month: "DEZ",
    events: [
      { desc: "Reunião com os NSD's de Guimarães" },
      { desc: "Reunião com os Grupos Culturais de Guimarães" }
    ]
  },
  {
    day: "05",
    month: "DEZ",
    events: [
      { desc: "Visita ao Campus de Gualtar" },
      { desc: "Almoço na cantina de Gualtar" },
      { desc: "Visita ao Campus de Congregados" },
      { desc: "Visita à Comissão de Residentes da LLOYD" },
      { desc: "Visita à Comissão de Residentes de Santa Tecla" },
      { desc: "Jantar na cantina de Santa Tecla" }
    ]
  }
];

// --- COMPONENTS ---

const Logo = () => (
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

const NavItem = ({ active, onClick, icon, label }) => {
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

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Orbitron'] tracking-wide">
      {title}
    </h2>
    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-4"></div>
    <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
  </div>
);

const InstagramFeed = () => {
  useEffect(() => {
    const d = document;
    const s = d.createElement("script");
    s.src = "https://snapwidget.com/js/snapwidget.js";
    d.head.append(s);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto mt-24 md:mt-32 px-4">
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

// --- SECTIONS ---

const HomeSection = ({ setPage }) => (
  <div className="relative min-h-screen flex flex-col pt-24 md:pt-32 pb-20 overflow-hidden">
    
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse z-0 pointer-events-none"></div>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>

    <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
      <div className="inline-block px-4 py-1 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm tracking-widest uppercase font-bold">
        Eleições AAUMinho 2025
      </div>


      {/* Contentor Flex para alinhar Logo e Texto - Largura definida pelo conteúdo (o texto) */}
      <div className="flex flex-col items-center w-fit mx-auto mb-6">
          {/* Logo - w-full faz com que ocupe a largura total do pai (que é igual ao texto) */}
          <img 
            src="/LogoCortado.png" 
            alt="Logo Lista A" 
            className="w-full mb-2 animate-fade-in-up object-contain max-h-32" 
          />

          {/* Texto - Define a largura do contentor pai */}
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

        {/* Novo botão de sugestões */}
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

      <InstagramFeed />

    </div>
  </div>
);

const SuggestionsSection = () => {
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!department || !message) return;

    setStatus("submitting");

    // URL da API atualizado
    const API_URL = "https://script.google.com/macros/s/AKfycbykKnoy0ZriD-jydtc29seF75n8IA3xLTs0Jv4HkgTxFQAdXqe9wIO4OIvIrl4G2Kjfyg/exec";

    try {
      await fetch(API_URL, {
        method: "POST",
        // Force Content-Type to text/plain to avoid CORS preflight (OPTIONS request) which Apps Script doesn't support
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({ department, message }),
        mode: "no-cors"
      });
      
      // With no-cors, we get an opaque response, so we can't check status.
      // We assume it worked if it didn't throw a network error.
      setStatus("success");
      setDepartment("");
      setMessage("");
    } catch (error) {
      console.error("Erro:", error);
      setStatus("error");
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 max-w-3xl mx-auto min-h-screen">
      <SectionTitle title="A Tua Voz Conta" subtitle="Tens uma ideia para melhorar a nossa Academia? Partilha connosco." />
      
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -z-10"></div>

        {status === "success" ? (
          <div className="text-center py-12 animate-fade-in-up">
            <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
              <Sparkles size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white font-['Orbitron'] mb-2">Obrigado!</h3>
            <p className="text-gray-300">A tua sugestão foi registada com sucesso. Juntos vamos aproximar futuros.</p>
            <button 
              onClick={() => setStatus("idle")}
              className="mt-8 px-6 py-2 border border-white/20 text-white rounded hover:bg-white/10 transition-colors"
            >
              Enviar nova sugestão
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-cyan-400 text-sm font-bold uppercase tracking-wider mb-2">
                Departamento
              </label>
              <div className="relative">
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full bg-[#0a0a1f] border border-white/20 text-white rounded-lg p-4 appearance-none focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all cursor-pointer"
                  required
                >
                  <option value="" disabled>Seleciona a área da tua sugestão</option>
                  {DEPARTMENTS.map((dept, i) => (
                    <option key={i} value={dept} className="bg-[#05051a]">{dept}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <ChevronRight className="rotate-90" size={20} />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-cyan-400 text-sm font-bold uppercase tracking-wider mb-2">
                A tua sugestão
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escreve aqui a tua ideia ou proposta..."
                rows="6"
                className="w-full bg-[#0a0a1f] border border-white/20 text-white rounded-lg p-4 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className={`w-full group relative px-8 py-4 bg-cyan-500 text-black font-bold text-lg rounded-lg hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 ${
                status === "submitting" ? "opacity-70 cursor-wait" : ""
              }`}
            >
              {status === "submitting" ? (
                "A enviar..."
              ) : (
                <>
                  ENVIAR SUGESTÃO
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

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

const ManifestoSection = () => (
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
    
    <div className="mt-16 text-center">
      <a 
        href="" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 border border-cyan-500 text-cyan-400 rounded hover:bg-cyan-500 hover:text-black font-bold transition-all duration-300 uppercase tracking-widest text-sm"
      >
        Descarregar Manifesto Completo (PDF)
      </a>
    </div>
  </div>
);

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

// --- MAIN LAYOUT ---

export default function App() {
  
  // Função auxiliar para determinar a tab inicial com base no URL
  const getInitialTab = () => {
    // Verifica se estamos no ambiente do browser
    if (typeof window !== 'undefined') {
      // Remove a barra inicial e final (se existir) para evitar erros com "sugestoes/"
      // Exemplo: "/sugestoes/" torna-se "sugestoes"
      const path = window.location.pathname.replace(/^\/|\/$/g, ''); 

      if (path === 'sugestoes') return 'suggestions';
      if (path === 'equipa') return 'team';
      if (path === 'manifesto') return 'manifesto';
      if (path === 'agenda') return 'calendar';
    }
    // Se não corresponder a nenhuma (ou for a raiz "/"), mostra a Home
    return 'home';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Função centralizada de navegação
  const handleNavigation = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false); // Fecha o menu mobile se estiver aberto
    
    // Mapeamento de tabs para caminhos URL
    let path = '/';
    if (tab === 'suggestions') path = '/sugestoes';
    else if (tab === 'team') path = '/equipa';
    else if (tab === 'manifesto') path = '/manifesto';
    else if (tab === 'calendar') path = '/agenda';
    
    // Atualiza o URL sem recarregar a página
    window.history.pushState({}, '', path);
    
    // Scroll para o topo
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Listener para o botão "Voltar" do browser
    const handlePopState = () => {
      setActiveTab(getInitialTab());
    };
    window.addEventListener('popstate', handlePopState);
    
    // Preload images immediately
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

          <div className="hidden md:flex items-center gap-2">
            <NavItem active={activeTab === 'home'} onClick={() => handleNavigation('home')} icon={Home} label="Início" />
            <NavItem active={activeTab === 'team'} onClick={() => handleNavigation('team')} icon={Users} label="Equipa" />
            <NavItem active={activeTab === 'manifesto'} onClick={() => handleNavigation('manifesto')} icon={FileText} label="Manifesto" />
            <NavItem active={activeTab === 'calendar'} onClick={() => handleNavigation('calendar')} icon={Calendar} label="Agenda" />
            <NavItem active={activeTab === 'suggestions'} onClick={() => handleNavigation('suggestions')} icon={MessageSquare} label="Sugestões" />
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white z-50">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#05051a] z-40 flex flex-col items-center justify-center gap-8 md:hidden">
            <button onClick={() => handleNavigation('home')} className="text-2xl font-['Orbitron'] text-white">INÍCIO</button>
            <button onClick={() => handleNavigation('team')} className="text-2xl font-['Orbitron'] text-white">EQUIPA</button>
            <button onClick={() => handleNavigation('manifesto')} className="text-2xl font-['Orbitron'] text-white">MANIFESTO</button>
            <button onClick={() => handleNavigation('calendar')} className="text-2xl font-['Orbitron'] text-white">AGENDA</button>
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
    </div>
  );
}