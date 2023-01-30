import { TypographyOptions } from '@mui/material/styles/createTypography';
import { DynamicThemeOptions } from './dynamicTheme';

export const buildTypography = (dynamicTheme: DynamicThemeOptions) => {
  const typography: TypographyOptions = {
    fontSize: 16,
    fontFamily: 'Poppins, sans-serif',

    h1: {
      fontSize: '2.625rem',
      lineHeight: '3.25rem',
      fontWeight: 'bold',
      color: dynamicTheme.mainSection.text.color,
    },
    h2: {
      fontSize: '2rem',
      lineHeight: '2.5rem',
      fontWeight: 'bold',
      color: dynamicTheme.mainSection.text.color,
    },
    h3: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem',
      fontWeight: 'bold',
      color: dynamicTheme.mainSection.text.color,
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      color: dynamicTheme.mainSection.text.color,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 'bold',
      color: dynamicTheme.mainSection.text.color,
    },
    h6: {
      fontSize: '.875rem',
      fontWeight: 'bold',
      color: dynamicTheme.mainSection.text.color,
    },
    body1: {
      color: dynamicTheme.mainSection.text.color,
    },
    body2: {
      color: dynamicTheme.mainSection.text.color,
    },
  };
  return typography;
};
