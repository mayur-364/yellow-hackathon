module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // backgroundImage: {
      //   'heroBanner': "url('')",
      // },
      colors: {
        primary: {
          sharpBlack: {
            200: '#000',
            100: '#2F2D2E',
          },
          grey: {
            200: '#515151',
            100: '#F0F0F0',
          },
          blueshade: {
            200: '#70A29C',
            100: '#7FC3BA',
          },
          greyshadecta: {
            200: '#2F2D2E',
            100: '#787779',
          },
          midnightblue: {
            100: '#020C33',
            200: '#000E4E',
            300: '#022766',
            400: '#00417F',
            500: '#015A97',
            600: '#0673B0',
          },
          horizonblue: {
            100: '#00A6E1',
            200: '#0BB7F1',
            300: '#26C2F3',
            400: '#4CCDF5',
            500: '#73D7F8',
          },
          secondary: {
            iceblue: {
              100: '#99E2FA',
              200: '#BFEDFC',
              300: '#CCF2FD',
              400: '#DFF6FE',
              500: '#EFFBFE',
            },
          },
          border: {
            default: '#999FB8',
            active: '#020C33',
          },
          error: {
            dark: '#D75050',
            light: '#FBF1F1',
          },
          success: {
            dark: '#08CF87',
            light: '#CDF4E6',
          },
          warning: {
            dark: '#FBC667',
            light: '#FCEEC9',
          },
          white: '#FFFFFF',
        },
      },
      spacing: {
        0: '0',
        1: '8px',
        2: '16px',
        3: '24px',
        4: '32px',
        5: '48px',
        6: '64px',
        7: '80px',
        8: '96px',
      },
      screens: {
        xl: '1230px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '320px',
      },
      container: {
        center: true,
        padding: '24px',
      },
      fontSize: {
        90: '5.625rem',
        56: '3.5rem',
        48: '3rem',
        42: '2.625rem',
        34: '2.125rem',
        28: '1.75rem',
        22: '1.375rem',
        20: '1.25rem',
        19: '1.1875rem',
        18: '1.125rem',
        17: '1.0625rem',
        16: '1rem',
        15: '0.9375rem',
        13: '0.8125rem',
        h1: '50px',
        h2: '40px',
        h3: '28px',
        h4: '20px',
        infotext: '16px',
        formlabel: '18px',
        bodycopy: '22px',
      },
      fontWeight: {},
      lineHeight: {
        99: '6.1875rem',
        61: '3.8125rem',
        54: '3.375rem',
        52: '3.25rem',
        37: '2.3125rem',
        36: '2.25rem',
        33: '2.0625rem',
        28: '1.75rem',
        26: '1.625rem',
        24: '1.5rem',
        23: '1.4375rem',
        21: '1.3125rem',
        16: '1rem',
        15: '0.9375rem',
        13: '0.8125rem',
      },
      fontFamily: {
        primary: ['var(--custom-font-primary)'],
        secondary: ['var(--custom-font-secondary)'],
        fonthead: {
          h1: '50px',
          h2: '40px',
          h3: '28px',
          h4: '20px',
          infotext: '16px',
          formlabel: '18px',
          bodycopy: '22px',
        },
      },
    },
  },
  plugins: [],
};