import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        serif: ["var(--font-basteleur-moonlight)"],
        // serif: ["Rosarivo", "serif"],
        sans: ["var(--font-basteleur-bold)"],
        "germania-one": ["Germania One", "cursive"],
        "rosarivo": ["Rosarivo", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
