type PageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageShell({ eyebrow, title, description }: PageShellProps) {
  return (
    <section className="page-shell">
      <div className="page-shell__grid" aria-hidden="true" />
      <div className="page-shell__content">
        <p className="system-label">{eyebrow}</p>
        <h1 className="display-title">{title}</h1>
        <p className="display-copy">{description}</p>
        <div className="foundation-card">
          <span className="foundation-card__status">SYSTEM / FOUNDATION</span>
          <p>Global navigation, responsive layout, typography, themes and shared components are active.</p>
        </div>
      </div>
    </section>
  );
}
