export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Altering existing values

    // add new values
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'serif'], 
        hostGrotesk: ["Host Grotesk", 'serif']
      },
      colors: {
        'blue': '#3b82f6',
        'blue2': '#0D92F4',
        'blue3': '#006BFF',
        'blue4': '#4379F2',
        'blue5': '#6439FF',
        'dark-blue': '#001A6E',
        'dark-blue2': '#0A3981',
        'dark-blue3': '#22177A',
        'dark-blue4': '#133E87',
        'dark-blue5': '#1230AE',
        'purple2': '#8B5DFF', 
        'purple': '#6A42C2', 
        'light-blue': '#C4D7FF',
        'light-blue2': '#87A2FF',
        'light-blue3': '#D2E0FB',
        'light-blue4': '#7695FF',
        'light-blue5': '#9DBDFF',
        },
      screens: {
        'sm2': '550px',
        'sm3': '450px',
        'super-sm': '600px',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}