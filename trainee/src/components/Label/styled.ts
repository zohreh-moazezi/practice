import { theme } from '@theme/theme';
import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  label: ({ hasError }: { hasError: boolean | undefined }) => ({
    color: hasError ? theme.colors.error : theme.colors.textSecondary,
    lineHeight: '1.5rem',
    position: 'absolute',
    pointerEvents: 'none',
    left: '0.75rem',
    top: '2rem',
    fontFamily: theme.fonts.main,
    transition: 'all 0.3s ease',
    backgroundColor: theme.colors.primary,
  }),
});
