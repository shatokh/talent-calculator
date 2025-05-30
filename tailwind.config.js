// tailwind.config.js
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  // Включаем опцию тёмной темы (по медиа или классом)
  darkMode: 'media', // или 'class'

  // Пути к вашим файлам, где используются классы Tailwind
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],

  theme: {
    extend: {
      // Кастомный брейкпоинт для очень маленьких экранов
      screens: {
        sm: '360px',
        // md: '768px', lg: '1024px' — по умолчанию есть
      },

      // Safe-area inset для вырезов («чёлок»)
      padding: {
        safe: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
      },

      // Если нужно, можно добавить свои оттенки или spacing
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
      },
    },
  },

  plugins: [
    typography,
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
