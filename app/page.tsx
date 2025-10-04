// app/page.tsx
import SubscribeButtons from "./components/SubscribeButtons";
import FormsGrid from "./components/FormsGrid";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef2ff, #e0e7ff)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, color: "#1f2937" }}>
        Immigration Forms Made Simple
      </h1>
      <p style={{ marginTop: "0.5rem", color: "#6b7280" }}>
        Pick a form, choose a plan, and get started.
      </p>

      {/* Language Switcher */}
      <div style={{ marginTop: "1rem" }}>
        <LanguageSwitcher />
      </div>

      {/* Form Grid */}
      <section style={{ marginTop: "2rem", maxWidth: "900px", width: "100%" }}>
        <FormsGrid />
      </section>

      {/* Stripe Subscribe Buttons */}
      <section style={{ marginTop: "3rem" }}>
        <SubscribeButtons />
      </section>
    </div>
  );
}

