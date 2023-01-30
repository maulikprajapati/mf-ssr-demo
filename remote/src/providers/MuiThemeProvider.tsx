import { Container, CssBaseline, Grid, ThemeProvider } from '@mui/material';
import deepmerge from 'deepmerge';
import { ReactNode } from 'react';
import { dynamicTheme as dynamicThemeDefaults, DynamicThemeOptions } from 'ui/foundations';
import buildTheme from 'ui/theme';
interface MuiThemeProviderProps {
  children: ReactNode;
  dynamicTheme?: DynamicThemeOptions;
}

export const MuiThemeProvider = ({
  children,
  dynamicTheme: dynamicThemeOptionsParam,
}: MuiThemeProviderProps) => {
  const themeOptions = deepmerge(dynamicThemeDefaults, dynamicThemeOptionsParam || {});
  const theme = buildTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={0}>
        <Container component='main' maxWidth={false} disableGutters={true}>
          <CssBaseline />
          {children}
        </Container>
      </Grid>
    </ThemeProvider>
  );
};
