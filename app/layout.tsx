import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "George Bonovas — Software Engineer",
  description:
    "CS student at NKUA. I build backend systems and ML pipelines. Looking for an internship.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "George Bonovas — Software Engineer",
    description:
      "CS student at NKUA. I build backend systems and ML pipelines. Looking for an internship.",
    siteName: "George Bonovas",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "George Bonovas — Software Engineer",
    description:
      "CS student at NKUA. I build backend systems and ML pipelines. Looking for an internship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full"><ScrollToTop />{children}</body>
    </html>
  );
}
