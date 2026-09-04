"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="site-menu"
      ref={dialogRef}
      className="menu-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className="menu-overlay__topline">
        <Link href="/" className="brand" onClick={onClose} aria-label="Sammy Crypto home">
          SammyCrypto<span>.</span>
        </Link>
        <button
          ref={closeButtonRef}
          className="close-button"
          type="button"
          onClick={onClose}
          aria-label="Close menu"
        >
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
              aria-current={active ? "page" : undefined}
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
