import { theme } from '@theme/theme';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    padding: "0.5rem  2.5rem",
    fontFamily: theme.fonts.main,
  },
  title: {
    fontWeight: 700,
    fontSize: '1.4rem',
    color: theme.colors.textPrimary,
    lineHeight: '2rem',
  },
  detail: {
    fontSize: '0.8rem',
    color: theme.colors.textSecondary,
  },
});
