import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { useStyles } from './styled';

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: React.FC<buttonProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <button className={classes.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
