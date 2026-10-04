import { profile } from '../../data/resume';
import { useActiveSection } from '../../hooks/useActiveSection';
import { ResumeButton } from '../ui/ResumeButton';

const LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
const IDS = LINKS.map((l) => l.id);

export function Navbar() {
  const active = useActiveSection(IDS);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-neutral-200/70 bg-white/80 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-neutral-950">
          <span className="grid size-7 place-items-center rounded-md bg-neutral-950 font-mono text-[11px] text-white">
            LC
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 text-sm md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`rounded-md px-3 py-1.5 transition ${
                  active === l.id ? 'bg-neutral-100 text-neutral-950' : 'text-neutral-500 hover:text-neutral-950'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <ResumeButton className="rounded-lg border border-neutral-300 px-3 py-1.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-950">
          Download CV
        </ResumeButton>
      </div>
    </nav>
  );
}
