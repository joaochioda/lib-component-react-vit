const defaulTheme = {
  color: {
    blue: {
      900: "#2745F3",
      800: "#435EFA",
      700: "#6B7FF2",
      300: "#B4BEF8",
      200: "#D1D7FB",
      100: "#EFF1FE",
    },
    green: {
      900: "#0CE33C",
      400: "#04D89D",
      100: "#D6FEE2",
    },
    red: {
      900: "#EC4C07",
      400: "#FF51A0",
      100: "#FFC0DC",
    },
    yellow: {
      900: "#FDC800",
      400: "#F6C986",
      100: "#FFEFB2",
    },
    black: {
      900: "#222222",
      400: "#4C4C4C",
    },
    white: {
      900: "#FEFEFE",
      400: "#F1F1F1",
    },
  },
  size: {
    xxxs: ".5rem",
    xxs: ".625rem",
    xs: ".75rem",
    s: "1rem",
    sm: "1.5rem",
    md: "2rem",
    lg: "2.25rem",
    xl: "3rem",
  },
  spacing: {
    quarck: "0.25rem",
    nano: "0.5rem",
    xxxs: ".75rem",
    xxs: "1rem",
    xs: "1.5re",
    sm: "2rem",
    md: "2.25rem",
    ld: "3rem",
    xl: "4rem",
    xxl: "6rem",
  },
  spacingInset: {
    quarck: "0.25rem",
    nano: "0.5rem",
    xs: "1rem",
    sm: "1.5rem",
    md: "2rem",
    lg: "2.25rem",
  },
  weight: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  border: {
    hairline: "1px solid #4C4C4C",
    thin: "2px solid #4C4C4C",
    thick: "4px solid #4C4C4C",
    heavy: "8px solid #4C4C4C",
  },
  breakpoints: {
    mobile: "550px",
    desktop: "1024px",
  },
};

export const lightTheme = (style = {}) => {
  console.log(style);
  return {
    background: "white",
    ...defaulTheme,
    ...style,
  };
};

export const darkTheme = (style: any) => {
  return {
    background: "black",
    ...defaulTheme,
    ...style,
  };
};
