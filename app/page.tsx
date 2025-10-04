import SubscribeButtons from "./components/SubscribeButtons";
import FormsGrid from "./components/FormsGrid";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", color: "#1f2937", padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      
      {/* Header with site title + language dropdown */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "700" }}>US Immigration Forms Help</h1>
        <LanguageSwitcher />
      </header>

      {/* Stripe subscription plans */}
      <section style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Choose Your Plan</h2>
        <SubscribeButtons />
      </section>

      {/* Forms grid */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem" }}>Popular Forms</h2>
        <FormsGrid />
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "2rem 0", borderTop: "1px solid #e5e7eb", color: "#6b7280" }}>
        <p>© {new Date().getFullYear()} USImmigrationFormsHelp.com • Not affiliated with USCIS or the US Government</p>
      </footer>
    </main>
  );
}




