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
        <h1 style={{ fontSize: "2rem", marginBottom: "20px", color: "#4f46e5" }}>
          About USImmigrationFormsHelp
        </h1>
        <p style={{ lineHeight: 1.7, fontSize: "1.1rem", marginBottom: "30px" }}>
          USImmigrationFormsHelp is designed to simplify the complex USCIS
          forms process. We provide plain-language explanations, multilingual
          support, and easy-to-follow guides to help individuals understand
          their documents before submission.
        </p>
        <p style={{ lineHeight: 1.7, fontSize: "1.1rem", marginBottom: "30px" }}>
          Our goal is to make U.S. immigration forms less intimidating,
          empowering you to complete them confidently without legal jargon.
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
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#4338ca")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4f46e5")}
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
