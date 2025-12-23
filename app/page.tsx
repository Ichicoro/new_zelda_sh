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
        Greetings, adventurer of the web! I&apos;m <strong>Zelda</strong>, a {getAge() | 26} years old witch and enchantress with a keen eye for crafting experiences in the digital (and physical!) realm. By day, I weave code into captivating websites and applications; by night, I tinker with electronics and dream up new creations.
      </p>
    </div>
    <div className="pt-5 flex flex-col gap-3">
      <h2>CONTACT</h2>
      <div className="uses-cool-links mb-6">
        <p>Should you seek my talents, they are yours — <em>for a price, of course</em>.</p>
        <p>
          Summon me with a message, be it {/* by enchanted scroll (email me at <a href="mailto:hello@zelda.sh">hello@zelda.sh</a>) or */} through <strong>Telegram</strong> or <strong>Discord</strong>, where I answer to <strong>@zezelda</strong>, or via enchanted scroll (email me at <a href="mailto:hello@zelda.sh">hello@zelda.sh</a>!). You may also find me looking for new potions to concoct on <strong>Bluesky</strong> (<a href="https://bsky.app/profile/zelda.sh">@zelda.sh</a>) or among the many realms of the fediverse on <strong>Mastodon</strong> (<a href="https://a.junimo.party/@zelda">@zelda@a.junimo.party</a>).
        </p>
      </div>
    </div>
  </div>;
}
