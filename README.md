# Lista A - Aproximar Futuros

Bem-vindo ao repositório oficial do website da **Lista A - Aproximar Futuros**, candidata à direção da AAUMinho para o mandato de 2026.

Este projeto tem como objetivo servir como a plataforma central de comunicação da campanha, apresentando a equipa, o manifesto, a agenda de eventos e fornecendo um canal direto para dúvidas e sugestões dos estudantes.

## 📋 Sobre o Projeto

O website foi desenvolvido para oferecer uma experiência de navegação fluida, moderna e informativa. O design reflete a identidade visual da campanha, utilizando um tema escuro com detalhes em ciano, tipografia moderna (Inter e Orbitron) e elementos interativos.

### Funcionalidades Principais
- **Início**: Visão geral da campanha e destaques.
- **Equipa**: Apresentação detalhada dos membros da lista.
- **Manifesto**: Acesso às propostas e linhas orientadoras da candidatura.
- **Agenda**: Calendário de eventos de campanha e debates, mantendo a comunidade informada.
- **Como Votar (FAQ)**: Secção de esclarecimento de dúvidas sobre o processo eleitoral.
- **Sugestões**: Formulário interativo para os estudantes enviarem as suas ideias e feedback.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web modernas para garantir performance e manutenibilidade:

- **[React](https://react.dev/)**: Biblioteca JavaScript para construção da interface de utilizador.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida e servidor de desenvolvimento.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e responsiva.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leve e consistente.
- **ESLint**: Ferramenta de linting para manter a qualidade do código.

## 📦 Instalação e Execução

Para executar este projeto localmente, siga os passos abaixo:

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado na sua máquina.

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd website-lista-a
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

O website estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

## 🛠️ Estrutura do Projeto

A estrutura de diretórios do projeto é organizada da seguinte forma:

```
src/
├── components/      # Componentes reutilizáveis (Shared, ScrollToTop, etc.)
├── data/           # Dados estáticos (informação da equipa, perguntas frequentes, etc.)
├── sections/       # Componentes principais que formam as páginas/secções (Home, Team, Manifesto...)
├── App.jsx         # Componente raiz com a lógica de roteamento e layout principal
├── AppAntiga.jsx   # (Arquivo de referência/versão anterior)
├── index.css       # Estilos globais e configuração do Tailwind
└── main.jsx        # Ponto de entrada da aplicação React
```

## 📜 Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts:

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila a aplicação para produção.
- `npm run lint`: Executa o ESLint para verificar problemas no código.
- `npm run preview`: Visualiza a versão de produção localmente após o build.

## 📄 Licença

Todos os direitos reservados à **Lista A - Aproximar Futuros**.
© 2025 Lista A.
