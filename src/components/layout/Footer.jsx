import { profile } from '../../data/resume';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 py-8 print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 text-xs text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>
          Built with React and Tailwind CSS ·{' '}
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="link">
            Source on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
