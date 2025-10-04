import Header from "./components/Header";
import SubscribeButtons from "./components/SubscribeButtons";
import FormsGrid from "./components/FormsGrid";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", color: "#1f2937", padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <Header />
      <section style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Choose Your Plan</h2>
        <SubscribeButtons />
      </section>
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1.5rem" }}>Popular Forms</h2>
        <FormsGrid />
      </section>
      <Footer />
    </main>
  );
}







