import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:bg-white transition-all duration-300 animate-bounce-slow"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;