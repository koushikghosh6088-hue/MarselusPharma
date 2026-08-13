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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
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
        <div className="container">
          <nav className="nav-inner" aria-label="Main navigation">
            <Link href="/" className="nav-logo" aria-label="Marselus Pharmaceuticals Home">
              <span className="nav-logo-icon">M</span>
              <span>Marselus</span>
            </Link>

            <ul className="nav-links">
              <li><Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>Home</Link></li>
              <li><span className="nav-separator">/</span></li>
              <li><Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>About</Link></li>
              <li><span className="nav-separator">/</span></li>
              <li><Link href="/therapy-areas" className={`nav-link ${isActive("/therapy-areas") ? "active" : ""}`}>Therapy Areas</Link></li>
              <li><span className="nav-separator">/</span></li>
              <li 
                className={`nav-dropdown ${isDropdownOpen ? "open" : ""}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <Link href="/products" className={`nav-link ${isActive("/products") ? "active" : ""}`} aria-haspopup="true" aria-expanded={isDropdownOpen}>Products</Link>
                <div className="nav-dropdown-menu" role="menu">
                  <Link href="/products/artemes" className="nav-dropdown-item" role="menuitem">
                    <span className="dot dot--artemes"></span> ARTEMES
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
              <li><span className="nav-separator">/</span></li>
              <li><Link href="/science" className={`nav-link ${isActive("/science") ? "active" : ""}`}>Science</Link></li>
              <li><span className="nav-separator">/</span></li>
              <li><Link href="/careers" className={`nav-link ${isActive("/careers") ? "active" : ""}`}>Careers</Link></li>
              <li><span className="nav-separator">/</span></li>
              <li><Link href="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>Contact</Link></li>
            </ul>

            {/* Hamburger */}
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

      {/* Mobile drawer */}
      <div 
        className={`nav-mobile-overlay ${isMobileMenuOpen ? "active" : ""}`} 
        aria-hidden="true"
        onClick={closeMobileMenu}
      ></div>
      <div className={`nav-mobile-drawer ${isMobileMenuOpen ? "active" : ""}`} aria-hidden="true">
        <ul className="mobile-nav-links">
          <li><Link href="/" className={`mobile-nav-link ${isActive("/") ? "active" : ""}`} onClick={closeMobileMenu}>Home</Link></li>
          <li><Link href="/about" className={`mobile-nav-link ${isActive("/about") ? "active" : ""}`} onClick={closeMobileMenu}>About</Link></li>
          <li><Link href="/therapy-areas" className={`mobile-nav-link ${isActive("/therapy-areas") ? "active" : ""}`} onClick={closeMobileMenu}>Therapy Areas</Link></li>
          <li>
            <Link href="/products" className={`mobile-nav-link ${isActive("/products") ? "active" : ""}`} onClick={closeMobileMenu}>Products</Link>
            <ul className="mobile-nav-sub">
              <li><Link href="/products/artemes" onClick={closeMobileMenu}><span className="dot dot--artemes"></span> ARTEMES</Link></li>
              <li><Link href="/products/saranya" onClick={closeMobileMenu}><span className="dot dot--saranya"></span> SARANYA</Link></li>
              <li><Link href="/products/immunomars" onClick={closeMobileMenu}><span className="dot dot--immunomars"></span> IMMUNOMARS</Link></li>
              <li><Link href="/products/uv60k" onClick={closeMobileMenu}><span className="dot dot--uv60k"></span> UV 60K</Link></li>
            </ul>
          </li>
          <li><Link href="/science" className={`mobile-nav-link ${isActive("/science") ? "active" : ""}`} onClick={closeMobileMenu}>Science</Link></li>
          <li><Link href="/careers" className={`mobile-nav-link ${isActive("/careers") ? "active" : ""}`} onClick={closeMobileMenu}>Careers</Link></li>
          <li><Link href="/contact" className={`mobile-nav-link ${isActive("/contact") ? "active" : ""}`} onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
}
