import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export const palette = {
  white: "#ffffff",
  gray: {
    100: "#FBFAF8",
    200: "#F5F4F2",
    300: "#A7A3A1",
    400: "#3A3A3A",
    500: "#313131",
    600: "#282828",
  },
  primary: "#F9302C",
  primaryDark: "#3A2426",
  primaryLight: "#F8C4B3",
};

// 라이트 테마
const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: palette.primary,
    background: palette.white,
    card: palette.gray[300],
    text: palette.gray[500],
    border: palette.gray[200],
  },
};

// 다크 테마
const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: palette.white,
    background: palette.gray[600],
    card: palette.gray[400],
    text: palette.gray[100],
    border: palette.gray[400],
  },
};

export { lightTheme, darkTheme };

export const colorScheme = {
  light: {
    text: {
      primary: palette.primary,
      white: palette.white,
      gray_100: palette.gray[100],
      gray_200: palette.gray[200],
      gray_300: palette.gray[300],
      gray_400: palette.gray[400],
      gray_500: palette.gray[500],
      gray_600: palette.gray[600],
    },
    icon: palette.gray[300],
    input: palette.gray[100],
    border: palette.gray[200],
    modal: palette.white,
  },
  dark: {
    text: {
      primary: palette.primary,
      white: palette.white,
      gray_100: palette.gray[500],
      gray_200: palette.gray[400],
      gray_300: palette.gray[300],
      gray_400: palette.gray[200],
      gray_500: palette.gray[100],
      gray_600: palette.gray[100],
    },
    icon: palette.gray[300],
    input: palette.gray[500],
    border: palette.gray[400],
    modal: palette.gray[500],
  },
};
