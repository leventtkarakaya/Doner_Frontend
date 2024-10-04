import type { Metadata } from "next";
import Navbar from "./(pages)/components/Navbar";
import Footer from "./(pages)/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ağababa Döner",
  description:
    "Döner'in hizmetlerini ve hakkında bilgi edinmek için bu sayfaya girin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
