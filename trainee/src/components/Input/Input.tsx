import React, { InputHTMLAttributes } from 'react';
import { useStyles } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  hasError?: boolean;
}

const Input: React.FC<InputProps> = ({
  error = '',
  hasError = false,
  ...props
}) => {
  const classes = useStyles({ error, hasError });
  return <input className={classes.input} {...props} />;
};

export default Input;
