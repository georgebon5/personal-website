import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["700", "800"],
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
  },
  openGraph: {
    title: "George Bonovas — Software Engineer",
    description:
      "CS student at NKUA. I build backend systems and ML pipelines. Looking for an internship.",
    url: "https://georgebon5.github.io/mysite",
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
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full"><ScrollToTop />{children}</body>
    </html>
  );
}
