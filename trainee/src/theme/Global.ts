import { createUseStyles } from 'react-jss';
import { theme } from './theme';

const firstSharedStyles = {
  height: '100dvh',
  lineHeight: 1,
  backgroundColor: '#f5f5f5',
  fontFamily: theme.fonts.main,
};
const secondSharedStyles = {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
};

export const useStyles = createUseStyles({
  '@global': {
    ':root': {
      boxSizing: 'border-box',
      fontSize: '1rem',
      primary: theme.colors.primary,
      textPrimary: theme.colors.textPrimary,
      error: theme.colors.error,
      buttonBackground: theme.colors.buttonBackground,
      shadowPrimary: theme.colors.shadowPrimary,
      shadowSecondary: theme.colors.shadowSecondary,
      shadowTartiary: theme.colors.shadowTartiary,
      border: theme.colors.border,
      input: theme.colors.input,
      errorText: theme.colors.errorText,
    },
    body: {
      ...firstSharedStyles,
    },
    html: {
      ...firstSharedStyles,
    },
    '*': {
      ...secondSharedStyles,
    },
    '::befor': {
      ...secondSharedStyles,
    },
    '::after': {
      ...secondSharedStyles,
    },
    '#root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
  },
});
