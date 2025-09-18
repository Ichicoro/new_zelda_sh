import type { Metadata } from "next";
import localFont from 'next/font/local'
import { Germania_One, Rosarivo } from "next/font/google";
import "./globals.css";
import Lair from "../public/lair.svg";
import Star from "@/public/ul_point.svg"

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

const SortsMillGoudy = localFont({
  src: [
    { path: "../public/fonts/sorts-mill/GoudySTM-webfont.woff" },
    // { path: "../public/fonts/sorts-mill/GoudySTM-Italic-webfont.woff" }
  ],
  weight: "400",
  style: "serif",
  variable: "--font-sorts-mill-goudy",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const spinnedStars = <><Star className="inline ml-0 w-3 h-4" /><Star className="inline ml-1 w-3 h-4 rotate-12" /><Star className="inline ml-1 w-3 h-4 rotate-[24deg]" /></>

  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#c3b7ab" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#241f1a" media="(prefers-color-scheme: dark)" />
        <script type="text/javascript" defer>
          {/* TODO: Fix */}
          {`document.querySelectorAll(".code-copybutton").forEach((button) => {
          button.addEventListener("click", async () => {
            console.log("copy button clicked");
            const code = button.nextElementSibling?.innerText;
            if (!code) return;
            await navigator.clipboard.writeText(code);
            button.innerText = "copied!";
            setTimeout(() => {
              button.innerText = "copy";
            }, 2000);
          })
        })`}
        </script>
      </head>
      <body
        className={`antialiased font-serif ${germania.className} ${rosarivo.className} ${BasteleurMoonlight.variable} ${BasteleurBold.variable} ${ChicagoFLF.className} ${SortsMillGoudy.className} flex justify-center`}
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
            <main className="flex flex-col gap-4 max-w-[calc(100vw_-_3rem)] lg:max-w-[33rem]">
              {children}
            </main>
            {/* <div className="w-[147px] hidden lg:block lg:mx-auto relative">
              <div className="lg:fixed mx-auto gap-5 flex flex-col">
                <div className="font-serif">
                  <h3 className="text-lg font-sans font-black">MY LINKS {spinnedStars}</h3>
                  <div className="">
                    <ul className="">
                      <li><a className="ms-0.5" href="https://bsky.app/profile/zelda.sh" target="_blank" rel="noreferrer">Bluesky</a></li>
                      <li><a className="ms-0.5" href="https://a.junimo.party/@zelda" target="_blank" rel="noreferrer">Mastodon</a></li>
                      <li><a className="ms-0.5" href="https://t.me/zezelda" target="_blank" rel="noreferrer">Telegram</a></li>
                    </ul>
                  </div>
                  <h3 className="text-lg font-sans font-black mt-5">MY FRIENDS {spinnedStars}</h3>
                  <div className="">
                    <ul className="">
                      <li><a className="ms-0.5" href="https://steffo.eu" target="_blank" rel="noreferrer">Steffo</a></li>
                      <li><a className="ms-0.5" href="https://fermitech.info" target="_blank" rel="noreferrer">Balu</a></li>
                      <li><a className="ms-0.5" href="https://gimbaro.dev" target="_blank" rel="noreferrer">Gimbaro</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </body>
    </html>
  );
}
