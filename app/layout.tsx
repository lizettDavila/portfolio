import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lizett Enriquez - Portfolio",
  description: "This is my portfolio website using next app",
};


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
