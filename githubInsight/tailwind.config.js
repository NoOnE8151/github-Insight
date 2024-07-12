/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ["Roboto Mono", "monospace"],
        firaSans: ["Fira Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        sourceSans: ["Source Sans 3", "sans-serif"],
        exo: ["Exo", "sans-serif"]
      }
    },
  },
  plugins: [],
}