import { useLayoutEffect, useRef, useState } from 'react';
import { profile } from '../../data/resume';
import { useActiveSection } from '../../hooks/useActiveSection';
import lowisImg from '../../assets/lowis.png';

const LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
const IDS = LINKS.map((l) => l.id);

export function Navbar() {
  const scrollActive = useActiveSection(IDS);
  const [clicked, setClicked] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [pill, setPill] = useState(null);
  const [pressKey, setPressKey] = useState(0);
  const itemRefs = useRef({});

  const active = clicked ?? scrollActive;
  const target = hovered ?? active;

  if (clicked && scrollActive === clicked) setClicked(null);

  useLayoutEffect(() => {
    const el = target && itemRefs.current[target];
    if (!el) return setPill(null);
    setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [target]);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-neutral-200/70 bg-white/80 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight text-neutral-950">
          <img src={lowisImg} alt="" className="size-8 rounded-full object-cover object-top" />
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul
          onMouseLeave={() => setHovered(null)}
          className="relative hidden items-center gap-1 text-sm md:flex"
        >
          {pill && (
            <span
              aria-hidden
              key={pressKey}
              className={`pointer-events-none absolute inset-y-0 my-auto h-8 rounded-md transition-[left,width,background-color] duration-300 ease-[cubic-bezier(0.3,1.2,0.4,1)] ${
                hovered && hovered !== active ? 'bg-neutral-100' : 'nav-pill-press bg-neutral-200/70'
              }`}
              style={{ left: pill.left, width: pill.width }}
            />
          )}
          {LINKS.map((l) => (
            <li key={l.id} ref={(el) => (itemRefs.current[l.id] = el)}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                onMouseEnter={() => setHovered(l.id)}
                onClick={() => {
                  setClicked(l.id);
                  setPressKey((k) => k + 1);
                }}
                className={`relative block rounded-md px-3 py-1.5 transition-colors duration-200 active:scale-95 ${
                  active === l.id || hovered === l.id ? 'text-neutral-950' : 'text-neutral-500'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
