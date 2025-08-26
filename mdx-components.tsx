import type { MDXComponents } from 'mdx/types'
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-2xl font-bold mt-5 mb-4 font-sans">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-bold mt-5 mb-3 font-sans">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold mt-5 font-sans">{children}</h3>,
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
    ),
    code: ({ children }) => (
      <code className={`bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm overflow-scroll ${spaceMono.className}`}>{children}</code>
    ),
    pre: ({ children }) => (
      <div className="!overflow-x-scroll" style={{ overflowX: "scroll" }}><pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">{children}</pre></div>
    ),
    wrapper: ({ children }) => <div className="mdx-content flex flex-col gap-3">{children}</div>,
    ...components,
  }
}
