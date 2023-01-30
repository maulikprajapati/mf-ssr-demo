import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    colors: {
      black: string;
      black80: string;
      white: string;
      blue: string;
      blueDark: string;
      blueDark60: string;
      neutral25: string;
      neutral050: string;
      neutral075: string;
      neutral100: string;
      neutral200: string;
      neutral300: string;
      neutral400: string;
      neutral450: string;
      neutral500: string;
      neutral550: string;
      neutral600: string;
      neutral700: string;
      neutral800: string;
      neutral900: string;
      neutral925: string;
      error50: string;
      error500: string;
      errorButton: string;
      success50: string;
      success500: string;
      successButton: string;
      warning50: string;
      warning500: string;
      warningButton: string;
      info50: string;
      info500: string;
      infoButton: string;
      tierLegendary: string;
      tierEpic: string;
      tierElite: string;
      tierRare: string;
    };
  }
  interface ThemeOptions {
    colors: {
      black: string;
      black80: string;
      white: string;
      blue: string;
      blueDark: string;
      blueDark60: string;
      neutral025: string;
      neutral050: string;
      neutral075: string;
      neutral100: string;
      neutral200: string;
      neutral300: string;
      neutral400: string;
      neutral450: string;
      neutral500: string;
      neutral550: string;
      neutral600: string;
      neutral700: string;
      neutral800: string;
      neutral900: string;
      neutral925: string;
      error050: string;
      error500: string;
      errorButton: string;
      success050: string;
      success500: string;
      successButton: string;
      warning050: string;
      warning500: string;
      warningButton: string;
      info050: string;
      info500: string;
      infoButton: string;
      tierLegendary: string;
      tierEpic: string;
      tierElite: string;
      tierRare: string;
    };
  }
}

export const colors: ThemeOptions['colors'] = {
  black: '#000',
  black80: 'rgba(0, 0, 0, 0.8)',
  white: '#fff',
  blue: '#345BFF',
  blueDark: '#141826',
  blueDark60: 'rgba(20, 24, 38, 0.6)',
  neutral025: '#F5F6FA',
  neutral050: '#E9EAF2',
  neutral075: '#DADCE5',
  neutral100: '#CACDD9',
  neutral200: '#B0B3BF',
  neutral300: '#A1A4B2',
  neutral400: '#9094A6',
  neutral450: '#828699',
  neutral500: '#666B80',
  neutral550: '#565C73',
  neutral600: '#474D66',
  neutral700: '#3C4159',
  neutral800: '#31364D',
  neutral900: '#262B40',
  neutral925: '#1F2333',
  error050: '#FFEDF6',
  error500: '#CA126B',
  errorButton: '#EA2182',
  success050: '#EAFDF7',
  success500: '#25C690',
  successButton: '#2FDCA2',
  warning050: '#FFF9E3',
  warning500: '#FFC400',
  warningButton: '#FFD751',
  info050: '#EDF0FF',
  info500: '#345BFF',
  infoButton: '#3479FF',
  tierLegendary:
    'linear-gradient(151deg, #d3b056 12%, #6b5323 25%, #846c2e 38%, #d3b056 51%, #846c2e 59%)',
  tierEpic: '#363640',
  tierElite: '#757680',
  tierRare: '#9e5743',
};
