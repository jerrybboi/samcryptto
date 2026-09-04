"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MenuOverlay } from "@/components/menu-overlay";
import { ThemeToggle } from "@/components/theme-toggle";
import styles from "./site-header.module.css";

const desktopRoutes = [
  ["Create", "/create"],
  ["Work", "/work"],
  ["Services", "/services"],
  ["About", "/about"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
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
        <button
          ref={menuButtonRef}
          className={`menu-button ${styles.headerMenu}`}
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-haspopup="dialog"
        >
          MENU
        </button>

        <Link className="brand" href="/" aria-label="Sammy Crypto home">
          SammyCrypto<span>.</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {desktopRoutes.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`desktop-nav__link${active ? " desktop-nav__link--active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className={`desktop-nav__contact${pathname === "/contact" ? " desktop-nav__contact--active" : ""}`}
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />
        </div>
      </header>
      <MenuOverlay open={menuOpen} onClose={closeMenu} />
    </>
  );
}
