import React from 'react';

export function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 py-20 border-t border-slate-900 reveal-on-scroll">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6 text-center lg:text-left">
          <div className="text-blue-500 text-xs font-bold uppercase tracking-widest">ABOUT ME</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
            I’m passionate about creating digital solutions
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            With over 3+ years of experience in web development, I help businesses and individuals bring their ideas to life through clean, efficient, and user-friendly code.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 text-center shadow-lg">
            <h3 className="text-3xl font-extrabold text-white mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">3+</h3>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Years Experience</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 text-center shadow-lg">
            <h3 className="text-3xl font-extrabold text-white mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">25+</h3>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Projects Completed</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 text-center shadow-lg">
            <h3 className="text-3xl font-extrabold text-white mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">15+</h3>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Deployed Repositories</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 text-center shadow-lg">
            <h3 className="text-3xl font-extrabold text-white mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">100%</h3>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Creativity</p>
          </div>
        </div>
      </div>
    </section>
  );
}