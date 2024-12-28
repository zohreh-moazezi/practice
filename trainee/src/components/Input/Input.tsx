import React from 'react';
import { useStyles } from './styled';
import Label from 'components/Label/Label';

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  hasError?: boolean;
}

const Input: React.FC<InputProps> = ({
  error = '',
  hasError = false,
  ...props
}) => {
  const classes = useStyles({ error, hasError });
  return (
    <div className={classes.container}>
      <input className={classes.input} {...props} />
      {error && <div className="helperText">{error}</div>}

      <Label hasError={hasError}>{props.name}</Label>
    </div>
  );
};

export default Input;
