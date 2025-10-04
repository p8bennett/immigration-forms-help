import SubscribeButtons from "./components/SubscribeButtons";
import FormsGrid from "./components/FormsGrid";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Language switcher in top-right */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "2rem" }}>
        <LanguageSwitcher />
      </div>

      {/* Stripe plans */}
      <section style={{ marginBottom: "3rem" }}>
        <SubscribeButtons />
      </section>

      {/* Forms grid */}
      <section>
        <FormsGrid />
      </section>
    </main>
  );
}


