import React from 'react';
import lowisImg from '../assets/lowis.png'; // 1. Import your image here

export function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skillGroups = [
    {
      category: "FRONT-END (CLIENT-SIDE)",
      skills: [
        { name: "HTML5", slug: "html5", color: "E34F26" },
        { name: "CSS3", slug: "css", color: "1572B6" },
        { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
        { name: "React.js", slug: "react", color: "61DAFB" },
        { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
        { name: "Bootstrap", slug: "bootstrap", color: "7952B3" },
        { name: "Vite", slug: "vite", color: "646CFF" }
      ]
    },
    {
      category: "BACK-END (SERVER-SIDE)",
      skills: [
        { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
        { name: "Express", slug: "express", color: "ffffff" },
        { name: "Python", slug: "python", color: "3776AB" },
        { name: "MongoDB", slug: "mongodb", color: "47A248" }
      ]
    },
    {
      category: "TOOLS & WORKFLOW",
      skills: [
        { name: "Git", slug: "git", color: "F05032" },
        { name: "VS Code", slug: "visualstudio-code", color: "007ACC" },
        { name: "Figma", slug: "figma", color: "F24E1E" }
      ]
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wide">
              I'M A WEB DEVELOPER
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Louis</span><br />
              I build things for the web.
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I'm a passionate web developer specializing in building exceptional digital experiences with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                View My Work →
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 transition-all cursor-pointer"
              >
                Download CV ↓
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-sm lg:w-[450px] flex justify-center">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-full rounded-2xl bg-slate-900 border border-slate-800 p-6 shadow-2xl flex flex-col items-center">
              
              {/* Profile Image Container */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-400 p-1 mb-4 shadow-xl overflow-hidden">
                <img 
                  src={lowisImg} /* 2. Use the imported variable here */
                  alt="Louis" 
                  className="w-full h-full rounded-full object-cover bg-slate-950"
                />
              </div>

              <div className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-400 mt-2 space-y-1 shadow-inner overflow-x-auto">
                <p className="text-blue-400">&lt;/&gt; Code Preview</p>
                <p><span className="text-indigo-400">const</span> developer = &#123;</p>
                <p className="pl-4">name: <span className="text-emerald-400">"Louis"</span>,</p>
                <p className="pl-4">role: <span className="text-emerald-400">"Web Developer"</span>,</p>
                <p className="pl-4">focus: <span className="text-emerald-400">"Full-Stack Apps"</span></p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 py-20 border-t border-slate-900 reveal-on-scroll">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <div className="text-blue-500 text-xs font-bold uppercase tracking-widest">TECH STACK</div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Technologies I Master</h2>
        </div>

        <div className="space-y-12 w-full max-w-4xl mx-auto">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xs font-bold tracking-widest text-slate-400 text-center uppercase">
                {group.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {group.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx} 
                    className="w-32 h-32 bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg group"
                  >
                    <img 
                      src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`} 
                      alt={`${skill.name} logo`} 
                      className="w-10 h-10 object-contain group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all"
                    />
                    <span className="text-slate-300 text-xs font-semibold tracking-wide text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}