import React, { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-900 shadow-xl">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="text-xl font-bold tracking-tight text-white flex items-center gap-2 cursor-pointer" 
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-blue-500 font-mono">&lt;/&gt;</span>
          <span>LC.dev</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors cursor-pointer">Home</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-white transition-colors cursor-pointer">Skills</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors cursor-pointer">About</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors cursor-pointer">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors cursor-pointer">Contact</button>
        </div>

        <div className="hidden md:block">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
          >
            Hire Me →
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-300 hover:text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-900 px-6 py-6 space-y-4 shadow-2xl">
          <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-slate-300 hover:text-white font-medium py-2">Home</button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-300 hover:text-white font-medium py-2">About</button>
          <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-slate-300 hover:text-white font-medium py-2">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-slate-300 hover:text-white font-medium py-2">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-300 hover:text-white font-medium py-2">Contact</button>
          <div className="pt-2">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 rounded-lg shadow-md"
            >
              Hire Me →
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}