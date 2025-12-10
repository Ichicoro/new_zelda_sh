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
    const { default: ProjectComponent, metadata } = await import(`@/src/portfolio/${slug}/project.mdx`);

    return (
      <>
        <Header activePath="portfolio" dots={metadata.title} />
        <div className="flex flex-col gap-3">
          <ProjectComponent />
        </div>
      </>
    );
  } catch {
    return (
      <>
        <Header activePath="portfolio" />
        <div className="flex flex-col gap-3">
          <h2 className="">Project not found</h2>
          <p>The project &ldquo;{slug}&rdquo; could not be found.</p>
        </div>
      </>
    );
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { metadata } = await import(`@/src/portfolio/${slug}/project.mdx`);
    return {
      title: metadata.title,
      description: metadata.description,
      keywords: metadata.keywords,
      authors: metadata.authors.map((a: { name: string }) => a.name),
      openGraph: {
        title: metadata.title,
        description: metadata.description,
        type: "article",
        publishedTime: new Date(metadata.date).toISOString(),
        authors: metadata.authors.map((a: { name: string }) => a.name),
        // images: [], // TODO
      },
      twitter: {
        card: "summary_large_image",
        title: metadata.title,
        description: metadata.description,
        // images: [], // TODO
      },
    };
  } catch {
    return {
      title: "Project not found",
      description: "The post could not be found.",
    };
  }
}

export async function generateStaticParams() {
  const files = await readdir("./src/portfolio");
  const posts = [];

  for (const dir of files) {
    try {
      const { metadata } = await import(`@/src/portfolio/${dir}/project.mdx`);
      metadata.date = new Date(metadata.date);
      metadata.slug = dir;
      posts.push(metadata);
    } catch (error) {
      console.error(`Failed to load metadata for ${dir}:`, error);
    }
  }

  return posts.filter(md => !md.disabled).map((md) => ({ slug: md.slug }));
}