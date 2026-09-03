export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__identity">
        <span className="footer-orb" aria-hidden="true">S</span>
        <span>© 2026 SAMMY CRYPT</span>
      </div>

      <div className="site-footer__legal" aria-label="Legal links pending final content">
        <span>Terms</span>
        <span>Privacy</span>
        <span>Disclaimer</span>
        <span>Cookies</span>
      </div>

      <div className="site-footer__links">
        <a href="https://x.com/samcryptto" target="_blank" rel="noreferrer">X / Twitter ↗</a>
        <a href="https://t.me/sammygrace110" target="_blank" rel="noreferrer">Telegram ↗</a>
      </div>
    </footer>
  );
}
