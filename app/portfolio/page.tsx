"use server";
import Header from "@/components/Header";

export default async function Blog() {
  return <div>
    <Header activePath="portfolio" />
    <div className="pt-2.5 flex flex-col gap-3">
      <p>
        Welcome to my little portfolio, where I share what I build.<br /> This is a vaguely curated selection of my projects, experiments, and creations that reflect my passions and skills.<br />Feel free to explore and reach out if you want to collaborate or learn more about any of these works!
      </p>
      <div className="flex flex-row">
        <div>
          <h3 className="font-sans">Tetris remake in Godot</h3>
          <p>lorem ipsum dolor sit amet</p>
        </div>
        <div className="portfolio__project-image"></div>
      </div>
    </div>
  </div>;
}