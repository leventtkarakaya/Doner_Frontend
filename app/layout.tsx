import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
