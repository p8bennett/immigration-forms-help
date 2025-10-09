import Image from "next/image";

export default function AboutPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #4f46e5 0%, #818cf8 100%)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          background: "white",
          color: "#1e293b",
          maxWidth: "700px",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <Image
          src="https://www.usimmigrationformshelp.com/icon.png"
          alt="USImmigrationFormsHelp Logo"
          width={80}
          height={80}
          style={{ marginBottom: "20px", borderRadius: "12px" }}
        />
        <h1 style={{ fontSize: "2rem", marginBottom: "20px", color: "#4f46e5" }}>
          About USImmigrationFormsHelp
        </h1>
        <p style={{ lineHeight: 1.7, fontSize: "1.1rem", marginBottom: "30px" }}>
          USImmigrationFormsHelp is a plain-language guide designed to simplify
          complex USCIS immigration forms. We help individuals understand their
          paperwork before submitting it — with multilingual support and
          straightforward explanations.
        </p>
        <p style={{ lineHeight: 1.7, fontSize: "1.1rem", marginBottom: "30px" }}>
          Our goal is to make U.S. immigration documentation accessible and
          understandable for everyone. No legal jargon — just clarity and
          confidence.
        </p>
        <a
          href="/"
          style={{
            display: "inline-block",
            backgroundColor: "#4f46e5",
            color: "white",
            padding: "12px 30px",
            borderRadius: "8px",
            fontWeight: "bold",
            textDecoration: "none",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#4338ca")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4f46e5")
          }
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
