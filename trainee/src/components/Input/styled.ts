import { createUseStyles } from 'react-jss';
import { theme } from '@theme/theme';

const sharedStyle = {
  top: '0.4rem',

  transform: 'scale(0.75)',
  left: '-0.06rem',
};

export const useStyles = createUseStyles({
  input: ({ error, hasError }: { error: string; hasError: boolean }) => ({
    width: '100%',
    padding: '1.15rem',
    borderRadius: '0.25rem',
    border: `1px solid ${error || hasError ? theme.colors.error : theme.colors.border}`,
    '&:focus': {
      boxShadow: '0 0 0.31rem rgba(12,122,239,0.5)',
      outline: 'none',
    },
    '&:focus ~ .label': {
      ...sharedStyle,
    },
    '&:not(:placeholder-shown) ~ .label': {
      ...sharedStyle,
    },
    '&:active': {
      boxShadow: 'none',
    },
  }),
});
