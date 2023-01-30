import { buildMuiButton } from './MuiButton';
import { DynamicThemeOptions } from 'ui/foundations';

export const buildComponents = (dynamicTheme: DynamicThemeOptions) => {
  return {
    MuiButton: buildMuiButton(dynamicTheme),
  };
};
