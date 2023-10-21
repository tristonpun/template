/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/**/*.{html,css}"],
  corePlugins: {
    container: false,
  },
  darkMode: "class",
  safelist: [
    'image',
    'gap-8',
    {
      pattern: /columns-(1|2|3)/,
      variants: ['sm', 'md'],
    }
  ],
  theme: {
    extend: {
      colors: {
        dark: "#18181A",
        light: "#ccc",
        red: "#AA0000;"
      },
      fontFamily: {
        primary: ["var(--font-primary)", "serif"],
        secondary: ["var(--font-secondary)", "serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwind-bootstrap-grid")({
      gridGutters: {
        0: 0,
        1: ".5rem",
        2: "1rem",
        3: "1.5rem",
        4: "2rem",
        5: "2.75rem",
        6: "3.25rem",
      },
    }),
  ],
}

