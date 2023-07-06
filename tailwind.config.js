/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors:{
      "main": "#023c2a",
      "secondary": "#ecedea",
      "main_light": "#5aaa55",
      "white": "#fff",
      "call-to-action": "#faf0e4"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ["Ubuntu",'Merriweather', 'serif'],
      mandy : ["Mandy"]
    },
  },
  plugins: [],
};
