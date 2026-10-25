# Lista A · Aproximar Futuros

Official campaign website for **Lista A – Aproximar Futuros**, a candidate list in the University of Minho Students' Union (AAUMinho) board elections for the 2026 term.

**Live:** [aproximarfuturos.pt](https://www.aproximarfuturos.pt/)

![Lista A homepage](docs/screenshot.png)

## About

The site was the campaign's main channel to students. It brings together in one place everything a voter needed: who the team is, what they proposed, when the debates were, and how to vote.

## Features

- **Home** with an election countdown and campaign highlights
- **Team** page presenting every member of the list
- **Manifesto** with the campaign's proposals
- **Agenda** of campaign events and debates
- **Debate and interview players**: the official debate video and the Rádio Universitária do Minho (RUM) interview, embedded in the site
- **How to vote (FAQ)** explaining the election process
- **Suggestions form** that sends students' questions and ideas to a Google Sheet through Google Apps Script
- **Instagram feed** of the campaign account
- Fully responsive, with a dark theme, cyan accents and Inter/Orbitron typography

## Tech stack

| | |
|---|---|
| UI | React 19, Lucide icons |
| Styling | Tailwind CSS 3 |
| Build | Vite 6 |
| Quality | ESLint 9 |
| Hosting | Vercel |

## Getting started

Requirements: Node.js 18 or newer.

```bash
git clone https://github.com/telmomaciel9/Website-Lista-A-AAUMinho-2026.git
cd Website-Lista-A-AAUMinho-2026
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

To make the suggestions form work locally, create a `.env` file with the URL of your Google Apps Script web app:

```bash
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/<deployment-id>/exec
```

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the production version into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

## Project structure

```
src/
├── components/   # Shared UI: countdown, Instagram feed, scroll-to-top, common elements
├── data/         # Static content: team, manifesto, agenda, FAQ
├── sections/     # One component per page: Home, Team, Manifesto, Calendar, FAQ, Suggestions
├── App.jsx       # Layout and navigation (History API routing)
└── main.jsx      # Entry point
public/           # Logo and team photos
vercel.json       # Rewrites every route to index.html so deep links work
```

All content lives in `src/data/`, so text, members and events can be updated without touching the components.

## Author

**Telmo Maciel** · [GitHub](https://github.com/telmomaciel9) · [LinkedIn](https://www.linkedin.com/in/telmo-maciel/)

## License

See [LICENSE](LICENSE). The campaign name, logo and photos belong to Lista A – Aproximar Futuros.
