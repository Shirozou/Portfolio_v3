import { useState } from 'react';
import { profile } from '../data/resume';
import { Section } from '../components/ui/Section';
import { ResumeButton } from '../components/ui/ResumeButton';
import { Check, Copy, GitHub, LinkedIn } from '../components/ui/Icons';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Section id="contact" index="05" label="Contact">
      <p className="max-w-xl text-2xl leading-snug font-semibold tracking-tight text-neutral-950 sm:text-3xl">
        Hiring for a developer role? Email is the fastest way to reach me.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          {profile.email}
        </a>
        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-neutral-300 px-3.5 py-2.5 text-sm font-medium text-neutral-900 transition hover:border-neutral-950 print:hidden"
        >
          {copied ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4" />}
          {copied ? 'Copied' : 'Copy email'}
        </button>
      </div>

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-500">
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
        <li>
          <ResumeButton className="transition hover:text-neutral-950">CV</ResumeButton>
        </li>
      </ul>
    </Section>
  );
}
