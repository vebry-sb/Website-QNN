// config/theme.js

export const THEME = {
    light: {
      background: 'bg-white',
      text: 'text-gray-900',
      button: 'bg-blue-500 text-white',
    },
    dark: {
      background: 'bg-gray-900',
      text: 'text-white',
      button: 'bg-blue-700 text-white',
    },
  };
  
  // Fungsi untuk mengubah tema
  export function toggleTheme() {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }
    // src/layouts/Header.jsx
  