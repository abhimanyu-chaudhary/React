/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        "extra-tight": ".85",
        "ultra-tight": ".5",
      },
      boxShadow: {
        'custom-green': '0 0 0.25em #00FF19',
      },
    },
    plugins: [],
  },
};
