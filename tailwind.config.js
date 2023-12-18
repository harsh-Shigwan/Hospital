module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        aliceblue: "#ebeef3",
        white: "#fff",
        dodgerblue: "#0473da",
        gray: {
          "100": "#939393",
          "200": "rgba(0, 0, 0, 0.5)",
          "300": "rgba(0, 0, 0, 0.57)",
        },
        black: "#000",
        gainsboro: "#d9d9d9",
        dimgray: "rgba(108, 107, 107, 0.54)",
        whitesmoke: "#efefef",
      },
      fontSize: {
        14: '14px',
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        inherit: "inherit"
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
    },
  },
  plugins: [],
};
// /*module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   darkMode: 'class',
//   theme: {
//     fontFamily: {
//       display: ['Open Sans', 'sans-serif'],
//       body: ['Open Sans', 'sans-serif'],
//     },
//     extend: {
//       colors: {
//         aliceblue: "#ebeef3",
//         black: "#000",
//         gainsboro: "#d9d9d9",
//         gray: {
//           "100": "rgba(0, 0, 0, 0.6)",
//           "200": "rgba(0, 0, 0, 0.5)",
//         },
//         steelblue: "#0d6f91",
//         powderblue: "#b9f0fb",
//         white: "#fff",
//         snow: "#fdf8f8",
//         dodgerblue: "#0473da",
//       },
//       spacing: {},
//       fontFamily: {
//         inter: "Inter",
//       },
//       borderRadius: {
//         xl: "20px",
//       },
//       fontSize: {
//         14: '14px',
//         xs: "12px",
//         "5xl": "24px",
//         inherit: "inherit",
//       },
//       backgroundColor: {
//         'main-bg': '#FAFBFB',
//         'main-dark-bg': '#20232A',
//         'secondary-dark-bg': '#33373E',
//         'light-gray': '#F7F7F7',
//         'half-transparent': 'rgba(0, 0, 0, 0.5)',
//       },
//       borderWidth: {
//         1: '1px',
//       },
//       borderColor: {
//         color: 'rgba(0, 0, 0, 0.1)',
//       },
//       width: {
//         400: '400px',
//         760: '760px',
//         780: '780px',
//         800: '800px',
//         1000: '1000px',
//         1200: '1200px',
//         1400: '1400px',
//       },
//       height: {
//         80: '80px',
//       },
//       minHeight: {
//         590: '590px',
//       },
//       backgroundImage: {
//         'hero-pattern':
//           "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
//       },
//     },
//   },
//   plugins: [],
// };