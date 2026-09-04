export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__identity">
        <span className="footer-orb" aria-hidden="true">S</span>
        <span>© 2026 SAMMY CRYPTO</span>
      </div>

      <div className="site-footer__legal">
        <a href="/terms">Terms</a>
        <a href="/privacy">Privacy</a>
        <a href="/disclaimer">Disclaimer</a>
        <a href="/cookies">Cookies</a>
      </div>

      <div className="site-footer__links">
        <a href="https://x.com/samcryptto" target="_blank" rel="noreferrer">X / Twitter ↗</a>
        <a href="https://t.me/sammygrace110" target="_blank" rel="noreferrer">Telegram ↗</a>
      </div>
    </footer>
  );
}
