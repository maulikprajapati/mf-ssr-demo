import { createTheme } from '@mui/material/styles';
import { colors, shadows, shape, DynamicThemeOptions, buildTypography } from './foundations';
import { buildComponents } from './components';

const buildTheme = (dynamicTheme: DynamicThemeOptions) =>
  createTheme({
    colors,
    typography: buildTypography(dynamicTheme),
    shadows,
    shape,
    components: buildComponents(dynamicTheme),
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
      },
    },
    dynamicTheme,
  });

export default buildTheme;
