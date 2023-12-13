import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "lg:grid-cols-5",
    "lg:grid-cols-4",
    "lg:grid-cols-3",
    "lg:grid-cols-2",
    "lg:grid-cols-1",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mosqueGreen: {
          highlight: "#ffef90",
          DEFAULT: "#001524",
          dark: "#00223b",
        },
      },
    },
  },
  plugins: [],
}
export default config
