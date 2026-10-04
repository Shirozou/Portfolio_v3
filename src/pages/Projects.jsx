import { useState } from 'react';
import { projectsData } from '../data/projects';
import { Section } from '../components/ui/Section';
import { ProjectCard } from '../components/ui/ProjectCard';
import { ProjectModal } from '../components/ui/ProjectModal';

export function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  const project = openIndex === null ? null : projectsData[openIndex];
  const nextIndex = openIndex === null ? null : (openIndex + 1) % projectsData.length;
  const next = projectsData.length > 1 && nextIndex !== null ? projectsData[nextIndex] : null;

  return (
    <Section id="work" index="02" label="Selected work">
      <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-neutral-600 print:hidden">
        Tap a project for the case study: the problem, what I built, and the decisions behind it.
      </p>

      <ul className="grid gap-5 sm:grid-cols-2 print:grid-cols-1 print:gap-4">
        {projectsData.map((p, i) => (
          <li key={p.slug}>
            <ProjectCard project={p} onOpen={() => setOpenIndex(i)} />
          </li>
        ))}
      </ul>

      <ProjectModal
        project={project}
        next={next}
        onClose={() => setOpenIndex(null)}
        onNext={() => setOpenIndex(nextIndex)}
      />
    </Section>
  );
}
