import type { Metadata } from "next";
import "./styles/styles.css";
import { Toaster } from 'react-hot-toast';
import LayoutProvider from "@/layout-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LayoutProvider>
          {children}
        </LayoutProvider>
        <Toaster />
      </body>
    </html>
  );
}
