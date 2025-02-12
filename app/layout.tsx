import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";

export const metadata: Metadata = {
  title: "zelda.sh",
  description: "hey :)",
};

const BasteleurBold = localFont({
  src: "../public/fonts/basteleur/Basteleur-Bold.woff",
  weight: "400",
  style: "sans",
  variable: "--font-basteleur-bold",
});

const BasteleurMoonlight = localFont({
  src: "../public/fonts/basteleur/Basteleur-Moonlight.woff",
  weight: "400",
  style: "serif",
  variable: "--font-basteleur-moonlight",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-[#c3b7ab] text-[#3f3830] font-serif ${BasteleurMoonlight.variable} ${BasteleurBold.variable}`}
      >
        <div className="max-w-[701px] w-full mx-auto px-2">
          {children}
        </div>
      </body>
    </html>
  );
}
