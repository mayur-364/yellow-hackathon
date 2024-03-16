/** @type {import('tailwindcss').Config} */
function pxToRem(px, baseFontSize = 16) {
  const rem = px / baseFontSize;
  return `${rem}rem`;
}
module.exports = {
content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        h1:{
          fontSize:"60px",
          fontFamily:"verdana"
        },
        
        primary:{
          midnightblue:{
            100: '#020C33',
            200: '#000E4E',
            300: '#022766',
            400: '#00417F',
            500: '#015A97',
            600: '#0673B0',
          },
          horizonblue:{
            100: '#00A6E1',
            200: '#0BB7F1',
            300: '#26C2F3',
            400: '#4CCDF5',
            500: '#73D7F8',
          }
        },
        secondary:{
          iceblue:{
            100: '#99E2FA',
            200: '#BFEDFC',
            300: '#CCF2FD',
            400: '#DFF6FE',
            500: '#EFFBFE',
          }
        },
        border:{
          default:'#999FB8',
          active: '#020C33',
        },
        error:{
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
      spacing:{
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
      container:{
        center:true,
        padding:'24px',
      },
      fontSize: {
        90: pxToRem(90),
        56: pxToRem(56),
        48: pxToRem(48),
        42: pxToRem(42),
        34: pxToRem(34),
        28: pxToRem(28),
        22: pxToRem(22),
        20: pxToRem(20),
        19: pxToRem(19),
        18: pxToRem(18),
        17: pxToRem(17),
        16: pxToRem(16),
        15: pxToRem(15),
        13: pxToRem(13),
      },
      lineHeight: {
        99: pxToRem(99),
        61: pxToRem(61),
        54: pxToRem(54),
        52: pxToRem(52),
        37: pxToRem(37),
        36: pxToRem(36),
        33: pxToRem(33),
        28: pxToRem(28),
        26: pxToRem(26),
        24: pxToRem(24),
        23: pxToRem(23),
        21: pxToRem(21),
        16: pxToRem(16),
        15: pxToRem(15),
        13: pxToRem(13),
      },
      fontFamily: {
        primary: ['var(--custom-font-primary)'],
        secondary: ['var(--custom-font-secondary)'],
        
      },
    },
  },
  plugins: [],
}