import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SameCrew — Therapy that gets it.",
  description:
    "AI-first emotional support for people who share your context. New dads. Immigrants. First-time founders.",
  openGraph: {
    title: "SameCrew — Therapy that gets it.",
    description:
      "AI-first emotional support for people who share your context. New dads. Immigrants. First-time founders.",
    images: [
      {
        url: "https://waitlist-api-sigma.vercel.app/api/og?title=SameCrew&accent=teal&category=Mental%20health",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://waitlist-api-sigma.vercel.app/api/og?title=SameCrew&accent=teal&category=Mental%20health",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
