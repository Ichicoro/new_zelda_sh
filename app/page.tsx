import Lair from "../public/lair.svg"
import Image from "next/image";
import { Germania_One } from "next/font/google";

const germania = Germania_One({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row w-full mt-8 gap-14 items-start">
      <Image src={Lair} alt="Lair" className="w-[147px]" />
      <main className="flex flex-col gap-4">
        <div>
          <h1 className="font-sans text-5xl leading-tight">ZELDA&apos;S LAIR</h1>
          <div className={`${germania.className} text-2xl flex flex-col`}>
            <a className="cursor-pointer ">About</a>
            <a className="cursor-pointer opacity-75">Projects</a>
            <a className="cursor-not-allowed opacity-75">Blog</a>
          </div>
        </div>
        <div className="pt-2.5 flex flex-col gap-3">
          <h1 className="font-sans text-4xl">ABOUT</h1>
          <p className="text-lg">
            Greetings, weary traveler! I’m <em>Zelda</em>, a 25-years-old conjurer of code, crafter of curiosities, digital enchantress, and ever-curious <em>witch</em> with an insatiable thirst for unraveling the mysteries that dance in the shadows of the unknown.
          </p>
        </div>
        <div className="pt-2.5 flex flex-col gap-3">
          <h1 className="font-sans text-4xl">CONTACT</h1>
          <p className="text-lg">
            Should you seek my talents, they are yours—for a price, of course. Summon me with a message, be it by enchanted scroll (email me at <em>hello@zelda.sh</em>) or through the mystical realms of Telegram or Discord, where I answer to <em>@zezelda</em>.
          </p>
        </div>
      </main>
    </div>
  );
}
