import { Components } from '@mui/material';
import { darken } from '@mui/material/styles';
import { colors, DynamicThemeOptions, shape, themeDefault } from '../foundations';

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    large: true;
    medium: true;
    small: true;
    xsmall: true;
  }
  interface ButtonPropsColorOverrides {
    primary: true;
    secondary: true;
  }
}

export const buildMuiButton = (dynamicTheme: DynamicThemeOptions) => {
  const MuiButton: Components['MuiButton'] = {
    styleOverrides: {
      root: {
        fontSize: '14px',
        fontWeight: 500,
        overflow: 'hidden',
        textTransform: 'none',
        borderRadius: shape.borderRadius,

        '&.rounded': {
          borderRadius: 50,
          padding: `${themeDefault.spacing(0.75)} ${themeDefault.spacing(2.5)}`,
        },

        '&.Mui-disabled, &.Mui-disabled:hover, &.Mui-disabled:focus': {
          color: colors.white,
          backgroundColor: colors.neutral200,
        },
      },
    },
    variants: [
      // primary
      {
        props: {
          color: 'primary',
        },
        style: {
          backgroundColor: dynamicTheme.mainSection.buttonPrimary.backgroundColor,
          color: dynamicTheme.mainSection.buttonPrimary.color,
          '&:hover': {
            backgroundColor: dynamicTheme.mainSection.buttonPrimary.backgroundColorHover,
            color: dynamicTheme.mainSection.buttonPrimary.colorHover,
          },
        },
      },
      {
        props: {
          variant: 'outlined',
          color: 'primary',
        },
        style: {
          backgroundColor: 'transparent',
          color: colors.blue,
          borderColor: colors.blue,

          '&:hover': {
            backgroundColor: 'transparent',
            color: darken(colors.blue, 0.1),
            borderColor: darken(colors.blue, 0.1),
          },

          '&.Mui-disabled, &.Mui-disabled:hover': {
            backgroundColor: 'transparent',
            color: colors.neutral200,
            border: `1px solid ${colors.neutral200}`,
          },
        },
      },
      {
        props: {
          variant: 'text',
        },
        style: {
          border: 'none',
          backgroundColor: 'transparent',
          color: colors.info500,
          display: 'inline',
          padding: '0 !important',
          fontSize: 'inherit !important',
          lineHeight: 'inherit !important',
          verticalAlign: 'text-top',
          textAlign: 'left',
          minWidth: 'auto',
          '&:hover': {
            backgroundColor: 'transparent',
            color: colors.info500,
          },
        },
      },
      {
        props: {
          size: 'large',
        },
        style: {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          padding: '1rem 2rem',

          '.MuiButton-startIcon': {
            marginRight: themeDefault.spacing(0.5),
            marginLeft: 0,
            '.MuiSvgIcon-root': {
              fontSize: '1rem',
            },
          },
        },
      },
      {
        props: {
          size: 'medium',
        },
        style: {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          padding: '.75rem 1.5rem',

          '.MuiButton-startIcon': {
            marginRight: themeDefault.spacing(0.5),
            marginLeft: 0,
            '.MuiSvgIcon-root': {
              fontSize: '1rem',
            },
          },
        },
      },
      {
        props: {
          size: 'small',
        },
        style: {
          fontSize: '.875rem',
          lineHeight: '1.5rem',
          padding: '.5rem 1rem',
          borderRadius: 10,

          '.MuiButton-startIcon': {
            marginRight: themeDefault.spacing(0.5),
            marginLeft: 0,
            '.MuiSvgIcon-root': {
              fontSize: '.875rem',
            },
          },
        },
      },
      {
        props: {
          size: 'xsmall',
        },
        style: {
          fontSize: '.875rem',
          lineHeight: '1.5rem',
          padding: '.25rem .5rem',
          borderRadius: 8,

          '.MuiButton-startIcon': {
            marginRight: themeDefault.spacing(0.2),
            marginLeft: 0,
            '.MuiSvgIcon-root': {
              fontSize: '.875rem',
            },
          },
        },
      },
      // secondary
      {
        props: {
          color: 'secondary',
        },
        style: {
          backgroundColor: dynamicTheme.mainSection.buttonSecondary.backgroundColor,
          color: dynamicTheme.mainSection.buttonSecondary.color,

          '&:hover, &:focus': {
            backgroundColor: dynamicTheme.mainSection.buttonSecondary.backgroundColorHover,
          },
          '.MuiTouchRipple-child': {
            backgroundColor: dynamicTheme.mainSection.buttonSecondary.color,
          },
        },
      },
      {
        props: {
          variant: 'outlined',
          color: 'secondary',
        },
        style: {
          backgroundColor: 'transparent',
          color: colors.white,
          borderColor: colors.white,

          '&:hover, &:focus': {
            backgroundColor: 'transparent',
            color: darken(colors.white, 0.2),
            borderColor: darken(colors.white, 0.2),
          },

          '&.Mui-disabled, &.Mui-disabled:hover, &.Mui-disabled:focus': {
            backgroundColor: 'transparent',
            color: colors.neutral200,
            border: `1px solid ${colors.neutral200}`,
          },
        },
      },
      {
        props: {
          variant: 'outlined',
          color: 'inherit',
        },
        style: {
          backgroundColor: 'transparent',
          color: colors.black,
          borderColor: colors.black,

          '&:hover, &:focus': {
            backgroundColor: 'transparent',
            color: darken(colors.black, 0.2),
            borderColor: darken(colors.black, 0.2),
          },

          '&.Mui-disabled, &.Mui-disabled:hover, &.Mui-disabled:focus': {
            backgroundColor: 'transparent',
            color: colors.neutral200,
            border: `0.063rem solid ${colors.neutral200}`,
          },
        },
      },
      {
        props: {
          variant: 'outlined',
          color: 'error',
        },
        style: {
          backgroundColor: 'transparent',
          color: colors.error500,
          borderColor: colors.error500,

          '&:hover, &:focus': {
            backgroundColor: 'transparent',
            color: darken(colors.error500, 0.2),
            borderColor: darken(colors.error500, 0.2),
          },

          '&.Mui-disabled, &.Mui-disabled:hover, &.Mui-disabled:focus': {
            backgroundColor: 'transparent',
            color: colors.neutral200,
            border: `0.063rem solid ${colors.neutral200}`,
          },
        },
      },
      {
        props: {
          variant: 'outlined',
          color: 'info',
        },
        style: {
          backgroundColor: 'transparent',
          color: colors.neutral200,
          border: `0.063rem solid ${colors.neutral200}`,
          '&:hover': {
            backgroundColor: 'transparent',
            color: darken(colors.neutral200, 0.2),
            borderColor: darken(colors.neutral200, 0.2),
          },
          '&.Mui-disabled, &.Mui-disabled:hover, &.Mui-disabled:focus': {
            backgroundColor: 'transparent',
            color: darken(colors.neutral200, 0.2),
            borderColor: darken(colors.neutral200, 0.2),
          },
        },
      },
    ],
    defaultProps: {
      color: 'primary',
      disableElevation: true,
      disableFocusRipple: true,
      disableRipple: false,
      variant: 'contained',
    },
  };
  return MuiButton;
};
