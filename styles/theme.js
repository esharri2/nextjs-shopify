// styles/theme.js

const theme = {
  colors: {
    dark: "#363732",
    light: "#DCE1E9",
    accent1: "#D4AFB9",
    accent2: "#E0CA3C",
    accent3: "#A52422",
  },
  fontFamily: {
    body: '-apple-system, "Helvetica Neue", Arial, sans-serif',
  },
  size: {
    headerHeight: "4rem",
  },
  spacing: {
    xs: ".25rem",
    sm: ".5rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem",
  },
  mediaQueries: {
    desktop: function (styles) {
      `@media screen and (min-width: 960px) {${styles}}`;
    },
  },
};

export default theme;
