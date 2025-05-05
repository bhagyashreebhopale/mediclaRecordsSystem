module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{html,js,jsx,ts,tsx}",
      "./node_modules/@shadcn/ui/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Poppins', 'sans-serif'],
        },
      },
    },    
    plugins: [],
  };

