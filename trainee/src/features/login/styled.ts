import { theme } from '@theme/theme';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  div: {
    minWidth: '40%',
    backgroundColor: theme.colors.primary,
    boxShadow: [
      `0 1px 3px 0 ${theme.colors.shadowTartiary}`,
      `0 1px 1px 0 ${theme.colors.shadowSecondary}`,
      `0 2px 1px -1px ${theme.colors.shadowPrimary}`,
    ].join(','),
    borderRadius: '0.25rem',
    '@media screen and (max-width:768px)': {
      width: '100%',
    },
  },
});
