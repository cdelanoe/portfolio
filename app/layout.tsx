import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Anek_Telugu } from "next/font/google";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Charlène Delanoë﹒Portfolio",
  description:
    "Moi c'est Charlène, je suis développeuse web spécialisée en JavaScript et React. Je cherche constamment à apprendre de nouvelles choses et j'aime trouver la solution à des problèmes de façon simple et efficace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          "h-full bg-background font-sans text-foreground",
        )}
      >
        {children}
      </body>
    </html>
  );
}
