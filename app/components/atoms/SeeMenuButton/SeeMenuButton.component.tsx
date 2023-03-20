import {FC} from 'react';
import {SeeMenuButtonProps, StyledSeeMenuButton} from './SeeMenuButton.styles';

export const SeeMenuButton: FC<SeeMenuButtonProps> = ({children, ...props}) => {
  return <StyledSeeMenuButton {...props}>{children}</StyledSeeMenuButton>;
};
