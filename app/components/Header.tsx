"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [language, setLanguage] = useState("en");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    const storedTheme = localStorage.getItem("theme");
    if (storedLang) setLanguage(storedLang);
    if (storedTheme === "dark") setDarkMode(true);

    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out 
      ${isScrolled 
        ? "backdrop-blur-md bg-gradient-to-r from-blue-800/80 to-blue-600/80 shadow-md py-2"
        : "bg-gradient-to-r from-blue-900 to-blue-700 py-4"}
      animate-fade-slide`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3 animate-logo-fade">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-white text-lg font-bold tracking-wide">
            USImmigrationFormsHelp.com
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-white text-sm font-medium">
          {[
            { href: "/", label: language === "en" ? "Home" : "Inicio" },
            { href: "/forms", label: language === "en" ? "Forms" : "Formularios" },
            { href: "/languages", label: language === "en" ? "Languages" : "Idiomas" },
            { href: "/plans", label: language === "en" ? "Plans" : "Planes" },
            { href: "/contact", label: language === "en" ? "Contact" : "Contacto" },
            { href: "/disclosures", label: language === "en" ? "Disclaimer" : "Aviso Legal" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${
                pathname === link.href ? "active-link" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Toggles */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="toggle-btn"
              title="Toggle Theme"
            >
              {darkMode ? "🌙" : "🌞"}
            </button>
            <button
              onClick={toggleLanguage}
              className="toggle-btn"
              title="Switch Language"
            >
              {language === "en" ? "🇺🇸 EN" : "🇪🇸 ES"}
            </button>
          </div>
        </nav>

        {/* Mobile */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 bg-blue-800/95 backdrop-blur-md rounded-lg mx-4 p-4 text-white space-y-3">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/forms" onClick={toggleMenu}>{language === "en" ? "Forms" : "Formularios"}</Link>
          <Link href="/languages" onClick={toggleMenu}>{language === "en" ? "Languages" : "Idiomas"}</Link>
          <Link href="/plans" onClick={toggleMenu}>{language === "en" ? "Plans" : "Planes"}</Link>
          <Link href="/contact" onClick={toggleMenu}>{language === "en" ? "Contact" : "Contacto"}</Link>
          <Link href="/disclosures" onClick={toggleMenu}>{language === "en" ? "Disclaimer" : "Aviso Legal"}</Link>
          <div className="flex justify-between pt-3">
            <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? "🌙" : "🌞"}</button>
            <button onClick={toggleLanguage}>{language === "en" ? "🇺🇸 EN" : "🇪🇸 ES"}</button>
          </div>
        </div>
      )}
    </header>
  );
}
