import React from 'react';
import { projectsData } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 py-20 border-t border-slate-900 reveal-on-scroll">
      <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
        <div className="text-blue-500 text-xs font-bold uppercase tracking-widest">FEATURED PROJECTS</div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Some of My Recent Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-bold text-blue-500/60">{project.id}</span>
                <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform"></span>
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="pt-6 space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-blue-300 border border-slate-700/60">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="inline-block text-xs font-semibold text-blue-400 hover:text-blue-300 tracking-wider uppercase transition-colors pt-2"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}