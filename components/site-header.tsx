"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuOverlay } from "@/components/menu-overlay";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Sammy Crypt home">
          SammyCrypto<span>.</span>
        </Link>
        <div className="site-header__actions">
          <ThemeToggle />
          <button className="menu-button" type="button" onClick={() => setMenuOpen(true)}>
            MENU
          </button>
        </div>
      </header>
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
