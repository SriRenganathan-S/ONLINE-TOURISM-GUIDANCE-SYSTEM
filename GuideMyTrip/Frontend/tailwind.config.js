/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        mytheme: {
          'text':'000000',
          'background': 'D8FFF3',
          'primary': '55DDB4',
          'secondary':'BEF8E6',
          'accent':'D9D9D9',
          'base-100': 'D8FFF3'
        }
      }
    ]
  }
}