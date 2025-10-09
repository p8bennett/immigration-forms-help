"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
        color: "#1E293B",
        background: "linear-gradient(to bottom right, #E0ECFF, #FFFFFF)",
        minHeight: "100vh",
      }}
    >
      <Image
        src="/favicon.ico"
        alt="US Immigration Forms Help logo"
        width={64}
        height={64}
        style={{ marginBottom: "1rem" }}
      />
      <h1 style={{ fontSize: "2.2rem", color: "#3B82F6", fontWeight: "700" }}>
        About USImmigrationFormsHelp
      </h1>
      <p
        style={{
          maxWidth: "600px",
          margin: "1.5rem auto",
          lineHeight: "1.6",
          fontSize: "1.1rem",
        }}
      >
        🇺🇸 USImmigrationFormsHelp.com is an independent project that helps
        users understand and complete U.S. immigration forms in plain language.
        We are <strong>not affiliated with the U.S. government or USCIS</strong>.  
        Our goal is to make complex documents easier to navigate and understand.
      </p>
    </main>
  );
}
