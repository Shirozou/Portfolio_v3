import lowisImg from '../assets/lowis.png';
import { profile, highlights } from '../data/resume';
import { ResumeButton } from '../components/ui/ResumeButton';
import { ArrowRight, GitHub, LinkedIn, Pin } from '../components/ui/Icons';

export function Home() {
  return (
    <header id="top" className="pt-28 pb-16 sm:pt-36 sm:pb-20 print:pt-0 print:pb-8">
      <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          {profile.availability && (
            <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700 print:hidden">
              {profile.availability}
            </p>
          )}

          <h1 className="mt-6 text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.035em] text-neutral-950 sm:text-6xl print:mt-0 print:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-neutral-500 sm:text-xl">
            {profile.role} <span className="text-neutral-300">/</span> {profile.focus}
          </p>
          <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-[17px]">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3 print:hidden">
            <ResumeButton className="rounded-lg bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800" />
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-950"
            >
              See my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500">
            <li className="inline-flex items-center gap-1.5">
              <Pin className="size-4" /> {profile.location}
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="link">{profile.email}</a>
            </li>
            <li>
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-neutral-950">
                <GitHub className="size-4" /> GitHub
              </a>
            </li>
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-neutral-950">
                <LinkedIn className="size-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <img
          src={lowisImg}
          alt={profile.name}
          className="size-20 rounded-2xl bg-neutral-100 object-cover ring-1 ring-neutral-200 sm:size-28 print:hidden"
        />
      </div>

      {/* At a glance */}
      <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 sm:grid-cols-4 print:mt-8">
        {highlights.map((h) => (
          <div key={h.label} className="bg-white px-5 py-5">
            <dt className="sr-only">{h.label}</dt>
            <dd className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">{h.value}</dd>
            <dd className="mt-1 text-xs leading-snug text-neutral-500 sm:text-[13px]">{h.label}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
