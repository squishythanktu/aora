/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#FFA001";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#7b7b78b",
    background: "#161622",
    border: "#232533",
    tint: tintColorLight,
    icon: "#CDCDE0",
    tabIconDefault: "#CDCDE0",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    border: "#232533",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
