import { education, certifications } from '../data/resume';
import { Section } from '../components/ui/Section';
import { ArrowUpRight } from '../components/ui/Icons';

export function Education() {
  return (
    <Section id="education" index="04" label="Education">
      <div className="space-y-6">
        {education.map((e) => (
          <div key={e.degree + e.school}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold text-neutral-950">
                {e.degree}
                <span className="font-normal text-neutral-500"> · {e.school}</span>
              </h3>
              <p className="font-mono text-xs text-neutral-500 tabular-nums">{e.period}</p>
            </div>
            {e.notes && <p className="mt-1.5 text-[15px] leading-relaxed text-neutral-600">{e.notes}</p>}
          </div>
        ))}
      </div>

      {certifications.length > 0 && (
        <div className="mt-10">
          <h3 className="font-mono text-[11px] tracking-[0.14em] text-neutral-400 uppercase">Certifications</h3>
          <ul className="mt-3 divide-y divide-neutral-200 border-y border-neutral-200">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-baseline justify-between gap-4 py-3 text-[15px]">
                <span className="text-neutral-900">
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noreferrer" className="link inline-flex items-center gap-1">
                      {c.name} <ArrowUpRight className="size-3.5" />
                    </a>
                  ) : (
                    c.name
                  )}
                  <span className="text-neutral-500"> · {c.issuer}</span>
                </span>
                <span className="font-mono text-xs text-neutral-500">{c.year}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
