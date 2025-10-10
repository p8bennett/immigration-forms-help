"use client";
import { motion } from "framer-motion";
import { fadeSlideUp } from "./animations";

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeSlideUp}
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
        background: "linear-gradient(180deg, #EEF2FF, #FFFFFF)",
      }}
    >
      <h1
        style={{
          fontSize: "2.4rem",
          fontWeight: "700",
          color: "#2A2A2A",
          marginBottom: "1rem",
        }}
      >
        Immigration Forms Made Simple 🇺🇸
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          color: "#4A4A4A",
          maxWidth: "600px",
          margin: "0 auto 2rem auto",
        }}
      >
        Get plain-language explanations for USCIS forms in multiple languages.
      </p>
      <motion.a
        href="/forms"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(74, 96, 227, 0.3)" }}
        style={{
          display: "inline-block",
          background: "#4A60E3",
          color: "white",
          padding: "0.8rem 1.6rem",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Start Now
      </motion.a>
    </motion.section>
  );
}
