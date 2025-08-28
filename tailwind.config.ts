import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "code-background": "var(--code-background)",
        "code-foreground": "var(--code-foreground)",
        "quote-background": "var(--quote-background)",
      },
      fontFamily: {
        serif: ["var(--font-basteleur-moonlight)"],
        // serif: ["Rosarivo", "serif"],
        sans: ["var(--font-basteleur-bold)"],
        "germania-one": ["Germania One", "cursive"],
        "rosarivo": ["Rosarivo", "serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
