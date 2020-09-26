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
    black: "#000",
    grey: "#7D7D7D",
    lightGray: "#ECF5FF",
    solitude: "#ECF0FB",
    lightBlue: "#7ac8ff",
    dodgerBlue: "#006AFF",
    royalBlue: "#2575E6",
    darkBlue: "#219DF5",
    navyBlue: "#0B1C52",
    shark: "#32363F",
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
