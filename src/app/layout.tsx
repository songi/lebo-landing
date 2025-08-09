import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LEBO - Der revolutionäre KI-Tutor für Bestnoten in Mathe",
  description: "Die weltweit erste intelligente Lernplattform, die mit dir wächst und dich zum Abitur-Erfolg führt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
