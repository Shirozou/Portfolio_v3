import { useEffect, useRef } from 'react';
import { ProjectPreview } from './ProjectCard';
import { ArrowRight, ArrowUpRight, Close, GitHub } from './Icons';

function Block({ title, children }) {
  return (
    <div className="border-t border-neutral-200 pt-6">
      <h4 className="font-mono text-[11px] tracking-[0.14em] text-neutral-400 uppercase">{title}</h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}

// Native <dialog>: gives us focus trapping, Esc-to-close and a top layer for free.
export function ProjectModal({ project, next, onClose, onNext }) {
  const dialogRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
    bodyRef.current?.scrollTo({ top: 0 });
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      aria-labelledby="project-title"
      className="project-dialog m-auto max-h-[90dvh] w-full max-w-[calc(100%-2rem)] overflow-hidden rounded-2xl bg-white p-0 text-neutral-900 shadow-2xl backdrop:bg-neutral-950/40 backdrop:backdrop-blur-[2px] sm:max-w-3xl max-sm:mb-0 max-sm:max-h-[92dvh] max-sm:max-w-full max-sm:rounded-b-none print:hidden"
    >
      {project && (
        <div className="flex max-h-[inherit] flex-col">
          {/* Header */}
          <div className="border-b border-neutral-200 px-5 pt-5 pb-5 sm:px-8 sm:pt-7">
            <div className="flex items-start justify-between gap-4">
              <p className="font-mono text-[11px] tracking-wide text-neutral-400 uppercase">
                {project.year} · {project.type}
              </p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="-mt-1.5 -mr-1.5 cursor-pointer rounded-md p-1.5 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-950"
              >
                <Close className="size-5" />
              </button>
            </div>
            <h3 id="project-title" className="mt-1 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-neutral-600">{project.summary}</p>

            {(project.live || project.repo) && (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-950 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
                  >
                    Live site <ArrowUpRight className="size-4" />
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-300 px-3.5 py-2 text-sm font-medium text-neutral-900 transition hover:border-neutral-950"
                  >
                    <GitHub className="size-4" /> Source
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Body */}
          <div ref={bodyRef} className="flex-1 space-y-8 overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 sm:py-8">
            <ProjectPreview project={project} />

            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 sm:grid-cols-3">
              {[
                ['Role', project.role],
                ['Timeline', project.timeline],
                ['Stack', project.stack.slice(0, 3).join(', ') + (project.stack.length > 3 ? ' +' : '')],
              ].map(([term, value]) => (
                <div key={term} className="bg-white px-4 py-3">
                  <dt className="text-xs text-neutral-500">{term}</dt>
                  <dd className="mt-0.5 text-sm font-medium text-neutral-900">{value}</dd>
                </div>
              ))}
            </dl>

            <Block title="Overview">
              <p className="text-[15px] leading-relaxed text-neutral-700">{project.overview}</p>
            </Block>

            <Block title={project.builtTitle ?? 'What I built'}>
              <ul className="space-y-2.5">
                {project.built.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-neutral-700">
                    <span className="mt-[11px] h-px w-3 shrink-0 bg-neutral-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Block>

            {project.decisions?.length > 0 && (
              <Block title="Key decisions">
                <div className="space-y-4">
                  {project.decisions.map((d) => (
                    <div key={d.title}>
                      <p className="text-[15px] font-medium text-neutral-950">{d.title}</p>
                      <p className="mt-1 text-[15px] leading-relaxed text-neutral-600">{d.detail}</p>
                    </div>
                  ))}
                </div>
              </Block>
            )}

            {project.results?.length > 0 && (
              <Block title="Results">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {project.results.map((r) => (
                    <div key={r.label} className="rounded-lg bg-neutral-50 px-4 py-3">
                      <p className="text-xl font-semibold tracking-tight text-neutral-950">{r.value}</p>
                      <p className="mt-0.5 text-xs text-neutral-500">{r.label}</p>
                    </div>
                  ))}
                </div>
              </Block>
            )}

            <Block title="Stack">
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-md border border-neutral-200 px-2.5 py-1 text-sm text-neutral-700">
                    {tech}
                  </li>
                ))}
              </ul>
            </Block>
          </div>

          {/* Footer */}
          {next && (
            <button
              type="button"
              onClick={onNext}
              className="group flex cursor-pointer items-center justify-between gap-4 border-t border-neutral-200 px-5 py-4 text-left transition hover:bg-neutral-50 sm:px-8"
            >
              <span className="min-w-0">
                <span className="block text-xs text-neutral-500">Next project</span>
                <span className="block truncate text-sm font-medium text-neutral-950">{next.title}</span>
              </span>
              <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      )}
    </dialog>
  );
}
