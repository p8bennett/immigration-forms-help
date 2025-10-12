"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [language, setLanguage] = useState("en");

  // Load and detect language
  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang) setLanguage(savedLang);
    else if (navigator.language.startsWith("es")) {
      setLanguage("es");
      localStorage.setItem("language", "es");
    }
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth">
      {/* Language Switcher */}
      <div className="flex justify-end p-4">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="border border-gray-300 rounded-md px-3 py-1 text-sm font-emoji shadow-sm hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="en">🇺🇸 English</option>
          <option value="es">🇪🇸 Español</option>
        </select>
      </div>

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-center mt-10 px-6"
      >
        <h1 className="text-3xl font-bold mb-4 text-gray-900">
          {language === "en"
            ? "Immigration Forms Made Simple"
            : "Formularios de Inmigración Hechos Simples"}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === "en"
            ? "Simplify your U.S. immigration paperwork with step-by-step, plain-language explanations and helpful translations for major USCIS forms."
            : "Simplifica tu documentación de inmigración de EE. UU. con explicaciones paso a paso en lenguaje claro y traducciones útiles para los formularios principales de USCIS."}
        </p>

        <div className="mt-8">
          <a
            href="#forms"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            {language === "en" ? "Start Simplifying" : "Comienza a Simplificar"}
          </a>
        </div>
      </motion.section>

      {/* INFO SECTION */}
      <motion.section
        id="forms"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">
          {language === "en" ? "How It Works" : "Cómo Funciona"}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {language === "en"
            ? "Choose a USCIS form, and we’ll help you understand every part of it in plain English (or Spanish). Get translations, explanations, and tips — all in one place."
            : "Elige un formulario de USCIS y te ayudaremos a entender cada parte en lenguaje claro (en inglés o español). Obtén traducciones, explicaciones y consejos — todo en un solo lugar."}
        </p>
      </motion.section>
    </main>
  );
}
