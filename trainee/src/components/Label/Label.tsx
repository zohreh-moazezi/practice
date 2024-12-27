import { useStyles } from './styled';
import React, { LabelHTMLAttributes, ReactNode } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  hasError?: boolean;
}

const Label: React.FC<LabelProps> = ({ hasError, children, ...props }) => {
  const classes= useStyles({hasError})
  return <label className={classes.label} {...props} > {children}</label>;
};

export default Label;
