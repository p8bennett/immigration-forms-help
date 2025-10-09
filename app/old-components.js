import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>US Immigration Forms Help</h1>
      <LanguageSwitcher />
    </header>
  );
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
}
.title {
  font-size: 2rem;
  font-weight: 700;
}

"use client";
import styles from "./SubscribeButtons.module.css";

export default function SubscribeButtons() {
  const selectPlan = (planType: string) => {
    const plans: Record<string, string> = {
      solo: "https://buy.stripe.com/fZu3co5oWaXp7Lye3W",
      family: "https://buy.stripe.com/6oUbIU3gO8Ph9TGgc4",
    };
    if (plans[planType]) window.location.href = plans[planType];
  };

  return (
    <div className={styles.container}>
      <button className={styles.solo} onClick={() => selectPlan("solo")}>Solo Plan</button>
      <button className={styles.family} onClick={() => selectPlan("family")}>Family Plan</button>
    </div>
  );
}

.container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
button {
  padding: 1rem 2rem;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}
.solo {
  background: #4f46e5;
}
.solo:hover {
  background: #4338ca;
}
.family {
  background: #10b981;
}
.family:hover {
  background: #0f766e;
}

"use client";
import { useState } from "react";
import styles from "./FormsGrid.module.css";

export default function FormsGrid() {
  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  const forms = [
    { id: "I-130", icon: "👨‍👩‍👧", text: "Petition for Alien Relative - Family-based immigration petition" },
    { id: "I-485", icon: "🟢", text: "Application for Permanent Residence (Green Card)" },
    { id: "I-765", icon: "💼", text: "Application for Employment Authorization Document" },
    { id: "N-400", icon: "🎖️", text: "Application for Naturalization (U.S. Citizenship)" },
    { id: "I-864", icon: "💰", text: "Affidavit of Support Under Section 213A" },
    { id: "I-131", icon: "✈️", text: "Application for Travel Document - Advance Parole, Re-entry Permit, or Refugee Travel Document" },
    { id: "I-751", icon: "📋", text: "Petition to Remove Conditions on Permanent Residence - For conditional green card holders" },
  ];

  return (
    <div className={styles.grid}>
      {forms.map((form) => (
        <div
          key={form.id}
          className={`${styles.card} ${selectedForm === form.id ? styles.selected : ""}`}
          onClick={() => setSelectedForm(form.id)}
        >
          <div className={styles.icon}>{form.icon}</div>
          <h4 className={styles.id}>{form.id}</h4>
          <p className={styles.text}>{form.text}</p>
        </div>
      ))}
    </div>
  );
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
.card {
  background: linear-gradient(135deg, #fff, #f8fafc);
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
}
.card:hover {
  transform: scale(1.03);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.selected {
  background: linear-gradient(135deg, #eef2ff, #e0e7ff);
  border: 2px solid #4f46e5;
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.id {
  color: #1f2937;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 1.1rem;
}
.text {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.3rem;
}

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} USImmigrationFormsHelp.com • Not affiliated with USCIS or the US Government</p>
    </footer>
  );
}

.footer {
  text-align: center;
  padding: 2rem 0;
  border-top: 1px solid #e5e7eb;
  color: #6b7280;
}

