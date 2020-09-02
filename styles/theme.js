// styles/theme.js

const theme = {
  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
  },
  colors: {
    dark: "#363732",
    light: "#DCE1E9",
    middle: "#8E9EB8",
    accent1: "#D4AFB9",
    accent2: "#ECA400",
  },
  fontFamily: {
    body: '-apple-system, "Helvetica Neue", Arial, sans-serif',
  },
  fontSize: {
    xs: ".8rem",
    sm: "1rem",
    md: "1.2rem",
    lg: "1.5rem",
    xl: "2rem",
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
