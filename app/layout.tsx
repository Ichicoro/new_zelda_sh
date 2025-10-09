import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Germania_One, Rosarivo } from "next/font/google";
import "./globals.css";
import Lair from "../public/lair.svg";
import clsx from "classnames";

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

const ChicagoFLF = localFont({
  src: "../public/fonts/ChicagoFLF.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-chicago",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const spinnedStars = <><Star className="inline ml-0 w-3 h-4" /><Star className="inline ml-1 w-3 h-4 rotate-12" /><Star className="inline ml-1 w-3 h-4 rotate-[24deg]" /></>
  // const headerList = headers();
  // const pathname = (await headerList).get("x-current-path");
  // console.log(pathname);

  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#c3b7ab" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#241f1a" media="(prefers-color-scheme: dark)" />
        <script type="text/javascript" defer>
          {/* TODO: Fix */}
          {`
            document.addEventListener('DOMContentLoaded', () => {
              document.body.addEventListener("click", async () => {
                if (event.target.classList.contains("code-copybutton")) {
                  const button = event.target;
                  console.log("copy button clicked");
                  const code = button.nextElementSibling?.innerText;
                  if (!code) return;
                  await navigator.clipboard.writeText(code);
                  button.innerText = "copied!";
                  setTimeout(() => {
                    button.innerText = "copy";
                  }, 2000);
                }
              })
            });
          `}
        </script>
      </head>
      <body
        className={`antialiased font-serif ${germania.className} ${rosarivo.className} ${BasteleurMoonlight.variable} ${BasteleurBold.variable} ${ChicagoFLF.className} flex justify-center`}
      >
        <div className="">
          <div className="flex flex-col lg:flex-row w-full my-8 gap-5 lg:gap-14 items-start">
            <div className="w-[147px] mx-auto relative"> {/* mb-8 sm:mb-0 sm:mr-14 */}
              <div className="lg:fixed mx-auto gap-5 flex flex-col">
                <Lair className="w-[147px]" />
                <div>
                  <h3 className="text-lg font-chicago font-black"></h3>
                </div>
                {/* <Header showTitle={false} activePath="blog" /> */}
              </div>
            </div>
            <main className={clsx("flex flex-col gap-4 max-w-[calc(100vw_-_3rem)]", {
              "lg:max-w-[33rem]": true,
              "xl:max-w-[40rem]": true,
            })}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
