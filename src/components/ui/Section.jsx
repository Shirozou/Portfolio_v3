export function Section({ id, index, label, children }) {
  return (
    <section
      id={id}
      className="reveal-on-scroll scroll-mt-14 border-t border-neutral-200 py-16 sm:py-20 print:break-inside-avoid-page print:py-6"
    >
      <div className="grid gap-y-8 md:grid-cols-[168px_1fr] md:gap-x-12 print:grid-cols-[120px_1fr] print:gap-x-8">
        <div className="md:sticky md:top-24 md:self-start">
          <p className="font-mono text-[11px] tracking-[0.14em] text-neutral-400 uppercase">{index}</p>
          <h2 className="mt-1 text-sm font-semibold text-neutral-950">{label}</h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
