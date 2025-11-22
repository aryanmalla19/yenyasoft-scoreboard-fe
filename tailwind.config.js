/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/vue-sonner/**/*.{js,ts,vue}" // Important!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
