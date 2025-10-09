import Image from "next/image";
import logo from "@/public/favicon.ico"; // or replace with your logo path

export default function Header() {
  return (
    <header
      style={{
        textAlign: "center",
        background: "linear-gradient(90deg, #4A60E3, #7B7FF6)",
        color: "white",
        padding: "1.5rem 0",
      }}
    >
      <Image
        src={logo}
        alt="USImmigrationFormsHelp Logo"
        width={48}
        height={48}
        style={{ borderRadius: "8px" }}
      />
      <h1 style={{ fontSize: "1.8rem", margin: "0.5rem 0 0" }}>
        USImmigrationFormsHelp.com
      </h1>
      <p style={{ marginTop: "0.5rem", fontSize: "1rem" }}>
        Immigration Forms Made Simple 🇺🇸
      </p>
    </header>
  );
}

export default function Header() {
  return (
    <header
      style={{
        textAlign: "center",
        background: "linear-gradient(90deg, #4A60E3, #7B7FF6)",
        color: "white",
        padding: "1.5rem 0",
      }}
    >
      <h1 style={{ fontSize: "1.8rem", margin: 0 }}>USImmigrationFormsHelp.com</h1>
      <p style={{ marginTop: "0.5rem", fontSize: "1rem" }}>
        Immigration Forms Made Simple 🇺🇸
      </p>
    </header>
  );
}
