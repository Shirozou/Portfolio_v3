import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
        <p>© {new Date().getFullYear()} LC.dev. All rights reserved.</p>
        <p>Made with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}