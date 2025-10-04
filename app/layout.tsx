// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Immigration Forms Help",
  description: "Simplify U.S. immigration forms with plain-language guides and helpful tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          backgroundColor: "#f9fafb",
          color: "#111827",
        }}
      >
        {/* Site Header */}
        <header
          style={{
            width: "100%",
            padding: "1rem 2rem",
            background: "white",
            borderBottom: "1px solid #e5e7eb",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <h2 style={{ fontWeight: 700, color: "#4f46e5" }}>
            Immigration Forms Help
          </h2>
          <nav style={{ display: "flex", gap: "1.5rem" }}>
            <a href="/" style={{ color: "#374151", textDecoration: "none" }}>
              Home
            </a>
            <a href="/blog" style={{ color: "#374151", textDecoration: "none" }}>
              Blog
            </a>
            <a
              href="/disclosures"
              style={{ color: "#374151", textDecoration: "none" }}
            >
              Disclosures
            </a>
          </nav>
        </header>

        {/* Page Content */}
        <main>{children}</main>

        {/* Site Footer */}
        <footer
          style={{
            marginTop: "4rem",
            padding: "2rem",
            background: "#f3f4f6",
            textAlign: "center",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <p style={{ color: "#6b7280" }}>
            © {new Date().getFullYear()} Immigration Forms Help. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}

