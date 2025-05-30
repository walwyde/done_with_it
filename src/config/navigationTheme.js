import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { colors } from "./colors";

const appDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};

const appDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.primary,
    background: colors.dark,
  },
};

export default { appDefaultTheme, appDarkTheme };
