import { profile } from '../../data/resume';
import { Download } from './Icons';

// Downloads the PDF when profile.resumeUrl is set; otherwise prints the page (which has a print layout).
export function ResumeButton({ className = '', children = 'Download CV' }) {
  const content = (
    <>
      <Download className="size-4" />
      {children}
    </>
  );
  const classes = `inline-flex items-center gap-2 cursor-pointer print:hidden ${className}`;

  if (profile.resumeUrl) {
    return (
      <a href={profile.resumeUrl} download className={classes}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={() => window.print()} className={classes}>
      {content}
    </button>
  );
}
