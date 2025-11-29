/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darker: 'hsl(71, 58%, 31%)',
        'darker-shade': 'hsl(73, 34%, 24%)',
        darkest: '#333918',
        'bg-secondary': '#f9edc8',
        secondary: '#29214F',
        'secondary-shade': '#151320',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
