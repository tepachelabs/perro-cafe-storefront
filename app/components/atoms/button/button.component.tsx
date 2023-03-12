import React, {FC} from 'react';
import {ButtonProps, StyledButton} from './button.styles';

export const Button: FC<ButtonProps> = ({children, ...props}) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
