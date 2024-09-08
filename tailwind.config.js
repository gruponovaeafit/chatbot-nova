/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: {
          next: "#C6B9FF",
          omegahack: "#4F46E5",
          nova: "#FFA987",
        },
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
