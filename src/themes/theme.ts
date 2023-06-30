import { scale } from "react-native-size-matters";

const styledComponentsTheme = {
  colors: {
    text: {
      black: "#0E0E0E",
      white: "#FFFFFF",
      label: "#9F9F9F",
    },
    background: {
      primary: "#FFFFFF",
      secondary: "#EAEAEA",
      black: "#222222",
    },
    status: {
      high: "#30AD33",
      low: "#E74735",
    },
  },
  font: {
    size: {
      xxs: `${scale(10)}px`,
      xs: `${scale(12)}px`,
      sm: `${scale(14)}px`,
      md: `${scale(18)}px`,
      lg: `${scale(20)}px`,
      xl: `${scale(22)}px`,
    },
  },
};

export default styledComponentsTheme;
