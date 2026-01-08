import React, { useState } from 'react';
import { ChevronRight, Send, Sparkles } from 'lucide-react';
import { SectionTitle } from '../components/Shared';
import { DEPARTMENTS } from '../data';

const SuggestionsSection = () => {
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!department || !message) return;

    setStatus("submitting");

    const API_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({ department, message }),
        mode: "no-cors"
      });
      
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

export default SuggestionsSection;