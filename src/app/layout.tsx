import type { Metadata } from "next";
import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "R2PQ — Rotate to Post-Quantum",
  description:
    "R2PQ scans your codebase for quantum-vulnerable cryptography, issues a Y2Q Risk Score, and delivers Sovereign Receipts backed by Merkle Root verification.",
  openGraph: {
    title: "R2PQ — Rotate to Post-Quantum",
    description:
      "Post-quantum cryptography scanner. Y2Q Risk Score · Sovereign Receipts · Merkle Roots.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${ibmPlexSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
