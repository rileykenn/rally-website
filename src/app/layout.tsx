import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rally Light Pods Australia | Balance Motorsport",
  description:
    "Premium fibreglass rally light pods for Subaru, Mitsubishi EVO, Toyota, Porsche, and more. Hand crafted in Australia by Balance Motorsport Australia.",
  keywords:
    "rally light pods, rally lamps, fibreglass pods, Wesem lamps, motorsport lighting, rally car lights, Subaru rally pods, EVO rally pods",
  openGraph: {
    title: "Rally Light Pods Australia",
    description:
      "Discover the extra lighting potential with our custom rally light pods. Hand crafted in Australia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
