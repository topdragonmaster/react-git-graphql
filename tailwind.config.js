/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#141d2e',
      secondary: '#1e2b48',
      blue:'#07f',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },

      // ...
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
