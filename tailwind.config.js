/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"] // Remplacez "YourCustomFont" par le nom de votre police
      }
    }
  },
  plugins: []
};
