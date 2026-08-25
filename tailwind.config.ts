import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mundo: {
          navy: {
            DEFAULT: "#07224B",
            deep: "#041530",
            light: "#0D336D",
            surface: "#0A295A",
            border: "#133E7E",
          },
          orange: {
            DEFAULT: "#EF831C",
            hover: "#D97212",
            light: "#FDF1E6",
            dark: "#B85E0D",
          },
          black: "#000000",
          white: "#FFFEFF",
          gray: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#64748B",
            600: "#475569",
            700: "#334155",
            800: "#1E293B",
            900: "#0F172A",
          },
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      clipPath: {
        diagonal: "polygon(0 0, 100% 0, 100% calc(100% - 40px), 0 100%)",
        "diagonal-reverse": "polygon(0 40px, 100% 0, 100% 100%, 0 100%)",
        "diagonal-both": "polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
