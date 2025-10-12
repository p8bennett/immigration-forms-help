import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactButton from "./components/ContactButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "U.S. Immigration Forms Help | Simplify USCIS Forms",
  description:
    "Plain-language immigration form explanations and bilingual guidance. Not affiliated with the U.S. Government or USCIS.",
  openGraph: {
    title: "U.S. Immigration Forms Help",
    description:
      "Plain-language immigration form explanations and bilingual guidance.",
    url: "https://usimmigrationformshelp.com",
    siteName: "U.S. Immigration Forms Help",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} fade-page bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}
      >
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <ContactButton />
      </body>
    </html>
  );
}
