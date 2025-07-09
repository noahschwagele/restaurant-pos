import {
  DarkTheme,
  DefaultTheme
} from '@react-navigation/native';

//create themes here
//https://callstack.github.io/react-native-paper/docs/guides/theming#creating-dynamic-theme-colors

export const Darktheme = {
  dark: true,
  colors: {
    // Existing colors
    "primary": "rgb(214, 186, 255)",
    "onPrimary": "rgb(67, 0, 137)",
    "primaryContainer": "rgb(95, 0, 191)",
    "onPrimaryContainer": "rgb(236, 220, 255)",
    "secondary": "rgb(136, 206, 255)",
    "onSecondary": "rgb(0, 52, 77)",
    "secondaryContainer": "rgb(0, 76, 110)",
    "onSecondaryContainer": "rgb(200, 230, 255)",
    "tertiary": "rgb(152, 203, 255)",
    "onTertiary": "rgb(0, 51, 84)",
    "tertiaryContainer": "rgb(0, 74, 119)",
    "onTertiaryContainer": "rgb(207, 229, 255)",
    "error": "rgb(255, 180, 171)",
    "onError": "rgb(105, 0, 5)",
    "errorContainer": "rgb(147, 0, 10)",
    "onErrorContainer": "rgb(255, 180, 171)",
    "background": "rgb(29, 27, 30)",
    "onBackground": "rgb(231, 225, 230)",
    "surface": "rgb(29, 27, 30)",
    "onSurface": "rgb(231, 225, 230)",
    "surfaceVariant": "rgb(73, 69, 78)",
    "onSurfaceVariant": "rgb(203, 196, 207)",
    "outline": "rgb(149, 142, 153)",
    "outlineVariant": "rgb(73, 69, 78)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(231, 225, 230)",
    "inverseOnSurface": "rgb(50, 48, 51)",
    "inversePrimary": "rgb(123, 35, 232)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(38, 35, 41)",
      "level2": "rgb(44, 40, 48)",
      "level3": "rgb(49, 45, 55)",
      "level4": "rgb(51, 46, 57)",
      "level5": "rgb(55, 49, 62)"
    },
    "surfaceDisabled": "rgba(231, 225, 230, 0.12)",
    "onSurfaceDisabled": "rgba(231, 225, 230, 0.38)",
    "backdrop": "rgba(51, 47, 55, 0.4)",

    // New colors extracted from the image for Dark Theme
    "neutral-50": "rgb(248, 248, 254)",
    "neutral-100": "rgb(238, 238, 248)",
    "neutral-200": "rgb(222, 222, 235)",
    "neutral-300": "rgb(206, 206, 220)",
    "neutral-400": "rgb(182, 182, 204)",
    "neutral-500": "rgb(147, 147, 173)",
    "neutral-600": "rgb(112, 112, 141)",
    "neutral-700": "rgb(81, 81, 107)",
    "neutral-800": "rgb(52, 52, 77)",
    "neutral-900": "rgb(29, 29, 46)",

    "purple-25": "rgb(243, 232, 255)",
    "purple-50": "rgb(234, 218, 255)",
    "purple-100": "rgb(223, 200, 250)",
    "purple-200": "rgb(198, 167, 250)",
    "purple-300": "rgb(177, 131, 255)",
    "purple-400": "rgb(148, 88, 250)",
    "purple-500": "rgb(120, 31, 250)", // main
    "purple-600": "rgb(98, 0, 207)",
    "purple-700": "rgb(78, 0, 168)",
    "purple-800": "rgb(57, 0, 128)",
    "purple-900": "rgb(40, 0, 93)",

    "blue-50": "rgb(230, 248, 254)",
    "blue-100": "rgb(200, 242, 252)",
    "blue-200": "rgb(167, 235, 248)",
    "blue-300": "rgb(127, 227, 247)",
    "blue-400": "rgb(92, 218, 244)",
    "blue-500": "rgb(49, 208, 244)", // main
    "blue-600": "rgb(0, 193, 208)",
    "blue-700": "rgb(0, 159, 172)",
    "blue-800": "rgb(0, 122, 133)",
    "blue-900": "rgb(0, 80, 100)",

    "green-100": "rgb(220, 248, 234)",
    "green-500": "rgb(20, 218, 142)", // main

    "yellow-100": "rgb(250, 248, 214)",
    "yellow-500": "rgb(250, 192, 20)", // main

    "red-100": "rgb(255, 220, 220)",
    "red-500": "rgb(255, 100, 100)", // main
  }
};

export const Lighttheme = {
  roundness: 10,
  colors: {
    // Existing colors
    "primary": "rgb(29, 29, 46)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(236, 220, 255)",
    "onPrimaryContainer": "rgb(40, 0, 87)",
    "secondary": "rgb(0, 101, 144)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(200, 230, 255)",
    "onSecondaryContainer": "rgb(0, 30, 47)",
    "tertiary": "rgb(0, 99, 156)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(207, 229, 255)",
    "onTertiaryContainer": "rgb(0, 29, 51)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(255, 251, 255)",
    "onBackground": "rgb(29, 27, 30)",
    "surface": "rgb(255, 251, 255)",
    "onSurface": "rgb(29, 27, 30)",
    "surfaceVariant": "rgb(232, 224, 235)",
    "onSurfaceVariant": "rgb(73, 69, 78)",
    "outline": "rgb(123, 117, 127)",
    "outlineVariant": "rgb(203, 196, 207)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(50, 48, 51)",
    "inverseOnSurface": "rgb(245, 239, 244)",
    "inversePrimary": "rgb(214, 186, 255)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(248, 240, 254)",
      "level2": "rgb(244, 234, 253)",
      "level3": "rgb(241, 227, 253)",
      "level4": "rgb(239, 225, 252)",
      "level5": "rgb(237, 221, 252)"
    },
    "surfaceDisabled": "rgba(29, 27, 30, 0.12)",
    "onSurfaceDisabled": "rgba(29, 27, 30, 0.38)",
    "backdrop": "rgba(51, 47, 55, 0.4)",

    // New colors extracted from the image for Light Theme
    "neutral50": "rgb(248, 248, 254)",
    "neutral100": "rgb(238, 238, 248)",
    "neutral200": "rgb(222, 222, 235)",
    "neutral300": "rgb(206, 206, 220)",
    "neutral400": "rgb(182, 182, 204)",
    "neutral500": "rgb(147, 147, 173)",
    "neutral600": "rgb(112, 112, 141)",
    "neutral700": "rgb(81, 81, 107)",
    "neutral800": "rgb(52, 52, 77)",
    "neutral900": "rgb(29, 29, 46)",

    "purple25": "rgb(243, 232, 255)",
    "purple50": "rgb(234, 218, 255)",
    "purple100": "rgb(223, 200, 250)",
    "purple200": "rgb(198, 167, 250)",
    "purple300": "rgb(177, 131, 255)",
    "purple400": "rgb(148, 88, 250)",
    "purple500": "rgb(120, 31, 250)", // main
    "purple600": "rgb(98, 0, 207)",
    "purple700": "rgb(78, 0, 168)",
    "purple800": "rgb(57, 0, 128)",
    "purple900": "rgb(40, 0, 93)",

    "blue50": "rgb(230, 248, 254)",
    "blue100": "rgb(200, 242, 252)",
    "blue200": "rgb(167, 235, 248)",
    "blue300": "rgb(127, 227, 247)",
    "blue400": "rgb(92, 218, 244)",
    "blue500": "rgb(49, 208, 244)", // main
    "blue600": "rgb(0, 193, 208)",
    "blue700": "rgb(0, 159, 172)",
    "blue800": "rgb(0, 122, 133)",
    "blue900": "rgb(0, 80, 100)",

    "green100": "rgb(220, 248, 234)",
    "green500": "rgb(20, 218, 142)", // main

    "yellow100": "rgb(250, 248, 214)",
    "yellow500": "rgb(250, 192, 20)", // main

    "red100": "rgb(255, 220, 220)",
    "red500": "rgb(255, 100, 100)", // main
  }
};


//Dont touch this controlls the theme based on your Light and Dark theme props to match the feel of you application
export const NavThemeLight = {
  ...DefaultTheme,
  colors: {
    primary: Lighttheme.colors.secondary,
    background: Lighttheme.colors.background,
    card: Lighttheme.colors.surface,
    text: Lighttheme.colors.onSurface, // Using onSurface for text color for better contrast
    ...DefaultTheme.colors,
  }
};

export const NavThemeDark = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: Darktheme.colors.primary,
    background: Darktheme.colors.background,
    card: Darktheme.colors.surface,
    text: Darktheme.colors.onSurface, // Using onSurface for text color for better contrast
  }
};
