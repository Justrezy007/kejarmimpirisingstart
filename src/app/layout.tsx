import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rising Start 2024",
  description: "Jadilah Vokalis di Konser Kejar Mimpi 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="night">
      <Analytics />
      <body className={inter.className}>
        
        <Navigation />
        {children}
        <Footer/>
        
      </body>
    </html>
  );
}
