import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./navbar/Navbar";
import { Hero } from "./home/hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "quantum flux | software developer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-y-hidden font-vt text-text pb-9">
          <Navbar />
          <Hero />
          {children}
        </div>
      </body>
    </html>
  );
}
