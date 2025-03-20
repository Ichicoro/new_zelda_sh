import Lair from "../public/lair.svg"
import { Germania_One } from "next/font/google";
import Link from "next/link";

const germania = Germania_One({
  weight: "400",
  subsets: ["latin"],
})

const getAge = () => {
  const birthDate = new Date("1999-10-20");
  const now = new Date();
  return new Date(now.getTime() - birthDate.getTime()).getFullYear() - 1970;
}

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row w-full mt-8 gap-14 items-start">
      <div className="w-[147px] mx-auto">
        <Lair className="w-[147px]" />
      </div>
      <main className="flex flex-col gap-4">
        <div>
          <h1 className="font-sans text-5xl leading-tight">ZELDA&apos;S LAIR</h1>
          <div className={`${germania.className} text-2xl flex flex-col`}>
            <Link className="cursor-pointer" href="/">Home</Link>
            <span className="cursor-not-allowed opacity-75">Projects</span>
            <span className="cursor-not-allowed opacity-75">Blog</span>
          </div>
        </div>
        <div className="pt-2.5 flex flex-col gap-3">
          <h1 className="font-sans text-4xl">ABOUT</h1>
          <p className="text-lg">
            Greetings, weary traveler! I’m <em>Zelda</em>, a {getAge() || 25}-years-old conjurer of code, crafter of curiosities, digital enchantress, and ever-curious <em>witch</em> with an insatiable thirst for unraveling the mysteries that dance in the shadows of the unknown.
          </p>
        </div>
        <div className="pt-2.5 flex flex-col gap-3">
          <h1 className="font-sans text-4xl">CONTACT</h1>
          <p className="text-lg uses-cool-links mb-6">
            Should you seek my talents, they are yours—for a price, of course. Summon me with a message, be it by enchanted scroll (email me at <a href="mailto:hello@zelda.sh">hello@zelda.sh</a>) or through the mystical realms of Telegram or Discord, where I answer to <em>@zezelda</em>. You may also find me drifting through the digital skies on Bluesky (<a href="https://bsky.app/profile/zelda.sh">@zelda.sh</a>) or among the stars of the fediverse on Mastodon (<a href="https://a.junimo.party/@zelda">@zelda@a.junimo.party</a>).
          </p>
        </div>
      </main>
    </div>
  );
}
