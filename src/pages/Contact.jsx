import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 py-20 border-t border-slate-900 reveal-on-scroll">
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 shadow-2xl w-full">
        <div className="space-y-6 text-center lg:text-left">
          <div className="text-blue-500 text-xs font-bold uppercase tracking-widest">LET'S WORK TOGETHER</div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Have a project in mind?</h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
            I'm always open to discussing new projects and opportunities. Let's create something amazing together!
          </p>
          <div className="pt-2">
            <a
              href="mailto:hello@alexdev.com"
              className="inline-block px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25"
            >
              Get In Touch →
            </a>
          </div>
        </div>

        <div className="space-y-6 lg:border-l lg:border-slate-800 lg:pl-12 flex flex-col justify-center">
          <div className="bg-slate-950/60 border border-slate-800/60 rounded-2xl p-6 italic text-slate-300 text-sm shadow-inner text-center lg:text-left">
            "Alex is an exceptional developer who delivers high-quality work on time. His attention to detail and problem-solving skills are outstanding."
            <div className="mt-4 not-italic font-semibold text-white text-xs">
              Sarah Johnson <span className="text-slate-500 font-normal block">CEO, TechStart</span>
            </div>
          </div>
          <div className="space-y-2 text-xs text-slate-400 font-mono text-center lg:text-left">
            <p>📧 Louiscaballero321@gmail.com</p>
            <p>📱 +1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </section>
  );
}