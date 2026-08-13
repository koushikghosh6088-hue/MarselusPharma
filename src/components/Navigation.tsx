"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className={`nav-header ${isScrolled ? "scrolled" : ""}`} id="main-nav">
        <div className="container" style={{ maxWidth: "1280px" }}>
          <nav className="nav-inner" aria-label="Main navigation">
            {/* Brand Logo */}
            <Link href="/" className="nav-logo" aria-label="Marselus Pharmaceuticals Home" onClick={closeMobileMenu}>
              <div className="nav-logo-icon-wrap">
                <span className="nav-logo-icon">M</span>
              </div>
              <span className="nav-logo-text">Marselus</span>
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="nav-links">
              <li>
                <Link href="/" className={`nav-link-pill ${isActive("/") ? "active" : ""}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={`nav-link-pill ${isActive("/about") ? "active" : ""}`}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/therapy-areas" className={`nav-link-pill ${isActive("/therapy-areas") ? "active" : ""}`}>
                  Therapy Areas
                </Link>
              </li>
              <li
                className={`nav-dropdown ${isDropdownOpen ? "open" : ""}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link href="/products" className={`nav-link-pill ${isActive("/products") ? "active" : ""}`} aria-haspopup="true" aria-expanded={isDropdownOpen}>
                  Products <span className="nav-arrow-down">▾</span>
                </Link>
                <div className="nav-dropdown-menu" role="menu">
                  <Link href="/products/artemes" className="nav-dropdown-item" role="menuitem">
                    <span className="dot dot--artemes"></span> ARTEMES 1.2g
                  </Link>
                  <Link href="/products/saranya" className="nav-dropdown-item" role="menuitem">
                    <span className="dot dot--saranya"></span> SARANYA
                  </Link>
                  <Link href="/products/immunomars" className="nav-dropdown-item" role="menuitem">
                    <span className="dot dot--immunomars"></span> IMMUNOMARS
                  </Link>
                  <Link href="/products/uv60k" className="nav-dropdown-item" role="menuitem">
                    <span className="dot dot--uv60k"></span> UV 60K
                  </Link>
                </div>
              </li>
              <li>
                <Link href="/science" className={`nav-link-pill ${isActive("/science") ? "active" : ""}`}>
                  Science
                </Link>
              </li>
              <li>
                <Link href="/careers" className={`nav-link-pill ${isActive("/careers") ? "active" : ""}`}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`nav-link-pill ${isActive("/contact") ? "active" : ""}`}>
                  Contact
                </Link>
              </li>
            </ul>

            {/* Prescriber Portal CTA (Desktop) */}
            <div className="nav-actions-desktop">
              <Link href="/contact" className="nav-portal-btn">
                <span className="portal-dot"></span> Prescriber Portal →
              </Link>
            </div>

            {/* Hamburger Button (Mobile) */}
            <button
              className={`nav-hamburger ${isMobileMenuOpen ? "active" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span></span><span></span><span></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`nav-mobile-overlay ${isMobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      ></div>

      {/* Mobile Right Drawer */}
      <div className={`nav-mobile-drawer ${isMobileMenuOpen ? "active" : ""}`}>
        <div className="mobile-drawer-header">
          <Link href="/" className="nav-logo" onClick={closeMobileMenu}>
            <div className="nav-logo-icon-wrap">
              <span className="nav-logo-icon">M</span>
            </div>
            <span className="nav-logo-text">Marselus</span>
          </Link>
          <button className="mobile-drawer-close" onClick={closeMobileMenu} aria-label="Close menu">
            ✕
          </button>
        </div>

        <ul className="mobile-nav-links">
          <li><Link href="/" className={`mobile-nav-link ${isActive("/") ? "active" : ""}`} onClick={closeMobileMenu}>Home</Link></li>
          <li><Link href="/about" className={`mobile-nav-link ${isActive("/about") ? "active" : ""}`} onClick={closeMobileMenu}>About Us</Link></li>
          <li><Link href="/therapy-areas" className={`mobile-nav-link ${isActive("/therapy-areas") ? "active" : ""}`} onClick={closeMobileMenu}>Therapy Areas</Link></li>
          <li>
            <Link href="/products" className={`mobile-nav-link ${isActive("/products") ? "active" : ""}`} onClick={closeMobileMenu}>Products</Link>
            <ul className="mobile-nav-sub">
              <li><Link href="/products/artemes" onClick={closeMobileMenu}><span className="dot dot--artemes"></span> ARTEMES 1.2g</Link></li>
              <li><Link href="/products/saranya" onClick={closeMobileMenu}><span className="dot dot--saranya"></span> SARANYA</Link></li>
              <li><Link href="/products/immunomars" onClick={closeMobileMenu}><span className="dot dot--immunomars"></span> IMMUNOMARS</Link></li>
              <li><Link href="/products/uv60k" onClick={closeMobileMenu}><span className="dot dot--uv60k"></span> UV 60K</Link></li>
            </ul>
          </li>
          <li><Link href="/science" className={`mobile-nav-link ${isActive("/science") ? "active" : ""}`} onClick={closeMobileMenu}>Science &amp; Resources</Link></li>
          <li><Link href="/careers" className={`mobile-nav-link ${isActive("/careers") ? "active" : ""}`} onClick={closeMobileMenu}>Careers</Link></li>
          <li><Link href="/contact" className={`mobile-nav-link ${isActive("/contact") ? "active" : ""}`} onClick={closeMobileMenu}>Contact</Link></li>
        </ul>

        <div className="mobile-drawer-footer">
          <Link href="/contact" className="nav-portal-btn" style={{ width: "100%", justifyContent: "center" }} onClick={closeMobileMenu}>
            <span className="portal-dot"></span> Prescriber Portal →
          </Link>
        </div>
      </div>
    </>
  );
}
