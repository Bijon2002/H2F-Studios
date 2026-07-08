import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Trigger progress bar animation shortly after mount
    const progressTimer = setTimeout(() => setProgress(100), 100);
    
    // Hide the loader after 2.5 seconds for a cinematic feel
    const hideTimer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <div 
        className={`fixed inset-0 z-[9999] bg-[#0a0503] flex items-center justify-center transition-all duration-1000 ease-in-out ${
          loading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
         <div className="flex flex-col items-center transform transition-transform duration-1000 translate-y-0">
           <div className="font-display-sm text-[36px] sm:text-[48px] font-extrabold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFF3C7] to-[#8A726B] drop-shadow-2xl">
              H2F <span className="font-body-md tracking-[0.4em] text-[16px] sm:text-[20px] ml-1 text-white/40">Studios</span>
           </div>
           <div className="w-48 sm:w-64 h-[1px] bg-white/10 mt-8 overflow-hidden relative">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4AF37] to-[#FFF3C7] transition-all duration-[2200ms] ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
           </div>
           <span className="font-label-caps text-[9px] sm:text-[10px] text-[#D4AF37]/80 tracking-[0.4em] mt-8 animate-pulse uppercase">
              Curating Memories
           </span>
         </div>
      </div>
      
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
