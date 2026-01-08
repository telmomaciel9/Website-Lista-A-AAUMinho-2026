import { Sparkles, Users, FileText, GraduationCap, Heart, Music, Briefcase, Trophy, Bus, Globe } from 'lucide-react';
import React from 'react';

// --- EQUIPA ---
const TEAM_RAW = [
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

export const TEAM_MEMBERS = TEAM_RAW.map((member, i) => ({
  id: i + 1,
  name: member.name,
  role: member.role,
  course: member.course,
  img: `/Fotos/${i + 1}.jpeg`
}));

// --- DEPARTAMENTOS ---
export const DEPARTMENTS = [
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

// --- MANIFESTO ---
export const MANIFESTO_POINTS = [
  {
    category: "Política Educativa e Representação",
    icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
    items: [
      "Reforço da ligação com a Reitoria, Autarquias e Governo para defender os interesses dos estudantes.",
      "Exigência de uma revisão profunda e participada do Regime Jurídico das Instituições de Ensino Superior, reivindicando maior representação estudantil nos órgãos de governo.",
      "Reforço do cumprimento e revisão contínua do Regulamento Académico da UMinho (RAUM).",
      "Acompanhamento próximo aos representantes nos Conselhos de Escola e Conselhos Pedagógicos.",
      "Dia do Delegado, formação contínua e reforço das Assembleias e Reuniões Setoriais de Delegados.",
      "Defesa do congelamento e redução das propinas (com vista à gratuitidade progressiva) e luta pela abolição de taxas e emolumentos."
    ]
  },
  {
    category: "Ação Social",
    icon: <Heart className="w-6 h-6 text-cyan-400" />,
    items: [
      "Reforço do financiamento dos Serviços de Ação Social da UMinho (SASUM), evitando aumentos de preços injustificados (cantina, residências, desporto).",
      "Melhoria e agilização dos processos de bolsas de estudo e Bolsas de Emergência; aumento de recursos humanos nos SASUM.",
      "Defesa da gratuitidade das refeições nas cantinas para estudantes bolseiros.",
      "Expansão e atualização dos complementos de alojamento, incluindo apoio a estudantes não bolseiros.",
      "Criação de respostas sociais robustas que reduzam custos globais do Ensino Superior.",
      "Acompanhamento da construção de novas residências (Fábrica Confiança e Santa Luzia) e exigência de renovação das atuais.",
      "Aumento do valor do complemento para estudantes deslocados e uniformização de valores entre ciclos de estudo.",
      "Reforço do apoio psicológico (objetivo de 1 psicólogo para cada 500 estudantes) e manutenção de programas como o Cheque-Psicólogo."
    ]
  },
  {
    category: "Cultura e Tradição",
    icon: <Music className="w-6 h-6 text-cyan-400" />,
    items: [
      "Reforço da ligação entre Grupos Culturais e a comunidade académica, bem como com Braga e Guimarães.",
      "Promoção ativa da participação estudantil em eventos culturais locais (ex.: São João, Braga Romana, Nicolinas).",
      "Desenvolvimento da agenda cultural da AAUMinho e criação de bolsas de criação artística.",
      "Preservação e dinamização de eventos como o Cortejo Académico, Latada, Serenatas e Imposição de Insígnias.",
      "Modernização da comunicação das tradições académicas, incluindo o Enterro da Gata (conteúdos digitais, bastidores, logística)."
    ]
  },
  {
    category: "Desenvolvimento de Carreiras",
    icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
    items: [
      "Fortalecimento da marca START POINT e da sua presença nos campi, redes sociais e website.",
      "Oferta de formações (START POINT Academy) e programas de mentoria com alumni para desenvolvimento de soft skills.",
      "Criação de uma cultura empreendedora através de iniciativas como LIFTOFF, Startup Point, START POINT Tour.",
      "Maior visibilidade e utilização do GIP – Gabinete de Inserção Profissional.",
      "Desmistificação do mercado de trabalho por via da START POINT Summit e eventos associados."
    ]
  },
  {
    category: "Desporto e Bem-Estar",
    icon: <Trophy className="w-6 h-6 text-cyan-400" />,
    items: [
      "Acompanhamento contínuo aos atletas universitários e reforço das equipas de competição.",
      "Promoção de desporto informal com atividades como Gata na Praia, Caloiro de Molho e o regresso do Troféu do Reitor.",
      "Inclusão dos esports na estratégia desportiva da AAUMinho.",
      "Comunicação desportiva inovadora (vídeo, redes sociais, imprensa local) para aumentar o apoio aos atletas.",
      "Promoção do Desporto Adaptado como ferramenta de inclusão e bem-estar.",
      "Candidatura para acolher Fases Finais dos Campeonatos Nacionais Universitários e Europeus em Braga e Guimarães.",
      "Realização da Gala do Desporto para premiar o mérito desportivo dos nossos estudantes-atletas."
    ]
  },
  {
    category: "Recreativo",
    icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
    items: [
      "Organização das Monumentais Festas do Enterro da Gata, Receção ao Caloiro e Semana da Euforia com foco na qualidade e segurança.",
      "Melhoria da comunicação, logística e experiência dos estudantes em grandes eventos recreativos (ex.: Enterro da Gata).",
      "Criação de atividades recreativas integradas com cultura, associativismo e desporto para reforço do espírito académico (derivado à missão geral da AAUMinho).",
      "Uso de copos reutilizáveis e certificação <Sê-lo Verde> nos eventos festivos.",
      "Formação das barraquinhas e reforço de mecanismos de prevenção de assédio e segurança nos recintos."
    ]
  },
  {
    category: "Administração e Serviços",
    icon: <Bus className="w-6 h-6 text-cyan-400" />,
    items: [
      "Reforço e modernização da Marca Recurso e diversificação dos parceiros e benefícios para estudantes.",
      "Renovação da app Recurso com novo design, funcionalidades e gamificação.",
      "Criação de uma plataforma central (App e Portal) com chatbot inteligente para resposta rápida aos estudantes.",
      "Otimização do Sistema de Transportes AAUMinho, incluindo melhoria das ligações Braga–Guimarães e digitalização de processos.",
      "Melhoria da gestão logística e dos recursos humanos internos, garantindo processos transparentes e inclusivos.",
      "Execução de um plano para reduzir a pegada ambiental da estrutura da AAUMinho."
    ]
  },
  {
    category: "Inclusão",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    items: [
      "Reforço do Gabinete de Inclusão, com financiamento dedicado e equipas multidisciplinares.",
      "Eliminação de barreiras estruturais, pedagógicas e legais para estudantes com necessidades educativas especiais (adaptação de edifícios, residências e desporto adaptado).",
      "Formação da comunidade académica sobre inclusão e combate à desinformação.",
      "Apoio reforçado a estudantes internacionais, com materiais bilingues, integração cultural e soluções de alojamento (público + parcerias privadas).",
      "Promoção da igualdade de oportunidades independentemente de género, orientação sexual, nacionalidade, etnia ou condição física/psicológica.",
      "Levantamento de queixas de racismo, homofobia e xenofobia, e programas de sensibilização.",
      "Dinamização da Plataforma VoluntariUM e projetos sociais como UMNovo Lar e UMRecomeço."
    ]
  }
];

// --- AGENDA ---
export const SCHEDULE = [
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