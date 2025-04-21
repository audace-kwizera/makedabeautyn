import type { Metadata } from "next";
import "./globals.css";
import "./styles/styles.css";

export const metadata: Metadata = {
  title: "Makeda Beauty",
  description: "Revitalisez votre esprit et rafraîchissez votre âme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
