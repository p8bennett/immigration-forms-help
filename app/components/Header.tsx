"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "linear-gradient(90deg, #4A60E3, #7B7FF6)",
        color: "white",
        padding: "1.5rem 0",
      }}
    >
      <Image
        src="/favicon.png"
        alt="USImmigrationFormsHelp Logo"
        width={64}
        height={64}
        style={{ borderRadius: "8px", marginBottom: "0.5rem" }}
      />
      <h1
        style={{
          fontSize: "1.8rem",
          margin: "0.25rem 0",
          lineHeight: "1.3",
        }}
      >
        USImmigrationFormsHelp.com
      </h1>
      <p style={{ fontSize: "1rem", marginTop: "0.25rem" }}>
        Immigration Forms Made Simple 🇺🇸
      </p>
      <style jsx>{`
        @media (max-width: 600px) {
          header {
            padding: 1rem 0.5rem;
          }
          h1 {
            font-size: 1.4rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </header>
  );
}
