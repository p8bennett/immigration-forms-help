"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [language, setLanguage] = useState("en");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    if (storedLang) setLanguage(storedLang);

    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer-fade text-center py-8 mt-16 border-t border-gray-200 dark:border-gray-700 relative z-20 backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-inner">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm text-gray-700 dark:text-gray-300">
          <Link href="/">🏠 {language === "en" ? "Home" : "Inicio"}</Link>
          <Link href="/forms">📄 {language === "en" ? "Forms" : "Formularios"}</Link>
          <Link href="/contact">📬 {language === "en" ? "Contact" : "Contacto"}</Link>
          <Link href="/disclaimer">⚖️ {language === "en" ? "Disclaimer" : "Aviso Legal"}</Link>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
          {language === "en"
            ? "Not affiliated with USCIS or the U.S. Government."
            : "No estamos afiliados con USCIS ni con el Gobierno de EE. UU."}
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xs">
          © 2025 U.S. Immigration Forms Help
        </p>
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="scroll-top-btn fixed bottom-6 right-6 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-3 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          title={language === "en" ? "Back to top" : "Volver arriba"}
        >
          ↑
        </button>
      )}
    </footer>
  );
}
