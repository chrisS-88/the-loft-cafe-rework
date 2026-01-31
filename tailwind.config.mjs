/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#F7F3F1",
          200: "#DCCBC5",
          500: "#8C6F68",
          700: "#5A4642",
          900: "#3B2F2F",
        },
        sage: {
          200: "#CFE2D4",
          500: "#6F8F7A",
          700: "#4F6A57",
        },
        stone: {
          300: "#D4D4CF",
          600: "#6E6E69",
          800: "#4A4A47",
        },
        rust: {
          300: "#E8B79A",
          500: "#C47A55",
        },
        cream: "#FAF7F3",
      },
    },
    fontFamily: {
      heading: ["Fraunces, serif"],
      body: ["Inter, sans-serif"],
    },
  },
  plugins: [],
};
