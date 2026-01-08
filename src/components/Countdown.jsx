import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const calculateStatus = () => {
    const now = new Date();
    // Ajusta o ano se necessário, aqui assumo 2025 conforme o teu contexto
    const openDate = new Date("2025-12-10T09:00:00");
    const closeDate = new Date("2025-12-10T20:00:00"); // Atualizado para as 20h

    if (now < openDate) {
      return {
        target: openDate,
        label: "Abertura das Urnas",
        mode: "waiting"
      };
    } else if (now < closeDate) {
      return {
        target: closeDate,
        label: "Fecho das Urnas - VOTA JÁ!",
        mode: "voting"
      };
    } else {
      return {
        target: null,
        label: "Votação Encerrada",
        mode: "finished"
      };
    }
  };

  const calculateTimeLeft = (targetDate) => {
    if (!targetDate) return {};
    
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [status, setStatus] = useState(calculateStatus());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(status.target));

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentStatus = calculateStatus();
      setStatus(currentStatus);
      setTimeLeft(calculateTimeLeft(currentStatus.target));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    // Só mostra os dias se forem maior que 0
    if (interval === 'dias' && timeLeft[interval] === 0) return;

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2 md:mx-4">
        <span className={`text-2xl md:text-4xl font-bold text-white font-['Orbitron'] tabular-nums ${status.mode === 'voting' ? 'text-red-500 animate-pulse' : ''}`}>
          {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
        </span>
        <span className="text-[10px] md:text-xs text-cyan-400 uppercase tracking-widest mt-1">
          {interval}
        </span>
      </div>
    );
  });

  if (status.mode === 'finished') {
    return (
      <div className="flex flex-col items-center py-6 md:py-8 animate-fade-in-up">
        <span className="text-2xl md:text-3xl text-white font-bold font-['Orbitron']">Votação Encerrada</span>
        <span className="text-sm text-cyan-400 mt-2">Obrigado pela tua participação!</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-6 md:py-8 animate-fade-in-up">
      <div className="flex justify-center items-center mb-2">
        {timerComponents.length ? timerComponents : <span className="text-xl text-white font-bold">A carregar...</span>}
      </div>
      <span className={`text-xs md:text-sm tracking-[0.2em] uppercase font-bold mt-2 ${status.mode === 'voting' ? 'text-red-400 animate-pulse' : 'text-gray-400'}`}>
        {status.label}
      </span>
    </div>
  );
};

export default Countdown;