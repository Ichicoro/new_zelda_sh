import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Germania_One, Rosarivo } from "next/font/google";
import "./globals.css";
import Lair from "../public/lair.svg";

const germania = Germania_One({
  weight: "400",
  subsets: ["latin"],
})

const rosarivo = Rosarivo({
  weight: "400",
  subsets: ["latin"],
});

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
      <head>
        <meta name="darkreader-lock" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#c3b7ab" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#241f1a" media="(prefers-color-scheme: dark)" />
      </head>
      <body
        className={`antialiased font-serif ${germania.className} ${rosarivo.className} ${BasteleurMoonlight.variable} ${BasteleurBold.variable} flex justify-center`}
      >
        <div className="">
          <div className="flex flex-col md:flex-row w-full my-8 gap-5 md:gap-14 items-start">
            <div className="w-[147px] mx-auto relative"> {/* mb-8 sm:mb-0 sm:mr-14 */}
              <div className="md:fixed mx-auto gap-5 flex flex-col">
                <Lair className="w-[147px]" />
                {/* <Header showTitle={false} activePath="blog" /> */}
              </div>
            </div>
            <main className="flex flex-col gap-4 max-w-[calc(100vw_-_3rem)] md:max-w-[33rem]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
