/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',       // Indigo blue
        secondary: '#f97316',     // Orange
        accent: '#10b981',        // Emerald green
        muted: '#6b7280',         // Gray-500
        light: '#f9fafb',         // Very light gray
        dark: '#1f2937'           // Slate-800
      },
      fontFamily: {
        body: ['"Inter"', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif']
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.05)',
        btn: '0 4px 10px rgba(37, 99, 235, 0.25)',
      },
    },
  },
  plugins: [],
};
