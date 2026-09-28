import React from 'react';

export function ProjectCard({ project }) {
  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
            {project.title.charAt(0)}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 group-hover:text-blue-400 transition-colors p-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-blue-300 border border-slate-700">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}