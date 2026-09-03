"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  ["01", "Home", "/"],
  ["02", "Create", "/create"],
  ["03", "Work", "/work"],
  ["04", "Services", "/services"],
  ["05", "About", "/about"],
  ["06", "Contact", "/contact"],
] as const;

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Site navigation">
      <div className="menu-overlay__topline">
        <Link href="/" className="brand" onClick={onClose}>
          SammyCrypto<span>.</span>
        </Link>
        <button className="close-button" type="button" onClick={onClose} aria-label="Close menu">
          ×
        </button>
      </div>

      <nav className="menu-list" aria-label="Primary navigation">
        {routes.map(([number, label, href]) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`menu-item${active ? " menu-item--active" : ""}`}
            >
              <span className="menu-item__number">{number}</span>
              <span>{label}</span>
              <span className="menu-item__dot" aria-hidden="true" />
            </Link>
          );
        })}
      </nav>

      <div className="menu-overlay__contact">
        <p className="system-label">DIRECT CHANNELS</p>
        <a href="https://t.me/sammygrace110" target="_blank" rel="noreferrer">
          Telegram ↗
        </a>
        <a href="https://x.com/samcryptto" target="_blank" rel="noreferrer">
          X / Twitter ↗
        </a>
        <a href="mailto:Cryptocrewhub123@gmail.com">Email ↗</a>
      </div>
    </div>
  );
}
