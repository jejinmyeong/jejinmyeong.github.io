/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jua"],
      },
      fontSize: {
        xxs: ['0.5rem', '0.75rem']
      }
      ,
      boxShadow: {
        custom:
          "0px 1px 2px 0px rgba(60, 64, 67, 0.3), 0px 1px 3px 1px rgba(60, 64, 67, 0.15)",
      }
    },
  },
  plugins: [],
};
