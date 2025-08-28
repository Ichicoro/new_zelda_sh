import Header from "@/components/Header";

const getAge = () => {
  const birthDate = new Date("1999-10-20");
  const now = new Date();
  return new Date(now.getTime() - birthDate.getTime()).getFullYear() - 1970;
}

export default function Home() {
  return <div className="">
    <Header activePath="home" />
    <div className="pt-2.5 flex flex-col gap-3">
      <p className="">
        Greetings, weary traveler! I’m <strong>Zelda</strong>, a {getAge() || 25}-years-old conjurer of code, crafter of curiosities, digital enchantress, and ever-curious <strong>witch</strong> with an insatiable thirst for unraveling the mysteries that dance in the shadows of the unknown.
      </p>
    </div>
    <div className="pt-5 flex flex-col gap-3">
      <h2 className="font-sans">CONTACT</h2>
      <div className="uses-cool-links mb-6">
        <p>Should you seek my talents, they are yours—for a price, of course.</p>
        <p>
          Summon me with a message, be it {/* by enchanted scroll (email me at <a href="mailto:hello@zelda.sh">hello@zelda.sh</a>) or */}through the mystical realms of Telegram or Discord, where I answer to <strong>@zezelda</strong>. You may also find me drifting through the digital skies on Bluesky (<a href="https://bsky.app/profile/zelda.sh">@zelda.sh</a>) or among the stars of the fediverse on Mastodon (<a href="https://a.junimo.party/@zelda">@zelda@a.junimo.party</a>).
        </p>
      </div>
    </div>
  </div>;
}
