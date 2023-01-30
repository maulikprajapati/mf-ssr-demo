import { darken } from '@mui/material';
import { colors } from 'ui/foundations';

interface DynamicThemeButtonOptions {
  color: string;
  backgroundColor: string;
  colorHover: string;
  backgroundColorHover: string;
}

interface DynamicThemeLinkOptions {
  color: string;
  colorHover: string;
  colorActive: string;
}

interface DynamicThemeTextOptions {
  color: string;
}

interface DynamicThemeBackgroundOptions {
  backgroundColor: string;
  color: string;
}

interface DynamicThemeBackgroundColorOptions {
  backgroundColor: string;
  backgroundColorActive: string;
}

export interface DynamicThemeOptions {
  mainNavigation: {
    backgroundColor: string;
    link: DynamicThemeLinkOptions;
  };
  sidebarNavigation: {
    backgroundColor: string;
    gradientStartColor: string;
    gradientEndColor: string;
    link: DynamicThemeLinkOptions;
    text: DynamicThemeTextOptions;
    borderColor: string;
    scrollbarBackground: string;
    scrollbarThumbBackground: string;
    bookmarkIconBackground: DynamicThemeBackgroundOptions;
  };
  mainSection: {
    backgroundColor: string;
    buttonPrimary: DynamicThemeButtonOptions;
    chipPrimary: DynamicThemeButtonOptions;
    chipDefault: DynamicThemeButtonOptions;
    chipSecondary: DynamicThemeButtonOptions;
    buttonSecondary: DynamicThemeButtonOptions;
    link: DynamicThemeLinkOptions;
    text: DynamicThemeTextOptions;
    borderColor: string;
    bookmarkIconBackground: DynamicThemeBackgroundOptions;
    text1: DynamicThemeTextOptions;
    errorText: DynamicThemeTextOptions;
    listing: DynamicThemeBackgroundColorOptions;
    alertBackgroundColor: string;
    disableText: DynamicThemeTextOptions;
    toggleButton: DynamicThemeButtonOptions;
  };
}

declare module '@mui/material/styles' {
  interface Theme {
    dynamicTheme: DynamicThemeOptions;
  }
  interface ThemeOptions {
    dynamicTheme: DynamicThemeOptions;
  }
}

export const dynamicTheme: DynamicThemeOptions = {
  mainNavigation: {
    backgroundColor: colors.blueDark,
    link: {
      color: colors.white,
      colorActive: colors.blue,
      colorHover: colors.blue,
    },
  },
  sidebarNavigation: {
    backgroundColor: colors.blueDark,
    gradientStartColor: colors.blue,
    gradientEndColor: colors.blueDark,
    borderColor: colors.neutral450,
    scrollbarBackground: colors.neutral900,
    scrollbarThumbBackground: colors.neutral550,
    bookmarkIconBackground: {
      backgroundColor: colors.white,
      color: colors.black,
    },
    link: {
      color: colors.white,
      colorHover: colors.black,
      colorActive: colors.blue,
    },
    text: {
      color: colors.white,
    },
  },
  mainSection: {
    backgroundColor: colors.black,
    borderColor: colors.neutral400,
    bookmarkIconBackground: {
      backgroundColor: colors.white,
      color: colors.black,
    },
    buttonPrimary: {
      color: colors.white,
      backgroundColor: colors.blue,
      colorHover: colors.white,
      backgroundColorHover: darken(colors.blue, 0.2),
    },
    buttonSecondary: {
      color: colors.blue,
      backgroundColor: colors.white,
      colorHover: colors.white,
      backgroundColorHover: darken(colors.white, 0.1),
    },
    chipPrimary: {
      color: colors.white,
      backgroundColor: colors.blue,
      colorHover: colors.white,
      backgroundColorHover: darken(colors.blue, 0.2),
    },
    chipDefault: {
      color: colors.white,
      backgroundColor: colors.blueDark,
      colorHover: colors.white,
      backgroundColorHover: darken(colors.blueDark, 0.2),
    },
    chipSecondary: {
      color: colors.white,
      backgroundColor: colors.neutral900,
      colorHover: colors.white,
      backgroundColorHover: darken(colors.neutral900, 0.2),
    },
    text: {
      color: colors.white,
    },
    text1: {
      color: colors.neutral450,
    },
    link: {
      color: colors.blue,
      colorHover: colors.white,
      colorActive: colors.white,
    },
    errorText: {
      color: colors.errorButton,
    },
    listing: {
      backgroundColor: colors.blueDark,
      backgroundColorActive: colors.neutral900,
    },
    alertBackgroundColor: colors.neutral800,
    disableText: {
      color: colors.neutral450,
    },
    toggleButton: {
      color: colors.black,
      backgroundColor: colors.white,
      colorHover: colors.black,
      backgroundColorHover: darken(colors.white, 0.2),
    },
  },
};
