import { ArrowRight } from './Icons';

const hostOf = (url) => {
  try {
    return new URL(url).host;
  } catch {
    return '';
  }
};

// Screenshot if one is provided, otherwise a quiet browser-frame placeholder.
export function ProjectPreview({ project, className = '' }) {
  const host = hostOf(project.live) || `${project.slug}.vercel.app`;

  return (
    <div className={`overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-neutral-200 bg-white px-3 py-2">
        <span className="size-2 rounded-full bg-neutral-200" />
        <span className="size-2 rounded-full bg-neutral-200" />
        <span className="size-2 rounded-full bg-neutral-200" />
        <span className="ml-2 truncate font-mono text-[11px] text-neutral-400">{host}</span>
      </div>
      {project.image ? (
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover object-top"
        />
      ) : (
        <div className="bg-dots grid aspect-[16/10] place-items-center">
          <span className="px-6 text-center text-2xl font-semibold tracking-tight text-neutral-300">
            {project.title}
          </span>
        </div>
      )}
    </div>
  );
}

export function ProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className="group flex h-full w-full cursor-pointer flex-col rounded-xl border border-neutral-200 bg-white p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-neutral-900 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 print:break-inside-avoid print:p-0 print:hover:translate-y-0"
    >
      <ProjectPreview project={project} className="print:hidden" />

      <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
        <p className="font-mono text-[11px] tracking-wide text-neutral-400 uppercase">
          {project.year} · {project.type}
        </p>
        <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-neutral-950">{project.title}</h3>
        <p className="mt-1.5 text-[15px] leading-relaxed text-neutral-600">{project.summary}</p>
        <p className="mt-4 font-mono text-xs text-neutral-500">{project.stack.join(' / ')}</p>

        <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-neutral-950 print:hidden">
          Read case study
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
        {project.live && (
          <span className="hidden pt-2 font-mono text-xs text-neutral-500 print:block">{project.live}</span>
        )}
      </div>
    </button>
  );
}
