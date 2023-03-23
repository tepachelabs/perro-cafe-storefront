import {FC} from 'react';

import {
  ButtonFace,
  SeeMenuButtonProps,
  StyledSeeMenuButton,
  VerticalLine,
} from './SeeMenuButton.styles';

import buttonFace from './img/button-face.svg';

export const SeeMenuButton: FC<SeeMenuButtonProps> = ({...props}) => {
  return (
    <StyledSeeMenuButton {...props}>
      <VerticalLine top={93} left={83} />
      <VerticalLine top={85} left={93} />
      <ButtonFace src={buttonFace} alt="Button design" />
    </StyledSeeMenuButton>
  );
};
