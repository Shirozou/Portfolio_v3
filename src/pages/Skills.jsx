import { skills } from '../data/resume';
import { Section } from '../components/ui/Section';

const Dot = ({ core }) => (
  <span
    className={`size-1.5 shrink-0 rounded-full ${core ? 'bg-neutral-950' : 'border border-neutral-400'}`}
    aria-hidden
  />
);

export function Skills() {
  return (
    <Section id="skills" index="03" label="Skills">
      <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-500">
        <span className="inline-flex items-center gap-2"><Dot core /> Proficient: use daily, ready to be interviewed on</span>
        <span className="inline-flex items-center gap-2"><Dot /> Working knowledge: shipped with it</span>
      </div>

      <div className="divide-y divide-neutral-200 border-y border-neutral-200">
        {skills.map((group) => (
          <div key={group.category} className="grid gap-3 py-4 sm:grid-cols-[150px_1fr] sm:gap-6">
            <h3 className="pt-1 text-sm text-neutral-500">{group.category}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((s) => {
                const core = s.level === 'core';
                return (
                  <li
                    key={s.name}
                    className={`inline-flex items-center gap-2 rounded-md border px-2.5 py-1 text-sm ${
                      core
                        ? 'border-neutral-200 bg-neutral-50 text-neutral-950'
                        : 'border-dashed border-neutral-300 text-neutral-500'
                    }`}
                  >
                    <Dot core={core} />
                    {s.name}
                    <span className="sr-only">({core ? 'proficient' : 'working knowledge'})</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
