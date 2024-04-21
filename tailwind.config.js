/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-teal": "#012E40",
        "teal": "#026773",
        "teal-gray": "#738187",
        "action-red": "#C20F45",
      },
      fontFamily: {
        headings: ['Raleway', "Helvetica", 'sans-serif'],
        body: ['Montserrat', "Arial", 'sans-serif'],
      },
      screens: {
        'xs': '420px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
