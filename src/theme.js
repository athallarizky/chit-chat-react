import { theme } from '@chakra-ui/core'

export default {
  ...theme,
    colors: {
      ...theme.colors,
        primary:{
          900:"#ff2e34",
          500:"#FF5A5F"
        }, //Rausch: airbnb
        darkPrimary:"#ff2e34",
        black:{
            100:"#25282B",
            80:"#52575C",
            60:"A0A4A8",
            40:"#CACCCF",
            10:"#E8E8E8"
        },
        red:{
            900:"red",
            400:"#F56565"
        }
    },
    fonts: {
      body: "system-ui, sans-serif",
      heading: "Georgia, serif",
      mono: "Menlo, monospace",
    },
    fontSizes: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "64px",
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    lineHeights: {
      normal: "normal",
      none: "1",
      shorter: "1.25",
      short: "1.375",
      base: "1.5",
      tall: "1.625",
      taller: "2",
    },
    letterSpacings: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  };