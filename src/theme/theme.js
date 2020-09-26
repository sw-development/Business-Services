const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xlg: 1500,
};

export const theme = {
  colors: {
    white: "#FFF",
    black: "#111",
    lightGray: "#ECF5FF",
    lightBlue: "#7ac8ff",
    aliceBlue: "#ECF5FF",
    mayaBlue: "#71BDF3",
    snow: "#F9F9F9",
    shark: "#32363F",
    midnightExpress: "#051441",
    mischka: "#A0A4AB",
    denim: "#1956CF",
    whiteIce: "#DDFCED",
    whiteLilac: "#F4E7FB",
    ghostWhite: "#FAFBFF",
    darkBlue: "#219DF5",
    navyBlue: "#0B1C52",
  },
  font: {
    weight: {
      light: 300,
      medium: 500,
      semibold: 600,
      bold: 700,
      xbold: 800,
    },
    size: {
      xxs: "1.4rem",
      xs: "1.6rem",
      sm: "2rem",
      md: "3rem",
      lg: "4rem",
      xlg: "5rem",
    },
  },
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;

    return acc;
  }, {}),
};
