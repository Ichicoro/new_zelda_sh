import type { MDXComponents } from 'mdx/types'
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
});

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-2xl font-bold font-sans">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-bold font-sans">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-bold font-sans">{children}</h3>,
    p: ({ children }) => <p className="leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="">{children}</ul>,
    ol: ({ children }) => <ol className="">{children}</ol>,
    li: ({ children }) => <li className="mb-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="bg-quote-background text-sm text-code-foreground py-2 px-3 rounded-lg">{children}</blockquote>
    ),
    code: ({ children }) => (
      <code className={`rounded text-sm overflow-scroll ${spaceMono.className}`}>{children}</code>
    ),
    pre: ({ children }) => (
      <div className="!overflow-x-scroll relative" style={{ overflowX: "scroll" }}>
        <button className="code-copybutton absolute top-1 right-1 font-mono !bg-code-foreground !text-code-background rounded z-10 text-sm px-2 py-1 flex justfiy-center items-center h-6 opacity-30 hover:opacity-100 transition-opacity">
          <span className="-translate-y-[2px]">copy</span>
        </button>
        <pre className="relative rounded-lg">{children}</pre>
      </div>
    ),
    a: ({ children, href }) => (
      <a href={href} className="underline">
        {children}
      </a>
    ),
    wrapper: ({ children }) => <div className="mdx-content flex flex-col gap-3 uses-cool-links">{children}</div>,
    ...components,
  }
}
