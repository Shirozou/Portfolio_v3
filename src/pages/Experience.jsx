import { experience } from '../data/resume';
import { Section } from '../components/ui/Section';

export function Experience() {
  return (
    <Section id="experience" index="01" label="Experience">
      <ol className="relative space-y-12 border-l border-neutral-200 pl-6 sm:pl-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative print:break-inside-avoid">
            <span
              className={`absolute top-[7px] -left-[calc(1.5rem+5px)] size-[9px] rounded-full ring-4 ring-white sm:-left-[calc(2rem+5px)] ${
                job.current ? 'bg-emerald-500' : 'bg-neutral-300'
              }`}
            />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-neutral-950">
                {job.role}
                <span className="font-normal text-neutral-500">
                  {' · '}
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noreferrer" className="link">{job.company}</a>
                  ) : (
                    job.company
                  )}
                </span>
              </h3>
              <p className="font-mono text-xs text-neutral-500 tabular-nums">{job.period}</p>
            </div>
            <p className="mt-0.5 text-sm text-neutral-500">{job.location}</p>

            <ul className="mt-4 space-y-2">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-neutral-700">
                  <span className="mt-[11px] h-px w-3 shrink-0 bg-neutral-400" />
                  {b}
                </li>
              ))}
            </ul>

            <p className="mt-4 font-mono text-xs text-neutral-500">{job.stack.join(' / ')}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
