import type { Metadata } from "next";
import { Inter,Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({ subsets: ["latin"],weight: ["300","700"] });
export const metadata: Metadata = {
  title: "DUKA STUDIO",
  description: "DUKA STUDIO by CCOKI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
