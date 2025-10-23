/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
 'text': '#050315',
 'background': '#fbfbfe',
 'primary': '#ce2727',
 'secondary': '#ffeedc',
 'accent': '#ec2929ff',
},

    },
  },
  plugins: [],
}