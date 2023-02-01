/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1800px",
        "4xl": "2000px",
      },
      fontFamily: {
        ip: ["Fira Code", "Noto Sans SC", "sans-serif"],
        all: ["Noto Sans SC", "sans-serif"],
      },
    },
    plugins: [],
  },
};
