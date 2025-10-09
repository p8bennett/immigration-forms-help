export default function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        marginTop: "2rem",
        backgroundColor: "#f3f4f6",
        color: "#555",
      }}
    >
      <p>© {new Date().getFullYear()} USImmigrationFormsHelp.com</p>
    </footer>
  );
}
