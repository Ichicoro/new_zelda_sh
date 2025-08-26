import Header from "@/components/Header";
import { readdir } from "fs/promises";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  try {
    const { default: PostComponent, metadata } = await import(`@/src/posts/${slug}/post.mdx`);

    return (
      <>
        <Header activePath="blog" dots={metadata.title} />
        <div className="flex flex-col gap-3">
          <PostComponent />
        </div>
      </>
    );
  } catch {
    return (
      <>
        <Header activePath="blog" />
        <div className="flex flex-col gap-3">
          <h2 className="font-sans">Post not found</h2>
          <p>The post &ldquo;{slug}&rdquo; could not be found.</p>
        </div>
      </>
    );
  }
}

export async function generateStaticParams() {
  const files = await readdir("./src/posts");
  const posts = [];

  for (const dir of files) {
    try {
      const { metadata } = await import(`@/src/posts/${dir}/post.mdx`);
      metadata.date = new Date(metadata.date);
      metadata.slug = dir;
      posts.push(metadata);
    } catch (error) {
      console.error(`Failed to load metadata for ${dir}:`, error);
    }
  }

  return posts.filter(md => !md.disabled).map((md) => ({ slug: md.slug }));
}