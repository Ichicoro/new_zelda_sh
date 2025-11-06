"use server";
import Header from "@/components/Header";
import { readdir } from 'fs/promises'
import { Metadata } from "next";
import Link from "next/link";

type PostMetadata = {
  title: string;
  description: string;
  authors: { name: string }[];
  keywords: string[];
  date: Date;
  slug: string;
};

export default async function Blog() {
  // Load posts metadata
  const files = await readdir("./src/posts");
  const posts: PostMetadata[] = [];

  for (const dir of files.filter(f => f !== ".DS_Store")) {
    try {
      const { metadata } = await import(`@/src/posts/${dir}/post.mdx`);
      metadata.date = new Date(metadata.date);
      metadata.slug = dir;
      if (!metadata.disabled) {
        posts.push(metadata);
      }
    } catch (error) {
      console.error(`Failed to load metadata for ${dir}:`, error);
    }
  }

  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  // posts.pop()

  return <div>
    <Header activePath="blog" />
    <div className="pt-2.5 flex flex-col gap-3">
      <p>
        Welcome to my blog, where I share my thoughts, musings and ideas.
      </p>
      <h3 className="mt-3">RECENT POSTS</h3>
      {posts.length > 0 ? (
        <div className="flex flex-col gap-4">
          {posts.map((post, index) => (
            <div key={index} className="pb-3 not-last:border-b border-dotted border-[--foreground]">
              <p>{post.date.toDateString()}</p>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-xl font-semibold font-sans mt-1 underline decoration-dotted">{post.title}</h3>
              </Link>
              <p className="opacity-90 mt-2">{post.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="">
          <p className="italic opacity-80">No posts found...</p>
        </div>
      )}
    </div>
  </div>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Zelda's Lair – Blog",
    description: "hey :)",
  };
}