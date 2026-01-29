"use server";
import Guestbook from "@/components/Guestbook";
import Header from "@/components/Header";

export default async function Blog() {
  return <div>
    <Header activePath="guestbook" />
    <div className="pt-2.5 flex flex-col gap-3">
      <p>
        Welcome to my little guestbook! Feel free to leave a message. Please be nice! &lt;3
      </p>
      <Guestbook />
    </div>
  </div>;
}