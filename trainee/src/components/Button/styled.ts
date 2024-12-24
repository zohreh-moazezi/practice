import { createUseStyles } from 'react-jss';
import { theme } from '@theme/theme';

export const useStyles = createUseStyles({
  button: {
    width: '100%',
    padding: '0.5rem 1.37rem',
    borderRadius: '0.25rem',
    backgroundColor: theme.colors.buttonBackground,
    color: theme.colors.primary,
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'uppercase',
    boxShadow: [
      `0 3px 1px -2px ${theme.colors.shadowPrimary} `,
      `0 2px 2px 0 ${theme.colors.shadowSecondary} `,
      `0 1px 5px 0 ${theme.colors.shadowTartiary} `,
    ].join(','),
    fontFamily: theme.fonts.main,
    fontSize: '0.94rem',
    fontWeight: 500,
    lineHeight: '1.62rem',
    marginTop: '1rem',
  },
});
