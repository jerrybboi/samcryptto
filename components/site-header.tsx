"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MenuOverlay } from "@/components/menu-overlay";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  }

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Sammy Crypto home">
          SammyCrypto<span>.</span>
        </Link>
        <div className="site-header__actions">
          <ThemeToggle />
          <button
            ref={menuButtonRef}
            className="menu-button"
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-haspopup="dialog"
          >
            MENU
          </button>
        </div>
      </header>
      <MenuOverlay open={menuOpen} onClose={closeMenu} />
    </>
  );
}
