import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import ScrollReveal from "./components/ScrollReveal";
import KeyboardNav from "./components/KeyboardNav";
import ConsoleGreeting from "./components/ConsoleGreeting";

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

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  colorScheme: "dark",
};

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
      <body className="min-h-full">
        <ScrollToTop />
        <ScrollReveal />
        <KeyboardNav />
        <ConsoleGreeting />
        {children}
      </body>
    </html>
  );
}
